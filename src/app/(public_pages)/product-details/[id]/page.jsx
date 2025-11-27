import Container from '@/components/Container';
import Image from 'next/image';

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
          {/* Main Content Grid */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {/* Left Side - Product Image */}
            <div className=' rounded-lg p-8 relative'>
              <Image
                src={photoUrl}
                alt={productName}
                width={0}
                height={0}
                className='w-full h-auto object-cover'
              />
            </div>

            {/* Right Side - Product Details */}
            <div className=' space-y-6'>
              {/* Product Name */}
              <h1 className='text-4xl font-bold'>{productName}</h1>

              {/* Price */}
              <div className='text-3xl font-semibold text-primary'>
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
                    width={0}
                    height={0}
                    className='w-16 h-16 rounded-full object-cover'
                  />
                  <div>
                    <div className='font-semibold text-lg'>{userName}</div>
                    <div className='text-gray-600'>{userEmail}</div>
                    <div className='text-gray-600 text-sm'>
                      Published on: {formatDate(createdAt)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Buy Now Button */}
              <button className='w-full btn btn-primary text-neutral font-semibold text-lg rounded-lg shadow-lg mb-5'>
                Buy Now
              </button>
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
