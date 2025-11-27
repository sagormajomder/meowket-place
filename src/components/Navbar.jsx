import { SignedIn, SignedOut, SignOutButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';
import Image from 'next/image';
import Link from 'next/link';
import MenuLinks from './MenuLinks';

export default async function Navbar() {
  // const { isLoaded, isSignedIn, user } = useUser();

  const user = await currentUser();
  // console.log(user);

  return (
    <div className='navbar'>
      {/* Nav Start */}
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex='-1'
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'>
            <MenuLinks />
          </ul>
        </div>
        <Link href='/' className='text-xl'>
          MeowketPlace
        </Link>
      </div>
      {/* Nav Center */}
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <MenuLinks />
        </ul>
      </div>
      {/* Nav End */}
      <div className='navbar-end'>
        <SignedOut>
          <Link href='/login' className='btn btn-primary text-neutral'>
            Login
          </Link>
        </SignedOut>
        <SignedIn>
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
                  className='hover:text-accent'
                  href='/add-product'>
                  Add Product
                </Link>
              </li>
              <li className='mb-2'>
                <Link
                  prefetch={false}
                  className='hover:text-accent'
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
        </SignedIn>
      </div>
    </div>
  );
}
