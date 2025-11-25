'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Links() {
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
    </>
  );
}
