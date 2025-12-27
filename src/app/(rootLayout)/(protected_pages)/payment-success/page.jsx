import Container from '@/components/Container';
import { headers } from 'next/headers';
import Link from 'next/link';

export default async function PaymentSuccessPage({ searchParams }) {
  const { session_id } = await searchParams;
  const headersList = await headers();
  // console.log(session_id);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/payment-success`,
    {
      method: 'POST',
      headers: {
        Cookie: headersList.get('cookie') || '',
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({ session_id }),
    }
  );

  const result = await res.json();
  const { success, transactionId } = result;

  return (
    <section className='h-full py-14'>
      <Container>
        <div className='space-y-2'>
          {!success ? (
            <p>Some Error Occurs</p>
          ) : (
            <>
              <h2 className='text-4xl'>Payment Successful</h2>
              <p>Your TransactionID: {transactionId}</p>
              <Link
                href='/dashboard/my-orders'
                className='btn btn-primary text-neutral'>
                View Order Details
              </Link>
            </>
          )}
        </div>
      </Container>
    </section>
  );
}
