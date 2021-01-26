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

      <div className='relative'>
        <div className='absolute top-10 right-12 text-2x1 text-red-800 bg-blue-400'>
          Sobre Las Alas Del Aguila aids families in this living condtion around the clock
        </div>
        <img src='/homeT.JPG' alt='' />
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
            <img src='/house.JPG' alt='' />
          </div>

          <div className='w-48 m-5 shadow-lg'>
            <p className='mx-2 py-2 text-center'>Hope</p>
            <img src='/hope.JPG' alt='' />
          </div>
        </div>
      </div>

      <div>
        <p>Feeding 10,000 children a day. Needing 7 containers a food, $7,000 per container</p>
        <p>500 churches built </p>
        <p>It cost $10,000 per house to be built</p>
      </div>
    </Layout>
  );
}
