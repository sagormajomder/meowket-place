import HeroBanner from '@/components/Homepage/HeroBanner';
import WhyChooseUs from '@/components/Homepage/WhyChooseUs';

export default function HomePage() {
  return (
    <div className='space-y-10'>
      <HeroBanner />
      <WhyChooseUs />
    </div>
  );
}
