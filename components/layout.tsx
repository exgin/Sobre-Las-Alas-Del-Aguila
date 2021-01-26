import Navbar from './navbar';
import Footer from './footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='container mx-auto'>
      <Navbar />

      <main>{children}</main>

      <Footer />
    </div>
  );
}
