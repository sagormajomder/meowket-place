import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product }) {
  const { _id, productName, photoUrl, shortDesc, productPrice } = product;
  return (
    <div className='bg-white rounded-xl overflow-hidden shadow-lg group'>
      {/* Image Container */}
      <div className='relative overflow-hidden'>
        <Image
          src={photoUrl}
          alt={productName}
          width={400}
          height={300}
          quality={[75, 90]}
          className='w-full h-48 object-cover group-hover:scale-120 transition duration-300'
        />
      </div>

      {/* Content */}
      <div className='p-4 bg-gray-800 text-white flex flex-col justify-between min-h-50'>
        <div>
          {/* Product Name */}
          <h3 className='font-semibold text-base mb-2 '>{productName}</h3>

          {/* Short Description */}
          <p className='text-gray-400 text-sm mb-3'>{shortDesc}</p>

          {/* Price */}
          <div className='text-secondary font-bold text-xl mb-4'>
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
