'use client';

import { motion } from 'framer-motion';
import InvestorCard from './InvestorCard';

const InvestorsSection = () => {
  return (
    <section className='mx-auto'>
      <div className='grid gap-20 mx-auto py-20 max-w-[90rem]'>
        <h2 className='text-2xl font-bold md:text-3xl lg:text-4xl'>
          Meet the Investors
        </h2>
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 0.5 }}
          className='grid grid-cols-2 justify-items-center gap-6 md:grid-cols-3 xl:grid-cols-4'>
          <InvestorCard ImgSrc='/assets/InvCompany1.png' />
          <InvestorCard ImgSrc='/assets/InvCompany2.png' />
          <InvestorCard ImgSrc='/assets/InvCompany3.png' />
          <InvestorCard ImgSrc='/assets/InvCompany4.png' />
        </motion.div>
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 0.5 }}
          className='grid grid-cols-2 justify-items-center gap-6 md:grid-cols-3 xl:grid-cols-4'>
          <InvestorCard
            ImgSrc='/assets/Inv1.png'
            name='Kunal Shah'
            tag='Founder, CRED'
          />
          <InvestorCard
            ImgSrc='/assets/Inv2.png'
            name='Gaurav Munjal'
            tag='Founder, UNACADEMY'
          />
          <InvestorCard
            ImgSrc='/assets/Inv3.png'
            name='Aakrit Vaish'
            tag='Co-Founder, HAPTIK'
          />
          <InvestorCard
            ImgSrc='/assets/Inv4.png'
            name='Harshil Mathur'
            tag='Founder, RAZORPAY'
          />
          <InvestorCard
            ImgSrc='/assets/Inv5.png'
            name='Vidit Aatrey'
            tag='Founder & CEO, MEESHO'
          />
          <InvestorCard
            ImgSrc='/assets/Inv6.png'
            name='Amrish Rau'
            tag='CEO, PINELABS'
          />
          <InvestorCard
            ImgSrc='/assets/Inv7.png'
            name='Lalit Keshre'
            tag='CEO, GROWW'
          />
          <InvestorCard
            ImgSrc='/assets/Inv8.png'
            name='Gokul Rajaram'
            tag='Product, DOORDASH'
          />
        </motion.div>
      </div>
    </section>
  );
};

export default InvestorsSection;
