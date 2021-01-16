import { Nav } from 'react-bootstrap';
import layoutStyles from '../styles/Home.module.css';

import Navbar from './navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />

      <main>{children}</main>

      <footer className={layoutStyles.footer}>
        <p>place holder footer</p>
      </footer>
    </div>
  );
}
