import styles from "../styles/Home.module.css";
import ClientOnly from "../components/client-only";
import AllUser from "../components/users";

const ClientSide = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="">Next.js!</a>
        </h1>
        <ClientOnly>
          <AllUser />
        </ClientOnly>
      </main>
    </div>
  );
};

export default ClientSide;
