import { SignIn } from '@clerk/nextjs';

export default function LoginPage() {
  return (
    <section className='h-full py-14 flex justify-center items-center'>
      <SignIn />
    </section>
  );
}
