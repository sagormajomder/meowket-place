import Container from '@/components/Container';
import Link from 'next/link';

export default function PaymentCancelled() {
  return (
    <section className='h-full py-14'>
      <Container>
        <h2 className='text-4xl mb-4'>Payment Cancelled</h2>
        <Link href='/' className='btn btn-primary text-neutral'>
          Goto Home
        </Link>
      </Container>
    </section>
  );
}
