import { getProductCollection } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';

export async function DELETE(req, { params }) {
  const { id } = await params;
  // console.log(id);

  const productCollection = await getProductCollection();

  const result = await productCollection.deleteOne({ _id: new ObjectId(id) });
  // console.log(result);

  return NextResponse.json(result);
}
