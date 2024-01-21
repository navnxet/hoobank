import Image from 'next/image';

import { GetStarted } from '@/components/index';
import { discount, robot } from '@/public';

export default function Hero() {
  return (
    <main id="home" className="paddingY flex flex-col md:flex-row">
      <div className="flexStart flex-1 flex-col px-6 sm:px-16 xl:px-0">
        <div className="bg-discount-gradient mb-2 flex flex-row items-center rounded-[10px] px-4 py-[6px]">
          <Image
            src={discount}
            alt="discount"
            className="h-[32px] w-[32px]"
            priority
          />
          <p className="paragraph ml-2 text-[15px] sm:text-[18px]">
            <span className="text-white">20%</span> Discount For{' '}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>
        <div className="flexBetween w-full flex-row">
          <h1 className="flex-1 text-[52px] font-semibold leading-[75px] ss:text-[72px] ss:leading-[100px]">
            The Next
            <br className="hidden sm:block" />{' '}
            <span className="text-gradient">Generation</span>
          </h1>
          <div className="mr-0 hidden ss:flex md:mr-4">
            <GetStarted />
          </div>
        </div>
        <h1 className="w-full text-[52px] font-semibold leading-[75px] ss:text-[68px] ss:leading-[100px]">
          Payment Method.
        </h1>
        <p className="paragraph mt-5 max-w-[470px]">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div className="flexCenter relative my-10 flex-1 md:my-0">
        <Image
          src={robot}
          alt="robot-hand"
          className="relative z-[5] h-full w-full"
          priority
        />
        <div className="pink__gradient absolute top-0 z-0 h-[35%] w-[40%]"></div>
        <div className="white__gradient z-1 absolute bottom-40 h-[80%] w-[80%] rounded-full"></div>
        <div className="blue__gradient absolute bottom-20 right-20 z-0 h-[50%] w-[50%]"></div>
      </div>
      <div className="flexCenter ss:hidden">
        <GetStarted />
      </div>
    </main>
  );
}
