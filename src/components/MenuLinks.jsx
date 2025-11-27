'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MenuLinks() {
  const pathname = usePathname();
  return (
    <>
      <li>
        <Link href='/' className={` ${pathname === '/' ? 'active' : ''}`}>
          Home
        </Link>
      </li>
      <li>
        <Link
          href='/products'
          className={` ${pathname === '/products' ? 'active' : ''}`}>
          Products
        </Link>
      </li>
      <li>
        <Link
          href='/about'
          className={` ${pathname === '/about' ? 'active' : ''}`}>
          About Us
        </Link>
      </li>
      <li>
        <Link
          href='/contact'
          className={` ${pathname === '/contact' ? 'active' : ''}`}>
          Contact Us
        </Link>
      </li>
    </>
  );
}
