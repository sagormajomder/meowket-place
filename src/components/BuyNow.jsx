'use client';

import { redirect } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function BuyNow({ productName, price, buyerEmail }) {
  const [quantity, setQuantity] = useState(1);
  async function handlePayment() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/checkout_sessions`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          quantity,
          price,
          productName,
          buyerEmail,
        }),
      }
    );

    const result = await res.json();
    console.log(result);
    const { url, error = '' } = result;

    if (url) {
      redirect(url);
    }

    if (result.error) {
      toast.error(result.error);
    }
  }
  return (
    <>
      <p className='mb-2'>Total Price: ৳{(price * quantity).toFixed(2)}</p>
      <div className='flex gap-2 items-center '>
        <button
          onClick={() => setQuantity(prevQ => prevQ + 1)}
          className='btn rounded-full btn-success text-xl'>
          +
        </button>
        <span className='text-2xl'>{quantity}</span>
        <button
          onClick={() => {
            if (quantity !== 1) setQuantity(prevQ => prevQ - 1);
          }}
          className='btn rounded-full btn-warning text-xl'>
          -
        </button>
      </div>

      <button
        onClick={handlePayment}
        className='w-full btn btn-primary text-neutral font-semibold text-lg rounded-lg shadow-lg'>
        Buy Now
      </button>
    </>
  );
}
