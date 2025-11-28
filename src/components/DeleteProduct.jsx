'use client';

import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function DeleteProduct({ productId }) {
  const router = useRouter();
  async function handleDeleteProduct() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/delete-product/${productId}`,
      {
        method: 'DELETE',
      }
    );

    const isDelete = await res.json();

    if (isDelete.acknowledged) {
      toast.success('Product is successfully deleted!');
      router.refresh();
      router.push('/my-product');
    } else {
      toast.error('Some error occured!');
    }
  }
  return (
    <button
      onClick={handleDeleteProduct}
      className='btn btn-primary text-neutral'>
      Delete
    </button>
  );
}
