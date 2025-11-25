'use client';
export default function RegisterForm() {
  function handleUserRegister() {}
  return (
    <form onSubmit={handleUserRegister}>
      <div className='mb-6 text-center'>
        <h2 className='heading-secondary mb-0.5'>Register</h2>
      </div>
      <fieldset className='fieldset'>
        {/* Email */}
        <label htmlFor='name' className='label'>
          Name
        </label>
        <input
          id='name'
          type='text'
          className='input w-full'
          placeholder='Name'
          // value={email}
          // onChange={e => setEmail(e.target.value)}
          required
        />
        {/* Email */}
        <label htmlFor='email' className='label'>
          Email
        </label>
        <input
          id='email'
          type='email'
          className='input w-full'
          placeholder='Email'
          // value={email}
          // onChange={e => setEmail(e.target.value)}
          required
        />
        {/* Password */}
        <label htmlFor='pass' className='label'>
          Password
        </label>
        <div className='relative'>
          <input
            id='pass'
            type='password'
            // type={showPassword ? 'text' : 'password'}
            className='input pr-8 w-full'
            placeholder='Password'
            // value={password}
            // onChange={e => setPassword(e.target.value)}
            required
          />
          {/* {password.length > 0 && (
                      <button
                        type='button'
                        onClick={() => setShowPassword(!showPassword)}
                        className='absolute top-1/2 right-6 z-10 -translate-y-1/2 cursor-pointer text-xl'>
                        {showPassword ? (
                          <AiOutlineEyeInvisible />
                        ) : (
                          <AiOutlineEye />
                        )}
                      </button>
                    )} */}
        </div>
        <div>
          <a className='link link-hover hover:text-accent'>Forgot password?</a>
        </div>
        <button className='btn btn-primary mt-4 text-neutral'>Login</button>
      </fieldset>
    </form>
  );
}
