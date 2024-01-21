import { Btn } from '@/components/index';

export default function CTA() {
  return (
    <main className="sm:flexCenter marginY padding bg-black-gradient-2 box-shadow flex flex-col items-start rounded-[20px] sm:flex-row">
      <div className="flex flex-1 flex-col">
        <h2 className="heading2">Let&rsquo;s try our service now!</h2>
        <p className="paragraph mt-5 max-w-[470px]">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="flexCenter ml-0 mt-10 sm:ml-10 sm:mt-0">
        <Btn label="Get Started" className="px-6 py-7" />
      </div>
    </main>
  );
}
