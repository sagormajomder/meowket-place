import { GrDeliver } from 'react-icons/gr';
import { IoMdCall } from 'react-icons/io';
import { RiDiscountPercentLine } from 'react-icons/ri';
import Container from '../Container';
import SectionTitle from '../SectionTitle';

export default function WhyChooseUs() {
  return (
    <section className='py-6'>
      <Container>
        <SectionTitle title='Why Choose Us' desc='Where love meets expertise' />
        <div className='grid grid-cols-1 min-[30rem]:grid-cols-2 min-[50rem]:grid-cols-4 lg:gap-6 gap-6 min-[50rem]:gap-2'>
          {/* Box 1 */}
          <div className='py-6 px-2  bg-[#FFF3CD] rounded-lg flex flex-col items-center justify-center gap-2'>
            <div className='sm:w-25 sm:h-25 w-15 h-15 bg-white rounded-full flex items-center justify-center'>
              <GrDeliver className='sm:text-5xl text-3xl text-secondary' />
            </div>
            <div className='text-center'>
              <h3 className='heading-tertiary '>Fast Delivery</h3>
              <p className='text-sm'>Delivered within 24–48 hours</p>
            </div>
          </div>
          {/* Box 2 */}
          <div className='py-6 px-2  bg-[#E2EFD1] rounded-lg flex flex-col items-center justify-center gap-2'>
            <div className='sm:w-25 sm:h-25 w-15 h-15 bg-white rounded-full flex items-center justify-center'>
              <RiDiscountPercentLine className='sm:text-5xl text-3xl text-secondary' />
            </div>
            <div className='text-center'>
              <h3 className='heading-tertiary '>Best Prices</h3>
              <p className='text-sm'>Affordable & exclusive deals</p>
            </div>
          </div>
          {/* Box 3 */}
          <div className='py-6 px-2  bg-[#DBECFF] rounded-lg flex flex-col items-center justify-center gap-2'>
            <div className='sm:w-25 sm:h-25 w-15 h-15 bg-white rounded-full flex items-center justify-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='sm:size-12.5 size-8.75 text-secondary'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z'
                />
              </svg>
            </div>
            <div className='text-center'>
              <h3 className='heading-tertiary '>Secure Payments</h3>
              <p className='text-sm'>100% safe transactions</p>
            </div>
          </div>
          {/* Box 4 */}
          <div className='py-6 px-2  bg-[#F9DCDA] rounded-lg flex flex-col items-center justify-center gap-2'>
            <div className='sm:w-25 sm:h-25 w-15 h-15 bg-white rounded-full flex items-center justify-center'>
              <IoMdCall className='sm:text-5xl text-3xl text-secondary' />
            </div>
            <div className='text-center'>
              <h3 className='heading-tertiary '>24/7 Support</h3>
              <p className='text-sm'>We are always here to help</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
