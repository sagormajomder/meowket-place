import { getProductCollection } from '@/lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET() {
  const productsCollection = await getProductCollection();

  const products = await productsCollection.find().toArray();
  // console.log(products);

  return NextResponse.json(products);
}
