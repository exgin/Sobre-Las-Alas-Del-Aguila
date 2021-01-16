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

      <main className={styles.main}>
        <h1 className={styles.title}>Sobre Las Alas Del Aguila</h1>
      </main>
    </Layout>
  );
}
