'use client';

import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

export default function AddToWishlist({
  productId,
  initialIsWishlisted = false,
  enableRefresh = false,
}) {
  const [isWishlisted, setIsWishlisted] = useState(initialIsWishlisted);
  const [isLoading, setIsLoading] = useState(false);
  const { isSignedIn } = useAuth();
  const router = useRouter();

  const toggleWishlist = async e => {
    e.preventDefault(); // Prevent link navigation if inside a Link
    e.stopPropagation();

    if (!isSignedIn) {
      toast.error('Please login to add to wishlist');
      router.push('/login');
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch('/api/wishlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId }),
      });

      if (!res.ok) {
        throw new Error('Failed to update wishlist');
      }

      const data = await res.json();
      setIsWishlisted(data.isWishlisted);

      if (data.isWishlisted) {
        toast.success('Added to wishlist');
      } else {
        toast.success('Removed from wishlist');
      }

      if (enableRefresh) {
        router.refresh();
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={toggleWishlist}
      disabled={isLoading}
      className='p-2 rounded-full bg-white/80 hover:bg-white text-red-500 transition-colors shadow-sm'
      aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}>
      {isWishlisted ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
    </button>
  );
}
