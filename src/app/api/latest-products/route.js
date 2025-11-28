import { getProductCollection } from '@/lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET() {
  const productsCollection = await getProductCollection();

  const latestProducts = await productsCollection
    .find()
    .sort({ createdAt: 'desc' })
    .limit(6)
    .toArray();
  // console.log(products);

  return NextResponse.json(latestProducts);
}
