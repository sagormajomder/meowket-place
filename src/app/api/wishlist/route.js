import { getProductCollection, getWishlistCollection } from '@/lib/mongodb';
import { auth } from '@clerk/nextjs/server';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { productId } = await req.json();
    if (!productId) {
      return NextResponse.json(
        { error: 'Product ID required' },
        { status: 400 }
      );
    }

    const wishlistCollection = await getWishlistCollection();
    const wishlist = await wishlistCollection.findOne({ userId });

    let isWishlisted = false;

    if (wishlist && wishlist.products.includes(productId)) {
      // Remove from wishlist
      await wishlistCollection.updateOne(
        { userId },
        { $pull: { products: productId } }
      );
      isWishlisted = false;
    } else {
      // Add to wishlist
      await wishlistCollection.updateOne(
        { userId },
        { $addToSet: { products: productId }, $setOnInsert: { userId } },
        { upsert: true }
      );
      isWishlisted = true;
    }

    return NextResponse.json({ isWishlisted });
  } catch (error) {
    console.error('Wishlist POST error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  try {
    const { userId } = await auth();
    if (!userId) {
      // Return empty array if not logged in, or 401.
      // Since it's used in public pages possibly, returning empty is safer?
      // But for protected wishlist page, 401 is better.
      // Let's return empty array and maybe handle auth on client/server component calling it.
      // Or 401. The plan said protected page for viewing.
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const wishlistCollection = await getWishlistCollection();
    const wishlist = await wishlistCollection.findOne({ userId });

    if (!wishlist || !wishlist.products || wishlist.products.length === 0) {
      return NextResponse.json([]);
    }

    const productIds = wishlist.products.map(id => {
      try {
        return new ObjectId(id);
      } catch (e) {
        return id;
      }
    });

    // Filter out invalid IDs if any non-object-ids got in there, or assume mixed.
    // Ideally we assume products uses ObjectId.

    // We need to fetch the actual product details from products collection
    const productsCollection = await getProductCollection();

    // Note: Assuming product IDs in 'products' collection are ObjectIds.
    // If they are strings, we shouldn't cast.
    // Usually MongoDB _id is ObjectId.

    const validObjectIds = productIds.filter(id => id instanceof ObjectId);

    const products = await productsCollection
      .find({ _id: { $in: validObjectIds } })
      .toArray();

    return NextResponse.json(products);
  } catch (error) {
    console.error('Wishlist GET error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
