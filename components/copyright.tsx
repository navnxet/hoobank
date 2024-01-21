import React from 'react';

import Link from 'next/link';

import { Icon } from '@/components/index';
import { socialMedia } from '@/constants';

const year = new Date().getFullYear();

export default function Copyright() {
  return (
    <div className="flexBetween w-full flex-col border-t border-t-[#3f3e45] pt-6 md:flex-row">
      <p className="text-center text-[18px] font-normal leading-[27px]">
        <span className="text-gradient text-xl font-semibold">&copy;</span>{' '}
        {year}{' '}
        <Link href="./" className="text-gradient font-bold">
          Hoobank
        </Link>
        . All Rights Reserved.
      </p>
      <div className="mt-6 flex flex-row md:mt-0">
        {socialMedia.map((social, idx) => (
          <Link href={social.link} key={idx} className="mr-6 last:mr-0">
            <Icon icon={social.icon} className="hover:text-secondaryy" />
          </Link>
        ))}
      </div>
    </div>
  );
}
