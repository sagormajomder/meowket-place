import Container from '@/components/Container';
import DeleteProduct from '@/components/DeleteProduct';
import SectionTitle from '@/components/SectionTitle';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';

export default async function MyProduct() {
  const headersList = await headers();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/my-product`,
    {
      headers: {
        Cookie: headersList.get('cookie') || '',
      },
    }
  );

  const data = await res.json();
  // console.log('product data', data);

  return (
    <section className='h-full py-14'>
      <Container>
        <SectionTitle
          title='Manage Products'
          desc='Your dashboard for pet food & product care'
        />
        {/* Table */}
        {data.length === 0 ? (
          <h2 className='heading-secondary my-5 text-center'>
            You haven&apos;t added any Product 🥲
          </h2>
        ) : (
          <div className='overflow-x-auto rounded-box border border-base-content/5 bg-base-100'>
            <table className='table'>
              {/* head */}
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Product Name</th>
                  <th>Product Image</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((d, i) => (
                  <Row key={d._id} singleData={d} i={i + 1} />
                ))}

                {/* row 2 */}
              </tbody>
            </table>
          </div>
        )}
      </Container>
    </section>
  );
}

function Row({ singleData, i }) {
  const { _id, productName, photoUrl, shortDesc, productPrice } = singleData;

  return (
    <tr>
      <th>{i}</th>
      <td>{productName}</td>
      <td>
        <Image src={photoUrl} alt={productName} width={50} height={50} />
      </td>
      <td>{shortDesc}</td>
      <td>{productPrice}</td>
      <td className='flex gap-2'>
        <Link
          href={`/product-details/${_id}`}
          className='btn btn-primary text-neutral'>
          View
        </Link>
        <DeleteProduct productId={_id} />
      </td>
    </tr>
  );
}
