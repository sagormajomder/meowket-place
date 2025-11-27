import { getProductCollection } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  const { id } = await params;
  // console.log(id);
  const productsCollection = await getProductCollection();

  const product = await productsCollection.findOne({ _id: new ObjectId(id) });
  // console.log(product);

  return NextResponse.json(product);
}
