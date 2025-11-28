import Image from 'next/image';
import Link from 'next/link';
import Container from '../Container';
import SectionTitle from '../SectionTitle';

export default function CustomerFeedback() {
  return (
    <section className='py-6'>
      <Container>
        <SectionTitle
          title='Customer Feedback'
          desc='Real stories, real experiences, real trust'
        />
        <div className='lg:flex items-center lg:justify-between py-20 rounded-lg bg-linear-to-b from-grad-2 to-grad-1 px-12'>
          {/* Content */}
          <div className='text-white mb-10 lg:basis-2/5'>
            <h2 className='heading-secondary  leading-14'>
              Meet Our Super Customer
            </h2>
            <p className='mb-5'>
              Meet Our Pet Lovers celebrates the caring owners who inspire us
              daily. From devoted companions to playful explorers, they bring
              joy, trust, and stories—making MeowketPlace more than a shop, but
              a community to cherish.
            </p>
            <span className='inline-block px-6 text-xl font-bold bg-white py-2 rounded-md mx-auto'>
              <Link
                href='/'
                className='bg-linear-to-r bg-clip-text from-grad-1 to-grad-2 text-transparent'>
                Explore More
              </Link>
            </span>
          </div>
          {/* -- customer feedback */}
          <div className='relative sm:h-135 flex items-center justify-center lg:basis-3/5'>
            <div className='flex flex-col sm:z-10 pt-10 px-10 pb-5 bg-white rounded-md relative sm:-translate-x-5 lg:-translate-x-0 sm:max-w-[82%] lg:max-w-[70%] md:max-w-[75%]'>
              <figure className='bg-white p-1 rounded-full absolute -top-5 -left-5'>
                <Image
                  src='/client.png'
                  alt='customer'
                  width={60}
                  height={60}
                />
              </figure>
              <p className='mb-5'>
                MeowketPlace makes shopping for my pet so easy and fun. I can
                browse all the latest essentials in one place, discover new
                arrivals, and trust that every product is chosen with care for
                my furry friend.
              </p>
              <div>
                <p className='text-neutral font-bold mb-1'>Ilham Yuda</p>
                <p className='text-sm text-gray-500'>Businessman</p>
              </div>
              <figure className='ml-auto translate-x-2'>
                <Image
                  src='/circles.png'
                  alt='Illustration'
                  width={20}
                  height={20}
                />
              </figure>
            </div>

            {/* Customer Feedback opacity */}
            <div className='absolute opacity-30 top-5 md:top-12 lg:top-5 translate-x-12 lg:translate-x-20 max-w-[82%] md:max-w-[75%] lg:max-w-[70%] hidden sm:block'>
              <div className='flex flex-col pt-10 px-10 pb-5 bg-white rounded-md relative'>
                <figure className='bg-white p-1 rounded-full absolute -top-5 -left-5'>
                  <Image
                    src='/client.png'
                    alt='customer'
                    width={60}
                    height={60}
                  />
                </figure>
                <p className='mb-5'>
                  MeowketPlace makes shopping for my pet so easy and fun. I can
                  browse all the latest essentials in one place, discover new
                  arrivals, and trust that every product is chosen with care for
                  my furry friend.
                </p>
                <div>
                  <p className='text-neutral font-bold mb-1'>Ilham Yuda</p>
                  <p className='text-sm text-gray-500'>Businessman</p>
                </div>
              </div>
            </div>
            {/* Customer Feedback opacity */}
            <div className='absolute opacity-30 bottom-4 md:bottom-12 lg:bottom-5 translate-x-12 lg:translate-x-20 max-w-[82%] md:max-w-[75%] lg:max-w-[70%] hidden sm:block'>
              <div className='flex flex-col pt-10 px-10 pb-5 bg-white rounded-md relative'>
                <figure className='bg-white p-1 rounded-full absolute -top-5 -left-5'>
                  <Image
                    src='/client.png'
                    alt='customer'
                    width={60}
                    height={60}
                  />
                </figure>
                <p className='mb-5'>
                  MeowketPlace makes shopping for my pet so easy and fun. I can
                  browse all the latest essentials in one place, discover new
                  arrivals, and trust that every product is chosen with care for
                  my furry friend.
                </p>
                <div>
                  <p className='text-neutral font-bold mb-1'>Ilham Yuda</p>
                  <p className='text-sm text-gray-500'>Businessman</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
