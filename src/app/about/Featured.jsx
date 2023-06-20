import Image from 'next/image';
import React from 'react';

const Featured = () => {
  return (
    <section className='  bg-gray-200 pt-4'>
      <div className='bg-slate-50 '>
        <div className=' max-w-[90rem] mx-auto '>
          <div className=' py-5'>
            <h2 className='mb-10 text-2xl font-bold md:text-4xl'>
              Got Featured
            </h2>
            <div className='flex max-w-full justify-between gap-2 '>
              <div>
                <Image
                  className='h-auto w-auto'
                  src='/assets/EconomicTimes.png'
                  alt='featured brand logo'
                  height={160}
                  width={220}
                />
              </div>
              <div>
                <Image
                  className='h-auto w-auto'
                  src='/assets/Inc42.png'
                  alt='featured brand logo'
                  height={160}
                  width={220}
                />
              </div>
              <div>
                <Image
                  className='h-auto w-auto'
                  src='/assets/mint.png'
                  alt='featured brand logo'
                  height={160}
                  width={220}
                />
              </div>
              <div>
                <Image
                  className='h-auto w-auto'
                  src='/assets/YourStory.png'
                  alt='featured brand logo'
                  height={160}
                  width={220}
                />
              </div>
              <div>
                <Image
                  className='h-auto w-auto'
                  src='/assets/BusinessStandard.png'
                  alt='featured brand logo'
                  height={160}
                  width={220}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
