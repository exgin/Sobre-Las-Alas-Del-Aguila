import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Sobre</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div>
        <h1 className={styles.title}>Hero img / text</h1>

        <span className={styles.photoText}></span>
      </div>

      <hr />

      <main className={styles.main}>
        <p>content of page</p>
      </main>
    </Layout>
  );
}
