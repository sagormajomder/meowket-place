import Container from '@/components/Container';
import GoogleLogin from '@/components/GoogleLoginButton';
import RegisterForm from '@/components/RegisterForm';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <main>
      <section className='h-full py-14'>
        <Container style='flex items-center justify-center px-4 h-full'>
          <div className='flex bg-base-100 w-[90%] sm:w-[70%] md:w-[40%] shadow-2xl rounded-lg'>
            <div className='card-body basis-1/2 self-center py-10'>
              <RegisterForm />
              <div className='divider'>OR</div>
              {/* Google */}
              <GoogleLogin />
              <p className='text-center text-xs'>
                Already Have An Account?{' '}
                <Link
                  className='hover:underline underline md:no-underline hover:text-accent'
                  href='/login'>
                  Login Now
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
