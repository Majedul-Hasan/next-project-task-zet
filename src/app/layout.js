import Header from '@/components/Header';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ZET : Become a Certified Financial Advisor and Earn Big',
  description:
    'Want to earn extra money from home? Download ZET, the best earning app without investment in India. Start your online business today and make regular income by selling financial products like credit cards, loans, saving accounts & other banking products.',
  keywords:
    'earn money app, earn money online, earn extra money, earn extra income, earn money from home, earn money online in india, best earning app, best earning app without investment, online earning app, financial advisor, money making app, make money online',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
