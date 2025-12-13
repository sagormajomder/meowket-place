import { getPaymentCollection } from '@/lib/mongodb';
import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
export async function GET(req) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized', status: 401 });
  }

  const paymentCollection = await getPaymentCollection();

  const email = req.nextUrl.searchParams.get('email');
  // console.log(email);

  const payment = await paymentCollection
    .find({
      customer_email: email,
    })
    .sort({ paidAt: -1 })
    .toArray();

  // console.log(payment);

  return NextResponse.json(payment);
}
