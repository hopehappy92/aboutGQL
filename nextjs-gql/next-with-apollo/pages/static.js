import styles from "../styles/Home.module.css";
import { gql } from "@apollo/client";
import client from "../apollo-client";

export default function Home({ allUser }) {
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
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query allUser {
        allUser {
          name
          id
          password
          email
        }
      }
    `,
  });

  return {
    props: {
      allUser: data.allUser,
    },
  };
}
