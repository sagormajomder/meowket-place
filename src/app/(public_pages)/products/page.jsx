import Container from '@/components/Container';
import ProductCard from '@/components/ProductCard';
import SectionTitle from '@/components/SectionTitle';
import Image from 'next/image';
import Link from 'next/link';

export default async function Products() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);
  const products = await res.json();
  // console.log(products);
  return (
    <section className='py-14 h-full'>
      <Container>
        <SectionTitle
          title='All Products'
          desc='Shop every product for happy, healthy pets'
        />
        {/* Filter */}
        <div className='flex sm:justify-between flex-col sm:flex-row  items-center gap-2 mb-8'>
          <select defaultValue='Pick a color' className='select'>
            <option disabled={true}>Sort products</option>
            <option>Sort by High Price</option>
            <option>Sort by Low Price</option>
          </select>
          <label className='input'>
            <svg
              className='h-[1em] opacity-50'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'>
              <g
                strokeLinejoin='round'
                strokeLinecap='round'
                strokeWidth='2.5'
                fill='none'
                stroke='currentColor'>
                <circle cx='11' cy='11' r='8'></circle>
                <path d='m21 21-4.3-4.3'></path>
              </g>
            </svg>
            <input type='search' required placeholder='Search' />
          </label>
        </div>
        {/* Product Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {products.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
