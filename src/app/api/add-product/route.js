import { getProductCollection } from '@/lib/mongodb';

export async function POST(req) {
  const body = await req.json();

  // console.log('Api', body);

  const productsCollection = await getProductCollection();

  const result = await productsCollection.insertOne(body);
  // console.log('Api', result);

  return Response.json({ id: result.insertedId });
}
