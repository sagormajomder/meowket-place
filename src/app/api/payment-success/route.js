import { getOrderCollection } from '@/lib/mongodb';
import { stripe } from '@/lib/stripe';
import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized', status: 401 });
    }

    const { session_id } = await req.json();

    const session = await stripe.checkout.sessions.retrieve(session_id);
    // console.log(session);

    const transactionId = session.payment_intent;

    const orderCollection = await getOrderCollection();

    // Close guard if payment exist
    const isPaymentExist = await orderCollection.findOne({
      transactionId,
    });

    // console.log(isPaymentExist);

    if (isPaymentExist) {
      return NextResponse.json({
        success: false,
        message: 'Payment already exists',
        transactionId,
      });
    }

    if (session.payment_status === 'paid') {
      const paymentData = {
        amount: session.amount_total / 100,
        currency: session.currency,
        customer_email: session.customer_email,
        transactionId,
        productName: session.metadata.productName,
        quantity: session.metadata.quantity,
        paymentStatus: session.payment_status,
        paidAt: new Date(),
      };

      const result = await orderCollection.insertOne(paymentData);

      return NextResponse.json({
        success: true,
        transactionId,
      });
    }

    return NextResponse.json({ success: false, message: 'Some error occurs' });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: error.statusCode || 500 }
    );
  }
}
