import Image from 'next/image';
import React from 'react';
import ProductCard from './ProductCard';

const Products = () => {
  return (
    <section className='max-w-[90rem] mx-auto '>
      <div className='absolute left-0 -z-10 h-full w-full bg-gradient-to-br from-blue-200/30'>
        <Image
          src='/assets/pat1.svg'
          alt='background decoration image'
          height={900}
          width={300}
        />
        <Image
          className='absolute bottom-0 right-0'
          src='/assets/pat2.svg'
          alt='background decoration image'
          height={900}
          width={300}
        />
      </div>

      <div className='py-20  text-center'>
        <h3 className='text-xl font-bold'>Products on ZET</h3>
        <p className='text-sm'>We are trusted by best brand in the country</p>
      </div>
      <div className='grid gap-8 lg:grid-cols-2 xl:px-28'>
        <ProductCard
          src='/assets/CC.png'
          title='CREDIT CARDS'
          content='100% Contactless Application Process with Instant Approval From Top Banks.'
          bg='#eeffee'
        />
        <ProductCard
          src='/assets/Loan.png'
          title='LOANS'
          content='100% online process. Instant offers. Affordable Rate of Interest on loans.'
          bg='#ffeecc'
        />
        <ProductCard
          src='/assets/BNPL.png'
          title='BUY NOW PAY LATER'
          content='Short-term financing that allows consumers to make purchases and pay for them over time.'
          bg='#ffeeee'
        />
        <ProductCard
          src='/assets/AccountSave.png'
          title='SAVING ACCOUNTS'
          content='ZET offers range of savings account that suits your personal needs for the banking.'
          bg='#ffeedd'
        />
      </div>
    </section>
  );
};

export default Products;
