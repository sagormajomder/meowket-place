import { getProductCollection } from '@/lib/mongodb';
import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { userId } = await auth();

  // console.log(userId);

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized', status: 401 });
  }

  const body = await req.json();

  // console.log('Api', body);

  const productsCollection = await getProductCollection();

  const result = await productsCollection.insertOne(body);
  // console.log('Api', result);

  return NextResponse.json({ id: result.insertedId });
}
