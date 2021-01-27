import { useState } from 'react';
import Link from 'next/link';

/* FontAwesome imports */
import fontawesome from '@fortawesome/fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/fontawesome-free-solid';
fontawesome.library.add(faTwitter, faFacebook, faInstagram, faBars);
/****/

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  console.log(navbarOpen);

  return (
    <div className='shadow-md'>
      <nav className='relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg'>
        <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
          <div className='flex'>
            <a href='/'>
              <img src='/logo.JPG' alt='logo' className='w-6/12' />
            </a>
          </div>

          <button
            className='cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
            type='button'
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i className='fas fa-bars'></i>
          </button>
        </div>

        <div className={navbarOpen ? 'lg:flex flex-grow items-center' : 'hidden'}>
          {/* turn navbarOpen back to TRUE on a specific res, or else its stuck hidden */}
          <ul className='flex flex-col lg:flex-row list-none lg:m1-auto'>
            <li className='nav-item'>
              <Link href='/pages/donate'>
                <a className='px-3 py-2 flex items-center'>DONATE NOW</a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='/pages/about'>
                <a className='px-3 py-2 flex item-center'>ABOUT US</a>
              </Link>
            </li>
          </ul>

          <ul className='flex list-none ml-auto'>
            <li className='nav-item'>
              <a className='px-3 py-2 flex font-bold hover:opacity-75' href='#pablo'>
                <i className='fab fa-twitter opacity-75'></i>
              </a>
            </li>
            <li className='nav-item'>
              <a className='px-3 py-2 flex font-bold hover:opacity-75' href='#pablo'>
                <i className='fab fa-facebook opacity-75'></i>
              </a>
            </li>
            <li className='nav-item'>
              <a className='px-3 py-2 flex font-bold hover:opacity-75' href='#pablo'>
                <i className='fab fa-instagram opacity-75'></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
