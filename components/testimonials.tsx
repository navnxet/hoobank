import Image from "next/image";

import { feedback } from "@/constants";
import { quotes } from "@/public";
import { FeedbackCardProps } from "@/types";

export function FeedbackCard({ content, name, title, img }: FeedbackCardProps) {
  return (
    <main className="feedback-card first:bg-black-gradient my-5 mr-0 flex max-w-[370px] flex-col justify-between rounded-[20px] px-10 py-12 last:mb-0 sm:mr-5 md:mr-10">
      <Image
        src={quotes}
        alt="double_qoutes"
        className="object-contain"
        width={42}
        height={27}
        priority
      />
      <p className="my-10 text-[18px] font-normal leading-[32px] text-white">
        {content}
      </p>
      <div className="flex flex-row">
        <Image
          src={img}
          alt={name}
          className="rounded-full object-contain"
          width={48}
          height={48}
          priority
        />
        <div className="ml-4 flex flex-col">
          <h4 className="text-[20px] font-semibold leading-[32px]">{title}</h4>
          <p className="text-[16px] font-normal leading-[24px] text-dimWhite">
            {name}
          </p>
        </div>
      </div>
    </main>
  );
}

export default function Testimonials() {
  return (
    <main id="clients" className="paddingY flexCenter relative flex-col">
      <div className="blue__gradient absolute right-[-50%] z-0 size-[60%] rounded-full"></div>
      <div className="flexBetween relative z-[1] mb-6 w-full flex-col sm:mb-16 md:flex-row">
        <h2 className="heading2">
          What people are <br className="hidden sm:block" /> saying about us
        </h2>
        <div className="mt-6 w-full md:mt-0">
          <p className="paragraph max-w-[450px] text-left">
            Everything you ness to accept card payments{" "}
            <br className="hidden sm:block" /> and grow your business anywhere
            on the planet.
          </p>
        </div>
      </div>

      <div className="feedback-container relative z-[1] flex w-full flex-wrap justify-center sm:justify-start">
        {feedback.map((card, idx) => (
          <FeedbackCard key={idx} {...card} />
        ))}
      </div>
    </main>
  );
}
