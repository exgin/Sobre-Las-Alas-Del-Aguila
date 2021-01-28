import { useState } from 'react';
import Link from 'next/link';

/* FontAwesome imports */
import fontawesome from '@fortawesome/fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/fontawesome-free-solid';
fontawesome.library.add(faTwitter, faFacebook, faInstagram, faBars);

/* Navbar components */
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBIcon } from 'mdbreact';

export default function Navbar() {
  const [isOpen, setIsopen] = useState(false);

  return (
    <div className='shadow-md'>
      <MDBNavbar color='warning' dark expand='md'>
        <MDBNavbarBrand>
          <img src='/logo.JPG' alt='logo' className='w-4/12' />
        </MDBNavbarBrand>
        <MDBNavbarToggler className='bg-dark' onClick={() => setIsopen(!isOpen)} />
        <MDBCollapse id='navbarCollapse3' isOpen={isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>Something</MDBNavItem>
          </MDBNavbarNav>

          <MDBNavbarNav right>
            <MDBNavItem>
              <p className='waves-effect waves-light px-2'>
                <MDBIcon fab icon='twitter' />
              </p>
            </MDBNavItem>
            <MDBNavItem>
              <p className='waves-effect waves-light px-2'>
                <MDBIcon fab icon='instagram' />
              </p>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </div>
  );
}
