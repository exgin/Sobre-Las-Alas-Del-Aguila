import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Layout from '../components/layout';

import { Image, Box } from '@chakra-ui/react';
import test from '../images/test.jpg';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Sobre</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Sobre Las Alas Del Aguila</h1>

        <Box boxSize='sm'>
          <Image src={test} alt='test img' />
        </Box>
      </main>
    </Layout>
  );
}
