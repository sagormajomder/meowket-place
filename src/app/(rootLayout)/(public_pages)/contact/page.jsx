'use client';
import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FiMapPin } from 'react-icons/fi';
import { IoCallOutline } from 'react-icons/io5';
import { MdOutlineEmail } from 'react-icons/md';

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isSubmit, setIsSubmit] = useState(false);

  function handleContact(data) {
    setIsSubmit(true);
    setTimeout(function () {
      setIsSubmit(false);
      toast.success('Sucessfully You send a message');
      reset();
    }, 1000);
  }

  return (
    <section className='py-14 h-full'>
      <Container>
        <SectionTitle
          title='Contact Us'
          desc="Have any questions or need help? We're always here for you. Reach out anytime!"
        />
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 my-20'>
          {/* Box 1 */}
          <div className='shadow-xl rounded-xl py-8 px-5 text-center'>
            <MdOutlineEmail className='text-4xl text-primary mx-auto mb-3' />
            <div>
              <h3 className='heading-tertiary'>Email Us</h3>
              <p>meowket-place@gail.com</p>
            </div>
          </div>
          {/* Box 2 */}
          <div className='shadow-xl rounded-xl py-8 px-5 text-center'>
            <IoCallOutline className='text-4xl text-primary mx-auto mb-3' />
            <div>
              <h3 className='heading-tertiary'>Call Us</h3>
              <p>+880 1234 567 890</p>
            </div>
          </div>
          {/* Box 3 */}
          <div className='shadow-xl rounded-xl py-8 px-5 text-center'>
            <FiMapPin className='text-4xl text-primary mx-auto mb-3' />
            <div>
              <h3 className='heading-tertiary'>Visit Us</h3>
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <SectionTitle title='Send Us a Message' />
        <form onSubmit={handleSubmit(handleContact)}>
          <fieldset className='fieldset'>
            <div className='flex sm:flex-row sm:items-center sm:justify-between sm:gap-5 w-full flex-col gap-2'>
              <div className='basis-1/2 flex flex-col gap-1'>
                {/* Name */}
                <label htmlFor='name' className='label'>
                  Name
                </label>
                <input
                  id='name'
                  type='text'
                  className='input w-full'
                  placeholder='John Doe'
                  {...register('name', { required: true })}
                />
                {errors.name?.type === 'required' && (
                  <span className='text-red-400'>Name is required!</span>
                )}
              </div>
              <div className='basis-1/2 flex flex-col gap-1'>
                {/* Email Address */}
                <label htmlFor='email' className='label'>
                  Email Address
                </label>
                <input
                  id='email'
                  type='email'
                  className='input w-full'
                  placeholder='example@gmail.com'
                  {...register('email', { required: true })}
                />
                {errors.email?.type === 'required' && (
                  <span className='text-red-400'>Email is required!</span>
                )}
              </div>
            </div>
            {/*  Message Subject */}
            <label htmlFor='subject' className='label'>
              Message Subject
            </label>
            <input
              id='subject'
              type='text'
              className='input w-full'
              placeholder='Message Subject'
              {...register('subject', { required: true })}
            />
            {errors.subject?.type === 'required' && (
              <span className='text-red-400'>Message Subject is required!</span>
            )}

            {/* Message */}
            <label htmlFor='p-price' className='label'>
              Message
            </label>

            <textarea
              id='p-price'
              className='textarea w-full'
              placeholder='Message'
              {...register('message', { required: true })}></textarea>
            {errors.message?.type === 'required' && (
              <span className='text-red-400'>Message is required!</span>
            )}

            <button
              type='submit'
              disabled={isSubmit}
              className='btn btn-primary text-neutral mt-4'>
              {isSubmit ? 'Sending...' : 'Send Message'}
            </button>
          </fieldset>
        </form>
      </Container>
    </section>
  );
}
