'use client';

import { doCredentialLogin } from '@/actions';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState('');

  async function handleUserLogin(e) {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);

      const response = await doCredentialLogin(formData);
      console.log(response);

      if (response.error) {
        console.error(response.error);
        setError(response.error.message);
      } else {
        router.push('/');
      }
    } catch (error) {
      console.error(error);
      setError('Wrong Credentials! Please check your Credentials');
    }
  }
  return (
    <form onSubmit={handleUserLogin}>
      <div className='mb-6 text-center'>
        <h2 className='heading-secondary mb-0.5'>Welcome Back</h2>
        <p className='text-xs'>Log in your account</p>
      </div>
      <fieldset className='fieldset'>
        {/* Email */}
        <label htmlFor='email' className='label'>
          Email
        </label>
        <input
          id='email'
          type='email'
          name='email'
          className='input w-full'
          placeholder='Email'
          required
        />
        {/* Password */}
        <label htmlFor='pass' className='label'>
          Password
        </label>

        <input
          id='pass'
          type='password'
          name='password'
          className='input pr-8 w-full'
          placeholder='Password'
          required
        />

        <div>
          <a className='link link-hover hover:text-accent'>Forgot password?</a>
        </div>
        <button className='btn btn-primary mt-4 text-neutral'>Login</button>
      </fieldset>
      <div className='text-xl text-red-500 text-center mt-1'>{error}</div>
    </form>
  );
}
