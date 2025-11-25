import Container from '@/components/Container';
import LoginForm from '@/components/LoginForm';
import SocialLogin from '@/components/SocialLogin';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <main>
      <section className='h-full py-14'>
        <Container style='flex items-center justify-center px-4 h-full'>
          <div className='flex bg-base-100 w-[90%] sm:w-[70%] md:w-[40%] shadow-2xl rounded-lg'>
            <div className='card-body basis-1/2 self-center py-10'>
              <LoginForm />
              <div className='divider'>OR</div>
              {/* Socila Login */}
              <SocialLogin />
              <p className='text-center text-xs'>
                Don&apos;t Have An Account?{' '}
                <Link
                  className='hover:underline underline md:no-underline hover:text-accent'
                  href='/register'>
                  Register Now
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
