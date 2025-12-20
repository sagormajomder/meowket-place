import Container from '@/components/Container';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import './../../globals.css';

export const metadata = {
  title: 'MeowketPlace',
  description: 'Your one‑stop shop for happy pets',
};

export default function RootLayout({ children }) {
  return (
    <div className='grid grid-rows-[auto_1fr_auto] min-h-screen'>
      <header className='shadow-sm py-1.5 sticky top-0 z-100 bg-white'>
        <Container>
          <Navbar />
        </Container>
      </header>
      <main className='min-w-0'>{children}</main>
      <Footer />
    </div>
  );
}
