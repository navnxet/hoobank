import Image from "next/image";

import { Btn } from "@/components/index";
import { features } from "@/constants";
import { FeatureCardProps } from "@/types";

export function FeatureCard({ icon, title, content }: FeatureCardProps) {
  return (
    <div className="even:bg-black-gradient hover:bg-black-gradient hover:shadow-card-shadow mb-6 flex flex-row rounded-[20px] p-6 last:mb-0">
      <div className="flexCenter size-[64px] rounded-full bg-dimBlue">
        <Image
          src={icon}
          alt="icon"
          className="size-auto object-contain"
          width={32}
          height={32}
          priority
        />
      </div>
      <div className="ml-3 flex flex-1 flex-col">
        <h3 className="mb-1 text-[18px] font-semibold leading-[23px]">
          {title}
        </h3>
        <p className="mb-1 text-[16px] font-normal leading-[24px] text-dimWhite">
          {content}
        </p>
      </div>
    </div>
  );
}

export default function Business() {
  return (
    <main id="features" className="section">
      <div className="sectionInfo">
        <h2 className="heading2">
          You do the business, <br className="hidden sm:block" /> we&rsquo;ll
          handle the money.{" "}
        </h2>
        <p className="paragraph mt-5 max-w-[470px]">
          With the credit card, you can improve your financial life by building
          credit, earning rewards and saving money. But with hundreds of credit
          cardds on the market.
        </p>
        <Btn label="Get Started" className="mt-10" />
      </div>
      <div className="sectionImg flex-col">
        {features.map((feature, idx) => (
          <FeatureCard key={idx} {...feature} />
        ))}
      </div>
    </main>
  );
}
