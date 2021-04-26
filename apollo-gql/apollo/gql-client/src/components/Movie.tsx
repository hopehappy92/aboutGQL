import { Link } from "react-router-dom";

function Movie({ id, name }: { id: number; name: string }) {
  return (
    <div>
      {" "}
      <Link to={`/movie/${id}`}>{name}</Link>
    </div>
  );
}

export default Movie;
