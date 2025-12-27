import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
if (!process.env.MONGODB_URI) {
  throw new Error('Please add your MongoDB URI to .env');
}
const client = new MongoClient(uri, {});
const dbClient = await client.connect();
const db = dbClient.db('meowketPlaceDB');

export async function getProductCollection() {
  return db.collection('products');
}

export async function getOrderCollection() {
  return db.collection('orders');
}

export async function getWishlistCollection() {
  return db.collection('wishlists');
}
