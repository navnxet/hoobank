import Image from 'next/image';
import Link from 'next/link';

import { downloadApps } from '@/constants';
import { bill } from '@/public';

import { Button } from './ui/button';

export default function Billing() {
  return (
    <main id="product" className="sectionReverse">
      <div className="sectionImgReverse">
        <Image
          className="relative z-[5] h-auto w-auto"
          src={bill}
          alt="bill"
          priority
        />
        <div className="white__gradient absolute -left-1/4 top-0 z-[3] h-[50%] w-[50%] rounded-full"></div>
        <div className="pink__gradient absolute -left-1/4 bottom-0 z-[0] h-[50%] w-[50%] rounded-full"></div>
      </div>

      <div className="sectionInfo">
        <h2 className="heading2">
          Easily control your <br className="hidden sm:block" /> billing &
          invoicing.
        </h2>
        <p className="paragraph mt-5 max-w-[470px]">
          With the credit card, you can improve your financial life by building
          credit, earning rewards and saving money.
        </p>
        <div className="mr-5 mt-6 flex flex-row flex-wrap gap-3 rounded-md last:mr-0 sm:mt-10">
          {downloadApps.map((app, idx) => (
            <Link
              href={app.url}
              key={idx}
              className="relative h-fit w-fit overflow-hidden rounded-lg border border-solid border-white/20 p-0"
            >
              <Image
                src={app.icon}
                alt={app.alter}
                width={app.widthh}
                height={app.heightt}
                className="h-auto w-auto object-contain"
                priority
              />
              <span className="shine"></span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
