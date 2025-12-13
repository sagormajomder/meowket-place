import { stripe } from '@/lib/stripe';
import { auth } from '@clerk/nextjs/server';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const paymentInfo = await req.json();
    console.log(paymentInfo);

    const headersList = await headers();
    const origin = headersList.get('origin');

    const { userId } = await auth();
    // console.log('my product route userid', userId);

    if (!userId) {
      return NextResponse.json({ url: `${origin}/login` });
    }

    const amount = Math.round(parseFloat(paymentInfo.price) * 100);
    const totalAmount = amount * paymentInfo.quantity;
    console.log(totalAmount);

    if (totalAmount < 6000) {
      return NextResponse.json(
        { error: 'Minimum order amount is ৳60' },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'bdt',
            unit_amount_decimal: amount,
            product_data: {
              name: `Please pay for ${paymentInfo.productName}`,
            },
          },
          quantity: paymentInfo.quantity,
        },
      ],
      mode: 'payment',
      customer_email: paymentInfo.buyerEmail,
      success_url: `${origin}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/payment-cancelled`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: error.statusCode || 500 }
    );
  }
}
