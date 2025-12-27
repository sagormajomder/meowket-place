import Container from '@/components/Container';
import ProductCard from '@/components/ProductCard';
import SectionTitle from '@/components/SectionTitle';
import { getProductCollection, getWishlistCollection } from '@/lib/mongodb';
import { auth } from '@clerk/nextjs/server';
import { ObjectId } from 'mongodb';

export default async function WishlistPage() {
  const { userId } = await auth();

  if (!userId) {
    return (
      <section className='py-14'>
        <Container>
          <div className='text-center text-xl text-red-500 mt-10'>
            Please login to view your wishlist.
          </div>
        </Container>
      </section>
    );
  }

  const wishlistCollection = await getWishlistCollection();
  const wishlist = await wishlistCollection.findOne({ userId });

  let products = [];
  if (wishlist && wishlist.products && wishlist.products.length > 0) {
    const productIds = wishlist.products
      .map(id => {
        try {
          return new ObjectId(id);
        } catch (e) {
          return null;
        }
      })
      .filter(id => id);

    if (productIds.length > 0) {
      const productsCollection = await getProductCollection();
      const rawProducts = await productsCollection
        .find({ _id: { $in: productIds } })
        .toArray();

      products = rawProducts.map(p => ({
        ...p,
        _id: p._id.toString(),
      }));
    }
  }

  return (
    <section className='py-14'>
      <Container>
        <SectionTitle title='My Wishlist' desc='Your saved products' />
        {products.length === 0 ? (
          <div className='text-center text-xl text-gray-400 mt-10'>
            Your wishlist is empty.
          </div>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {products.map(product => (
              <ProductCard
                key={product._id}
                product={product}
                isWishlisted={true}
                enableRefresh={true}
              />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
