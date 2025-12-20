import {
  default as BuyNow,
  default as BuyNowButton,
} from '@/components/BuyNow';
import Container from '@/components/Container';
import Image from 'next/image';
import Link from 'next/link';

export default async function ProductDetailsPage({ params }) {
  const { id } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/product-details/${id}`
  );
  const data = await res.json();

  const {
    productName,
    shortDesc,
    fullDesc,
    productPrice,
    photoUrl,
    userName,
    userEmail,
    userPhoto,
    createdAt,
  } = data;

  const formatDate = dateString => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };

  return (
    <section className='py-14 h-full text-neutral'>
      <Container>
        <div className=' p-8'>
          {/* Back to Home Button */}
          <Link
            href='/'
            className=' px-6 py-3  text-white rounded-lg btn btn-accent transition-colors'>
            Back to Home
          </Link>
          {/* Main Content Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
            {/* Left Side - Product Image */}
            <div className=' relative rounded-xl'>
              <Image
                src={photoUrl}
                alt={productName}
                width={600}
                height={500}
                className='w-full h-auto object-cover rounded-xl'
              />
            </div>

            {/* Right Side - Product Details */}
            <div className=' space-y-6'>
              {/* Product Name */}
              <h1 className='md:text-3xl text-2xl font-bold'>{productName}</h1>

              {/* Price */}
              <div className='md:text-2xl text-xl  font-bold text-secondary'>
                Price: ৳ {productPrice}
              </div>

              {/* Short Description */}
              <div className='space-y-2'>
                <h2 className='text-xl font-semibold'>Short Description:</h2>
                <p className=''>{shortDesc}</p>
              </div>

              <div className='divider'></div>
              {/* Seller Info */}
              <div className='space-y-4 pt-4'>
                <h2 className='text-xl font-semibold'>Added by Seller:</h2>
                <div className='flex items-center space-x-4'>
                  <Image
                    src={userPhoto}
                    alt={userName}
                    width={200}
                    height={200}
                    className='w-16 h-16 rounded-full object-cover'
                  />
                  <div>
                    <div className='font-semibold '>{userName}</div>
                    <div className='text-gray-600 text-sm'>{userEmail}</div>
                    <div className='text-gray-600 text-sm'>
                      Published on: {formatDate(createdAt)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Buy Now Button */}
              <BuyNow price={productPrice} productName={productName} />
            </div>
          </div>
          <div className='divider'></div>
          {/* Full Description */}
          <div className='space-y-2'>
            <h2 className='text-xl font-semibold'>Full Description:</h2>
            <p className=''>{fullDesc}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
