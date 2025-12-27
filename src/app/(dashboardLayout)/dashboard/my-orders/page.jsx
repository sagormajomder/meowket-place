import { currentUser } from '@clerk/nextjs/server';
import { headers } from 'next/headers';

export default async function page() {
  const user = await currentUser();
  const headersList = await headers();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/my-orders?email=${user?.primaryEmailAddress.emailAddress}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Cookie: headersList.get('cookie') || '',
      },
    }
  );
  const data = await res.json();
  // console.log(data);
  return (
    <section>
      <h1 className='text-4xl mb-4 font-bold'>My Orders</h1>

      <div className='overflow-x-auto rounded-box border border-base-content/5 bg-base-100'>
        <table className='table'>
          {/* head */}
          <thead>
            <tr>
              <th>SL.</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Total Amount</th>
              <th>Transaction Id</th>
              <th>Payment Date</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data.map((payment, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{payment.productName}</td>
                <td>{payment.quantity}</td>
                <td>{payment.amount}</td>
                <td>{payment.transactionId}</td>
                <td>{new Date(payment.paidAt).toDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
