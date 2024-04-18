"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ActiveLinkProps {
  href: string;
  tooltipText: string;
  children: React.ReactNode;
}

const ActiveLink = ({ href, tooltipText, children }: ActiveLinkProps) => {

  const currentPath = usePathname();
  const isActive = currentPath === href;

  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href={href}
            className={`flex w-full flex-col transition-all justify-center py-2 text-xs font-semibold items-center rounded-md hover:bg-green-300 ${isActive ? 'bg-green-300' : ""}`}>
            {children}
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>{tooltipText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default ActiveLink;
