import Link from "next/link";

import { Icon } from "@/components/index";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BtnProps } from "@/types";
import { ArrowUpRight } from "lucide-react";

export function GetStarted() {
  return (
    <Link
      href="./get-started"
      className="get-started flexCenter bg-blue-gradient size-[140px] rounded-full p-[2px]"
    >
      <div className="flexCenter size-full flex-col rounded-full bg-primaryy text-xl font-medium">
        <div className="flexStart mb-2 flex-row">
          <p className="mr-2 leading-[23.4px]">
            <span className="text-gradient">Get</span>
          </p>
          <Icon icon={ArrowUpRight} />
        </div>

        <p className="leading-[23.4px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </Link>
  );
}

export function Btn({ label, className }: BtnProps) {
  return (
    <Link href="./get-started">
      <Button
        type="button"
        className={cn(
          "bg-blue-gradient rounded-[10px] px-5 py-6 text-[18px] font-medium text-primaryy outline-none",
          className,
        )}
      >
        {label}
      </Button>
    </Link>
  );
}
