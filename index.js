import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
  
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Hello Putra Syahwal Alam</h1>
        <div className={styles.grid}>
          <div className={styles.card}>
              <h3>Midori Days</h3>
            <Link href="blog">
              <p>
              Klik di sini!
            </p>
            </Link>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
