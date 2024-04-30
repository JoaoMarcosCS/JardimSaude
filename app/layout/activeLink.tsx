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
  directionTooltip: "top" | "right" | "bottom" | "left";
  children: React.ReactNode;
}

const ActiveLink = ({ href, tooltipText, children, directionTooltip }: ActiveLinkProps) => {

  const currentPath = usePathname();
  const isActive = currentPath === href;

  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href={href}
            className={`flex min-w-14 flex-col transition-all justify-center py-2 text-xs font-semibold items-center rounded-sm hover:text-green-400 ${isActive ? 'text-green-400' : ""}`}>
            {children}
          </Link>
        </TooltipTrigger>
        <TooltipContent side={directionTooltip}>
          <p>{tooltipText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default ActiveLink;
