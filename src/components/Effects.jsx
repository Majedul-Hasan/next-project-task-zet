'use client';
import Image from 'next/image';
import { useState } from 'react';
import Slider from 'react-slick';

const Effects = () => {
  const [progress, setProgress] = useState(1);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2600,
    cssEase: 'ease',
    arrows: false,
    beforeChange: (current) => setProgress((100 / (3 - 2)) * (current + 1)),
  };
  return (
    <section className='my-44 grid h-screen place-items-center'>
      <div className='clip absolute left-0 -z-20 h-[120vh] w-full bg-[#145cc5]'></div>
      <div className='clip2 relative flex h-4/5 w-full items-center bg-[#417fda] max-w-[80rem]'>
        <div className='flex justify-between'>
          <div className='mt-28 mb-10 ml-0 hidden hue-rotate-180 saturate-200 lg:block'>
            <Image
              className='saturate-200 sepia '
              src='/assets/peeps1.png'
              alt='slider background image'
              height={500}
              width={750}
            />
          </div>
          <div className=' flex -ml-20 flex-col justify-center gap-10 px-10 font-bold text-white'>
            <h3 className='uppercase text-lg '>The ZET Effect</h3>
            <Slider
              {...settings}
              className='w-80 text-white lg:text-xl xl:w-[500px]'>
              <div>
                <p>
                  14 Lakh+ Financial Advisor across India are using ZET to
                  increase their income.
                </p>
              </div>
              <div>
                <p>
                  We helped customers in more than 50 cities to get their first
                  financial product
                </p>
              </div>
              <div>
                <p>
                  More than ₹20 Cr earned by our Agents by selling Credit Cards
                  and Loans
                </p>
              </div>
            </Slider>
            <div className='relative h-2 w-[300px] overflow-hidden rounded-full bg-black/20'>
              <div
                className='absolute h-2 bg-white transition-all duration-1000'
                style={{ width: progress }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Effects;
