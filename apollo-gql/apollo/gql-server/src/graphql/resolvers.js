/*
Resolver
사용자가 쿼리를 요청했을 때 서버가 이를 어떻게 처리할지 정의한 파일
요청에 대해 단순히 데이터를 반환할 수도 있지만, 직접 DB 검색, memory 접근, 다른 API 요청 가능
프로젝트가 커지면 resolver 구현이 복잡해지는데, 이럴땐 prisma나 TypeORM 등 DB ORM 사용
*/

import movies from "../database/movies";
import users from "../database/users";
import { AuthenticationError, ForbiddenError } from "apollo-server";
import bcrypt from "bcrypt";
import sha256 from "crypto-js/sha256";
import rand from "csprng";

const resolvers = {
  Query: {
    movies: () => movies,
    movie: (_, { id }) => {
      return movies.filter((movie) => movie.id === id)[0];
    },
    users: (_, __, { user }) => {
      if (!user) throw new AuthenticationError("Not Authenticated");
      if (!user.roles.includes("admin"))
        throw new ForbiddenError("Not Authrized");
      return users;
    },
    me: (_, __, { user }) => {
      if (!user) throw new AuthenticationError("Not Authenticated");
      return user;
    },
  },
  Mutation: {
    addMovie: (_, { name, rating }) => {
      if (movies.find((movie) => movie.name === name)) return null;

      const newMovie = {
        id: movies.length + 1,
        name,
        rating,
      };
      movies.push(newMovie);
      return newMovie;
    },
    addUser: (_, { ID, password }) => {
      if (users.find((user) => user.ID === ID)) return null;

      const newUser = {
        id: users.length + 1,
        ID,
        password,
      };
      users.push(newUser);
      return newUser;
    },
    signup: (_, { name, ID, password }) => {
      if (users.find((user) => user.ID === ID)) return false;

      bcrypt.hash(password, 10, function (err, passwordHash) {
        const newUser = {
          id: users.length + 1,
          name,
          ID,
          passwordHash,
          role: ["user"],
          token: "",
        };
        users.push(newUser);
      });
      return true;
    },
    login: (_, { ID, password }) => {
      let user = users.find((user) => user.ID === ID);

      if (!user) return null; // ID 없을 때
      if (user.token) return null; // 이미 로그인 중일 때
      if (!bcrypt.compareSync(password, user.passwordHash)) return null; // 비밀번호 틀림

      user.token = sha256(rand(160, 36) + ID + password).toString();
      return user;
    },
    logout: (_, __, { user }) => {
      if (user?.token) {
        user.token = "";
        return true;
      }
      throw new AuthenticationError("Not Authenticated");
    },
  },
};

export default resolvers;
