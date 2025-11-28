import Container from '@/components/Container';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './../globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'MeowketPlace',
  description: 'Your one‑stop shop for happy pets',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className='grid grid-rows-[auto_1fr_auto] min-h-screen'>
          <header className='shadow-sm py-1.5 sticky top-0 z-100 bg-white'>
            <Container>
              <Navbar />
            </Container>
          </header>
          <main className='min-w-0'>{children}</main>
          <Footer />
        </body>
      </html>
      <Toaster />
    </ClerkProvider>
  );
}
