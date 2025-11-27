import Link from 'next/link';
import Container from '../Container';

export default function HeroBanner() {
  return (
    <section className='py-8'>
      <Container>
        <div className='bg-[url(/cat-eat-banner-3.png)] h-112.5 bg-cover bg-position-[90%_20%] py-14   bg-no-repeat relative rounded-xl'>
          <div className='inset-0 absolute bg-black/60 lg:bg-transparent text-white lg:text-neutral  flex  items-center   rounded-xl'>
            <div className='max-w-162.5 px-8'>
              <h1 className='text-4xl md:text-5xl font-bold mb-3'>
                Pet Food As It Should Be, Pure & Simple
              </h1>
              <p className='text-xl mb-6'>
                Select health & wellness solutions for your pets
              </p>
              <Link href='/products' className='btn btn-primary text-neutral'>
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
