import Image from 'next/image';

import { Btn } from '@/components/index';
import { card } from '@/public';

export default function CardDeal() {
  return (
    <main className="section">
      <div className="sectionInfo">
        <h2 className="heading2">
          Find a better card deal <br className="hidden sm:block" /> in few easy
          steps.
        </h2>
        <p className="paragraph mt-5 max-w-[470px]">
          With the credit card, you can improve your financial life by building
          credit, earning rewards and saving money.
        </p>
        <Btn label="Get Started" className="mt-10" />
      </div>
      <div className="sectionImg">
        <Image src={card} alt="card" className="h-auto w-auto" priority />
      </div>
    </main>
  );
}
