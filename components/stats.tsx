import { stats } from '@/constants';

export default function Stats() {
  return (
    <main className="flexCenter mb-6 flex-row flex-wrap sm:mb-20">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="m-3 flex flex-1 flex-row items-center justify-start"
        >
          <h4 className="text-[30px] font-semibold leading-[43px] xs:text-[40px] xs:leading-[53px]">
            {stat.value}
          </h4>
          <p className="text-gradient ml-3 text-[15px] font-normal uppercase leading-[21px] xs:text-[20px] xs:leading-[26px]">
            {stat.title}
          </p>
        </div>
      ))}
    </main>
  );
}
