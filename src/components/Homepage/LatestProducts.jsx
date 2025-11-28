import Container from '../Container';
import ProductCard from '../ProductCard';
import SectionTitle from '../SectionTitle';

export default async function LatestProducts() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/latest-products`
  );
  const latestProducts = await res.json();

  console.log(latestProducts);
  return (
    <section className='py-6'>
      <Container>
        <SectionTitle
          title='Latest Products'
          desc='Discover what’s new for your pets'
        />
        <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-3'>
          {latestProducts.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
