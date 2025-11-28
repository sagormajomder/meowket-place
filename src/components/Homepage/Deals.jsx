import Container from '../Container';

export default function Deals() {
  return (
    <section className='py-6'>
      <Container>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-4 md:gap-6 min-h-75'>
          <div className='bg-[url(/banner_1.jpg)] bg-no-repeat rounded-xl bg-cover bg-center flex items-center py-8 md:py-5'>
            <div className='md:max-w-[60%] p-5 '>
              <h3 className='heading-tertiary mb-4'>
                All Cats Food Up to 35% OFF
              </h3>
              <div className='space-y-0.5'>
                <p className='text-sm'>Discount -35%</p>
                <p className='text-2xl font-bold '>৳80.00</p>
              </div>
            </div>
          </div>
          <div className='bg-[url(/banner_2.jpg)] bg-no-repeat rounded-xl bg-cover bg-center flex items-center py-8 md:py-5'>
            <div className='md:max-w-[55%] p-5'>
              <h3 className='heading-tertiary mb-4'>
                Nutritious Foods Every Cat Will Love
              </h3>
              <div className='space-y-0.5'>
                <p className='text-sm'>Best Deals!</p>
                <p className='text-2xl font-bold '>15%</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
