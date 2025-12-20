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
        <body>{children}</body>
      </html>
      <Toaster />
    </ClerkProvider>
  );
}
