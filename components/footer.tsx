import Image from 'next/image';
import Link from 'next/link';

import { Copyright } from '@/components/index';
import { footerLinks } from '@/constants';
import { logo } from '@/public';

export default function Footer() {
  return (
    <footer className="flexCenter paddingY flex-col">
      <div className="flexStart mb-8 w-full flex-col md:flex-row">
        <div className="mr-10 flex flex-1 flex-col justify-start">
          <Link href="./">
            <Image
              src={logo}
              alt="logo"
              width={266}
              height={72}
              className="object-contain"
              priority
            />
          </Link>
          <p className="paragraph mt-4 max-w-[310px]">
            {' '}
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="mt-10 flex w-full flex-[1.5] flex-row flex-wrap justify-between md:mt-0">
          {footerLinks.map((footerLink, idx) => (
            <div key={idx} className="my-4 flex min-w-[150px] flex-col ss:my-0">
              <h4 className="text-[18px] font-semibold leading-[27px]">
                {footerLink.title}
              </h4>
              <ul className="mt-4 list-none">
                {footerLink.links.map((linked, index) => (
                  <li key={index} className="mb-4 last:mb-0">
                    <Link
                      href={linked.link}
                      className="cursor-pointer text-[16px] font-normal leading-[24px] text-dimWhite hover:text-secondaryy"
                    >
                      {linked.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Copyright />
    </footer>
  );
}
