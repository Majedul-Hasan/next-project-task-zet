import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='relative  '>
      <div className='absolute -z-10'>
        <Image
          className='h-[500px] object-cover '
          src='/assets/footer.png'
          width={2000}
          height={800}
          alt='footer bg image'
        />
      </div>
      <div className='relative mt-20 max-w-[85rem] mx-auto '>
        <div className='container py-2 text-white'>
          <div className='border-b border-b-white py-6'>
            <Image
              src='static/logo_white.svg'
              alt='footer site logo'
              width={80}
              height={30}
            />
          </div>
          <div className='grid grid-cols-2 gap-10 py-10 md:grid-cols-3 lg:grid-cols-4 '>
            <div className='flex flex-col gap-2 '>
              <h4 className='text-md uppercase'>Company</h4>
              <Link
                className='text-sm'
                href='/about'>
                About Us
              </Link>
              <Link
                className='text-sm'
                href='/partner'>
                Partner with us
              </Link>
              <Link
                className='text-sm'
                href='/blog'>
                Blog
              </Link>
            </div>
            <div className='flex flex-col gap-2'>
              <h4 className='text-md uppercase'>Legal</h4>
              <Link
                className='text-sm'
                href='/privacy'>
                Privay policy
              </Link>
              <Link
                className='text-sm'
                href='/tos'>
                Terms of use
              </Link>
            </div>
            <div className='flex flex-col gap-2'>
              <h4 className='text-md uppercase'>Contact</h4>
              <a
                className='flex gap-2 text0sm'
                href='mailto:hi@zetapp.in'>
                <span>
                  <Image
                    src='/assets/EmailIcon.png'
                    alt='email icon'
                    height={20}
                    width={20}
                  />
                </span>
                hi@zetapp.in
              </a>
              <a
                className='flex gap-2 text0sm'
                href='tel:+91-7417274072'>
                <span>
                  <Image
                    src='/assets/PhoneIcon.png'
                    alt='phone icon'
                    height={20}
                    width={20}
                  />
                </span>
                +91-7417274072
              </a>
            </div>
            <div className='flex flex-col gap-2'>
              <h4 className='text-md uppercase'>Social</h4>
              <div className='flex gap-4'>
                <Link href=''>
                  <span>
                    <Image
                      src='/assets/linkedin.svg'
                      height={30}
                      width={30}
                      alt='linkedin logo'
                    />
                  </span>
                </Link>
                <Link href=''>
                  <span>
                    <Image
                      src='/assets/instagram.svg'
                      height={30}
                      width={30}
                      alt='insta logo'
                    />
                  </span>
                </Link>
                <Link href=''>
                  <span>
                    <Image
                      src='/assets/facebook.svg'
                      height={30}
                      width={30}
                      alt='facebook logo'
                    />
                  </span>
                </Link>
                <Link href=''>
                  <span>
                    <Image
                      src='/assets/Telegram.svg'
                      height={30}
                      width={30}
                      alt='telegram logo'
                    />
                  </span>
                </Link>
                <Link href=''>
                  <span>
                    <Image
                      src='/assets/Whatsapp.svg'
                      height={30}
                      width={30}
                      alt='whatsapp logo'
                    />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
