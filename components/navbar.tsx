import Image from 'next/image';
import Link from 'next/link';

import { NavMobile } from '@/components/index';
import { navLinks } from '@/constants';
import { logo } from '@/public';

export default function Navbar() {
  return (
    <nav className="flexBetween navbar w-full py-6">
      <Link href="./">
        <Image src={logo} alt="logo" className="h-[32px] w-[124px]" priority />
      </Link>
      <ul className="hidden flex-1 list-none items-center justify-end sm:flex">
        {navLinks.map((item, idx) => (
          <li
            key={idx}
            className="hover:text-gradient first:text-gradient mr-10 rounded-md px-2 py-[6px] text-[16px] font-medium last:mr-0"
          >
            <Link href={item.url}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <NavMobile>
        <ul className="flex flex-1 list-none flex-col items-center justify-end">
          {navLinks.map((item, idx) => (
            <li key={idx} className="mb-4 text-[16px] font-medium last:mb-0">
              <Link href={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </NavMobile>
    </nav>
  );
}
