'use client';

import Image from 'next/image';
import Slider from 'react-slick';

const StartEarning = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: 'ease',
    arrows: false,
  };
  return (
    <section className='  relative py-60 mb-80'>
      <div className='clip1 -top-12 lg:clip absolute left-0 -z-10 h-[100vh] w-full bg-[#0a2540] md:h-[160vh] lg:h-[180vh]'></div>
      <div className='text-white xl:px-20'>
        <div className='mb-24 w-full text-center'>
          <h3 className='text-lg font-bold'>Start Earning in 3 Easy Steps</h3>
          <p className='text-sm'>
            We have create the app the make your earning easy
          </p>
        </div>
        <div className='relative grid place-items-center max-w-[80rem] mx-auto'>
          <Slider
            {...settings}
            className='grid place-content-center '>
            <div className='px-20'>
              <div className='flex flex-col-reverse items-center gap-20 md:flex-row'>
                <div className='flex flex-1 flex-col items-center gap-10 md:items-start'>
                  <h4 className='clip3 w-fit bg-[#538bff] py-3 pl-5 pr-8 text-xl font-bold uppercase'>
                    step 1
                  </h4>
                  <p className='text-center text-3xl font-bold text-[#a3cbff] md:text-left'>
                    Download the App and sign up as ZET agent
                  </p>
                  <div className='relative h-3 w-[300px] rounded-full bg-white'>
                    <div className='slide-progress absolute h-3 rounded-full bg-[#7096ff] transition-all duration-[6s] ease-linear'></div>
                  </div>
                  <Image
                    src='/assets/googleplay.svg'
                    height={40}
                    width={120}
                    alt='google play icon'
                  />
                </div>
                <div className='w-52 overflow-hidden rounded-3xl lg:w-72 lg:rounded-[30px] '>
                  <video
                    autoPlay
                    loop
                    muted>
                    <source
                      src='/Step3.mp4'
                      type='video/mp4'
                    />
                  </video>
                </div>
              </div>
            </div>
            <div className='px-20'>
              <div className='flex flex-col-reverse items-center gap-20 md:flex-row'>
                <div className='flex flex-1 flex-col items-center gap-10 md:items-start'>
                  <h4 className='clip3 w-fit bg-[#538bff] py-3 pl-5 pr-8 text-xl font-bold uppercase'>
                    step 2
                  </h4>
                  <p className='text-center text-3xl font-bold text-[#a3cbff] md:text-left'>
                    Register your customers and Recommend financial products
                  </p>
                  <div className='relative h-3 w-[300px] rounded-full bg-white'>
                    <div className='slide-progress absolute h-3 rounded-full bg-[#7096ff] transition-all duration-[6s] ease-linear'></div>
                  </div>
                  <Image
                    src='/assets/googleplay.svg'
                    height={40}
                    width={120}
                    alt='google play icon'
                  />
                </div>
                <div className='w-52 overflow-hidden rounded-3xl lg:w-72 lg:rounded-[30px]'>
                  <video
                    autoPlay
                    loop
                    muted>
                    <source
                      src='/Step3.mp4'
                      type='video/mp4'
                    />
                  </video>
                </div>
              </div>
            </div>
            <div className='px-20'>
              <div className='flex flex-col-reverse items-center gap-20 md:flex-row'>
                <div className='flex flex-1 flex-col items-center gap-10 md:items-start'>
                  <h4 className='clip3 w-fit bg-[#538bff] py-3 pl-5 pr-8 text-xl font-bold uppercase'>
                    step 3
                  </h4>
                  <p className='text-center text-3xl font-bold text-[#a3cbff] md:text-left'>
                    Start earning upto ₹ 1 Lakh every month
                  </p>
                  <div className='relative h-3 w-[300px] rounded-full bg-white'>
                    <div className='slide-progress absolute h-3 rounded-full bg-[#7096ff] transition-all duration-[6s] ease-linear'></div>
                  </div>
                  <Image
                    src='/assets/googleplay.svg'
                    height={40}
                    width={120}
                    alt='google play icon'
                  />
                </div>
                <div className='w-52 overflow-hidden rounded-3xl lg:w-72 lg:rounded-[30px]'>
                  <video
                    autoPlay
                    loop
                    muted>
                    <source
                      src='/Step3.mp4'
                      type='video/mp4'
                    />
                  </video>
                </div>
              </div>
            </div>
          </Slider>
          <Image
            className='absolute -top-10 -z-10 w-72 md:-right-16 lg:w-auto'
            src='/assets/earningDec.svg'
            height={600}
            width={400}
            alt='background decal'
          />
        </div>
      </div>
    </section>
  );
};

export default StartEarning;
