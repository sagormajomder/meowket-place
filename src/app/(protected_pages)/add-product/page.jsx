'use client';
import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export default function AddProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user } = useUser();
  const router = useRouter();

  async function handleAddProduct(data) {
    const { productName, shortDesc, fullDesc, productPrice, photo } = data;
    const imageFile = photo[0];
    // Store the image
    const formData = new FormData();
    formData.append('image', imageFile);

    // upload image to the host and get image url
    const res = await fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
      {
        method: 'POST',
        body: formData,
      }
    );

    const photoResult = await res.json();
    // console.log(photoResult);
    const photoUrl = photoResult.data.url;
    // console.log(photoUrl);

    // create new product
    const newProduct = {
      productName,
      shortDesc,
      fullDesc,
      productPrice,
      photoUrl,
      userName: user?.fullName ?? '',
      userEmail: user?.primaryEmailAddress.emailAddress ?? '',
      userPhoto:
        user?.imageUrl ??
        'https://i.ibb.co.com/fzYGmQj8/avatar-placeholder.gif',

      createdAt: new Date(),
    };

    // Upload the new product into DB
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/add-product`,
      {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      }
    );

    const resData = await response.json();

    // console.log(resData);

    if (resData.id) {
      toast.success('Successfully product has been added');
      router.push('/my-product');
    } else {
      toast.error('Some error occured! Please try again');
      console.log(resData.error);
    }
  }
  return (
    <section className='h-full py-14'>
      <Container>
        <SectionTitle
          title='Add Product'
          desc='Where every pet finds what they love'
        />
        <form
          className='max-w-4xl mx-auto'
          onSubmit={handleSubmit(handleAddProduct)}>
          <fieldset className='fieldset'>
            {/* Product Name */}
            <label htmlFor='p-name' className='label'>
              Product Name
            </label>
            <input
              id='p-name'
              type='text'
              className='input w-full'
              placeholder='Product Name'
              {...register('productName', { required: true })}
            />
            {errors.productName?.type === 'required' && (
              <span className='text-red-400'>Product Name is required!</span>
            )}
            {/* Product short description */}
            <label htmlFor='p-short-desc' className='label'>
              Short Description
            </label>
            <input
              id='p-short-desc'
              type='text'
              className='input w-full'
              placeholder='Short Description'
              {...register('shortDesc', { required: true })}
            />
            {errors.shortDesc?.type === 'required' && (
              <span className='text-red-400'>
                Product short description is required!
              </span>
            )}
            {/* Product full description */}
            <label htmlFor='p-full-desc' className='label'>
              Full Description
            </label>
            <input
              id='p-full-desc'
              type='text'
              className='input w-full'
              placeholder='Full Description'
              {...register('fullDesc', { required: true })}
            />
            {errors.fullDesc?.type === 'required' && (
              <span className='text-red-400'>
                Product full description is required!
              </span>
            )}

            {/* Product Price */}
            <label htmlFor='p-price' className='label'>
              Product Price
            </label>

            <input
              id='p-price'
              type='number'
              step={0.1}
              className='input pr-10 w-full'
              placeholder='Product Price'
              {...register('productPrice', { required: true })}
            />
            {errors.productPrice?.type === 'required' && (
              <span className='text-red-400'>Product Price is required!</span>
            )}

            {/* Image */}
            <label htmlFor='image' className='label'>
              Product Photo
            </label>
            <input
              className='file-input'
              type='file'
              {...register('photo', { required: true })}
              id='image'
            />
            {errors.photo?.type === 'required' && (
              <span className='text-red-400'>Photo is required!</span>
            )}

            <button type='submit' className='btn btn-primary text-neutral mt-4'>
              Add Product
            </button>
          </fieldset>
        </form>
      </Container>
    </section>
  );
}
