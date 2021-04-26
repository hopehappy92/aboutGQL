import { gql, useQuery } from "@apollo/client";
import Movie from "components/Movie";
import { IMovie, IMoviesData } from "interfaces";
import Error from "components/Error";
import Loading from "components/Loading";

// 매개변수가 없는 Query 요청을 보냄
const GET_MOVIE = gql`
  query {
    movies {
      id
      name
    }
  }
`;

function Home() {
  // useQuery의 반환값은 loading, error, data
  // 쿼리 전송 후 반환되는 data의 구조는 useQuery에 첫번째 Generic으로 넘겨줌
  const { loading, error, data } = useQuery<IMoviesData>(GET_MOVIE);
  const movies = data?.movies.length !== 0 ? data?.movies : null;

  if (loading) return <Loading />;
  if (error) return <Error msg={error.message} />;

  return (
    <div>
      {movies?.map((movie: IMovie) => (
        <Movie key={movie.id} id={movie.id} name={movie.name} />
      )) ?? "No Movie ..."}
    </div>
  );
}

export default Home;
