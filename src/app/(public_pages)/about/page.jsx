import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';
import { GoGoal, GoPeople } from 'react-icons/go';
import { LuBox } from 'react-icons/lu';
import { MdOutlineStars } from 'react-icons/md';
import { RiUserStarLine } from 'react-icons/ri';

export default function page() {
  return (
    <section className='py-14 h-full'>
      <Container>
        <SectionTitle
          title='About Us'
          desc='MeowketPlace is a pet‑focused marketplace designed to simplify shopping for pet essentials, offering a clean, playful, and trustworthy experience for owners and their beloved companions.'
        />
        {/* Mission and Vision */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 my-20'>
          {/* Box 1 */}
          <div className='shadow-xl rounded-xl py-8 px-5'>
            <GoGoal className='text-6xl text-primary mb-3' />
            <div>
              <h3 className='heading-tertiary'>Our Mission</h3>
              <p>
                Our mission is to make pet care accessible and enjoyable by
                providing quality products, seamless navigation, and a
                user‑friendly platform tailored to every pet owner’s needs.
              </p>
            </div>
          </div>
          {/* Box 2 */}
          <div className='shadow-xl rounded-xl py-8 px-5'>
            <MdOutlineStars className='text-6xl text-primary mb-3' />
            <div>
              <h3 className='heading-tertiary'>Our Vision</h3>
              <p>
                We envision a world where pet owners can confidently find
                everything their pets need in one place, fostering healthier,
                happier lives through convenience, trust, and innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Why we started */}
        <div className='my-20'>
          <SectionTitle
            title='Why We Started'
            desc='We started MeowketPlace to bridge the gap between pet owners and reliable products, creating a dedicated space that combines love for animals with modern e‑commerce simplicity.'
          />
        </div>
        {/* Our team */}
        <SectionTitle title='Our Team' />
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
          {/* Box 1 */}
          <div className='shadow-xl rounded-xl py-8 px-5 text-center'>
            <GoPeople className='text-6xl text-primary mx-auto mb-3' />
            <div>
              <h3 className='heading-tertiary'>Dedicated Members</h3>
              <p>We work together to bring you the best experience.</p>
            </div>
          </div>
          {/* Box 2 */}
          <div className='shadow-xl rounded-xl py-8 px-5 text-center'>
            <LuBox className='text-6xl text-primary mx-auto mb-3' />
            <div>
              <h3 className='heading-tertiary'>Quality Assurance</h3>
              <p>Every product is carefully checked before delivery.</p>
            </div>
          </div>
          {/* Box 3 */}
          <div className='shadow-xl rounded-xl py-8 px-5 text-center'>
            <RiUserStarLine className='text-6xl text-primary mx-auto mb-3' />
            <div>
              <h3 className='heading-tertiary'>Customer First</h3>
              <p>Your happiness is our top priority at all times.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
