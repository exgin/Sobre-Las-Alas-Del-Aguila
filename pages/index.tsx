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
        <img className='' src='/house.JPG' alt='' />
      </div>

      <hr />

      <div className='w-full p-6 bg-blue-100'>
        <div className='w-48 mx-auto pt-6 border-b-2 border-orange-500 text-center text-2xl text-blue-700'>WHAT WE FIGHT FOR</div>
        <div className='flex justify-center flex-wrap p-10'>
          <div className='relative w-48 h-64 m-5 bg-white shadow-lg'>
            <p className='mx-2 py-2 border-b-2 text-center text-gray-700 font-semibold uppercase'>Children</p>
            <p className='p-2 text-sm text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac est massa.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
