'use server';

export async function doCreateProduct(data) {
  // console.log('action', data);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/add-product`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  );

  const resData = await res.json();
  return resData;
}
