import { useState } from 'react';

import layoutStyles from '../styles/Home.module.css';

import fontawesome from '@fortawesome/fontawesome';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/fontawesome-free-solid';

fontawesome.library.add(faTwitter, faFacebook, faInstagram, faBars);

console.log(fontawesome.library);

export default function Layout({ children }: { children: React.ReactNode }) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div>
      <>
        <nav className='relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-gray-500 mb-3'>
          <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
            <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
              <a className='text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white' href='#pablo'>
                Sobre Las Alas Del Aguila
              </a>
              <button
                className='text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
                type='button'
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <i className='fas fa-bars'></i>
              </button>
            </div>
            <div className={'lg:flex flex-grow items-center' + (navbarOpen ? ' flex' : ' hidden')} id='example-navbar-danger'>
              <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
                <li className='nav-item'>
                  <a
                    className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
                    href='#pablo'
                  >
                    <i className='fab fa-twitter text-lg leading-lg text-white opacity-75'></i>
                    <span className='ml-2'>Twitter</span>
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
                    href='#pablo'
                  >
                    <i className='fab fa-facebook text-lg leading-lg text-white opacity-75'></i>
                    <span className='ml-2'>Facebook</span>
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
                    href='#pablo'
                  >
                    <i className='fab fa-instagram text-lg leading-lg text-white opacity-75'></i>
                    <span className='ml-2'>instagram</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>

      <main>{children}</main>

      <footer className={layoutStyles.footer}>
        {/* <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
        </a> */}
        <p>place holder footer</p>
      </footer>
    </div>
  );
}