import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
if (!process.env.MONGODB_URI) {
  throw new Error('Please add your MongoDB URI to .env');
}
const client = new MongoClient(uri, {});
const clientPromise = client.connect();

export async function getProductCollection() {
  const client = await clientPromise;
  const db = client.db('meowketPlaceDB');
  return db.collection('products');
}
