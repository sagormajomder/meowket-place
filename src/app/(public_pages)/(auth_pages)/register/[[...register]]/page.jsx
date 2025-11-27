import { SignUp } from '@clerk/nextjs';

export default function RegisterPage() {
  return (
    <section className='h-full py-14 flex justify-center items-center'>
      <SignUp />
    </section>
  );
}
