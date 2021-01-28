import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Layout from '../components/layout';

import CountUp from 'react-countup';
import { Controller, Scene } from 'react-scrollmagic';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Sobre</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='relative'>
        <div className={styles.heroText}>
          <div className='text-blue-500'>Sobre Las Alas Del Aguila</div>&nbsp;aids families in this living condtion around the clock.
        </div>
        <img className={styles.heroImg} src='/homeT.JPG' alt='' />
      </div>

      <div className='w-full'>
        <div className='w-48 mx-auto pt-6 border-b-2 text-center text-2xl text-blue-500'>WHAT WE FIGHT FOR</div>
        <div className='flex justify-center flex-wrap p-10'>
          <div className='w-48 m-5 shadow-lg'>
            <p className='mx-2 py-2 text-center'>Family</p>
            <img src='/2k.JPG' alt='' />
          </div>

          <div className='w-48 m-5 shadow-lg'>
            <p className='mx-2 py-2 text-center'>Freedom</p>
            <img className={styles.cardPic} src='/house.JPG' alt='cardpic' />
          </div>

          <div className='w-48 m-5 shadow-lg'>
            <p className='mx-2 py-2 text-center'>Hope</p>
            <img className={styles.cardPic} src='/kid1.JPG' alt='cardpic' />
          </div>
        </div>
      </div>

      <div>
        {/* add scroll magic along with countUp here */}
        <p>Feeding 10,000 children a day. Needing 7 containers a food, $7,000 per container</p>
        <p>500 churches built </p>
        <p>It cost $10,000 per house to be built</p>
      </div>
    </Layout>
  );
}
