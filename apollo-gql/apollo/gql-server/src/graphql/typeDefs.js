/*
Schema
서버에 어떻게 데이터를 요청할지 정의한 파일
요청 시 어떤 데이터를 얼마나 요청할지, 각각의 자료형은 무엇이고, 어떤 데이터를 필수로 요청할지 등
사용자는 반드시 스키마에 정의된 형태로 서버에 요청해야함
*/

import { gql } from "apollo-server";

const typeDefs = gql`
  type User {
    id: Int!
    name: String
    ID: String!
    password: String!
    passwordHash: String
    role: [String!]!
    token: String
  }

  type Movie {
    id: Int!
    name: String!
    rating: Int!
  }

  type Query {
    movies: [Movie!]!
    movie(id: Int!): Movie
    users: [User]!
    me: User!
  }

  type Mutation {
    addMovie(name: String!, rating: Int!): Movie!
    addUser(ID: String!, password: String!): User
    signup(name: String!, ID: String!, password: String!): Boolean!
    login(ID: String!, password: String!): User
    logout: Boolean!
  }
`;

export default typeDefs;
