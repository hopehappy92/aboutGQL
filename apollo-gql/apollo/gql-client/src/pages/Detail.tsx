import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { IMovieData, IMovieVars } from "interfaces";
import Error from "components/Error";
import Loading from "components/Loading";

// 매개변수가 있는 Query 요청을 보냄
// 매개변수의 타입을 명시해야함
const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      name
      rating
    }
  }
`;

function Detail() {
  const { id } = useParams<{ id: string }>();
  // useQuery의 2번째 매개변수에 variables를 담음
  const { loading, error, data } = useQuery<IMovieData, IMovieVars>(GET_MOVIE, {
    variables: { id: Number(id) },
  });

  if (loading) return <Loading />;
  if (error) return <Error msg={error.message} />;

  return (
    <div>
      {data?.movie ? (
        <>
          <div>Name: {data.movie.name}</div>
          <div>Rating: {data.movie.rating}</div>
        </>
      ) : (
        "No Detail..."
      )}
    </div>
  );
}

export default Detail;
