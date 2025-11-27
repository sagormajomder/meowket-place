import Container from '@/components/Container';
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
        {}
      </Container>
    </section>
  );
}

function ProductCard({ product }) {
  const { _id, productName, photoUrl, shortDesc, productPrice } = product;
  return (
    <div className='bg-white rounded-2xl overflow-hidden shadow-lg'>
      {/* Image Container */}
      <div className='relative '>
        <Image
          src={photoUrl}
          alt={productName}
          width={400}
          height={300}
          quality={90}
          className='w-full h-48 object-cover'
        />
      </div>

      {/* Content */}
      <div className='p-4 bg-gray-800 text-white flex flex-col justify-between h-[12.5rem]'>
        <div>
          {/* Product Name */}
          <h3 className='font-semibold text-base mb-2 '>{productName}</h3>

          {/* Short Description */}
          <p className='text-gray-400 text-sm mb-3'>{shortDesc}</p>

          {/* Price */}
          <div className='text-pink-500 font-bold text-xl mb-4'>
            ৳ {productPrice}
          </div>
        </div>

        {/* View Details Button */}
        <div>
          <Link
            href={`/product-details/${_id}`}
            className='w-full btn btn-primary text-neutral font-semibold rounded-lg'>
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
