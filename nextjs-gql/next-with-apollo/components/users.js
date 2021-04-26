import { useQuery, gql } from "@apollo/client";
import styles from "../styles/Home.module.css";

const QUERY = gql`
  query allUser {
    allUser {
      name
      id
      password
      email
    }
  }
`;

const AllUser = () => {
  const { data, loading, error } = useQuery(QUERY);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  const allUser = data.allUser;

  return (
    <div className={styles.grid}>
      {allUser.map((user) => (
        <div key={user.id} className={styles.card}>
          <h3>{user.name}</h3>
          <p>
            {user.id} - {user.email}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AllUser;
