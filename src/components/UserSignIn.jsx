'use client';

import { SignOutButton, useUser } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function UserSignIn() {
  const { isLoaded, isSignedIn, user } = useUser();
  const pathname = usePathname();
  return (
    <div className='dropdown dropdown-end'>
      <div tabIndex={0} role='image' className='cursor-pointer m-1'>
        <Image
          src={
            user?.imageUrl ??
            'https://i.ibb.co.com/fzYGmQj8/avatar-placeholder.gif'
          }
          alt={user?.firstName ?? ''}
          width={40}
          height={40}
          className='rounded-full'
        />
      </div>
      <ul
        tabIndex='-1'
        className='dropdown-content bg-base-100 rounded-box z-100 w-52 p-2 shadow-sm space-y-1'>
        <li>
          <h3 className='text-2xl text-center text-secondary'>
            {user?.fullName}
          </h3>
        </li>
        <li>({user?.primaryEmailAddress.emailAddress})</li>
        <hr className='mb-3' />
        <li className='mb-2'>
          <Link
            prefetch={false}
            className={` hover:text-primary-dark ${
              pathname === '/add-product' ? 'active' : ''
            }`}
            href='/add-product'>
            Add Product
          </Link>
        </li>
        <li className='mb-2'>
          <Link
            prefetch={false}
            className={`hover:text-primary-dark ${
              pathname === '/my-product' ? 'active' : ''
            }`}
            href='/my-product'>
            Manage Product
          </Link>
        </li>
        <li>
          <SignOutButton>
            <button className='btn btn-primary text-neutral w-full'>
              Logout
            </button>
          </SignOutButton>
        </li>
      </ul>
    </div>
  );
}
