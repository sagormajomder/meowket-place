import { getProductCollection } from '@/lib/mongodb';
import { NextResponse } from 'next/server';

import { auth, currentUser } from '@clerk/nextjs/server';

export async function GET() {
  const { userId } = await auth();
  // console.log('my product route userid', userId);

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized', status: 401 });
  }

  const user = await currentUser();

  // console.log('my product route user', user);
  const productsCollection = await getProductCollection();

  const products = await productsCollection
    .find({ userEmail: user.primaryEmailAddress.emailAddress })
    .toArray();
  // console.log('Api', products);

  return NextResponse.json(products);
}
