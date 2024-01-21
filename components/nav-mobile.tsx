'use client';

import React, { useState } from 'react';

import { Icon } from '@/components/index';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

export default function NavMobile({ children }: { children: React.ReactNode }) {
  const [toggle, setToggle] = useState(false);

  return (
    <main className="flex flex-1 items-center justify-end sm:hidden">
      <Button
        className="bg-black-gradient"
        size="icon"
        onClick={() => setToggle((prev) => !prev)}
      >
        <Icon icon={toggle ? X : Menu} />
      </Button>
      <div
        className={cn(
          'p-6 bg-black-gradient absolute top-20 right-0 mx-6 min-w-[140px] rounded-[10px] sidebar',
          toggle ? 'flex' : 'hidden',
        )}
      >
        {children}
      </div>
    </main>
  );
}
