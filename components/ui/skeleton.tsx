import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-green-200 dark:bg-slate-200", className)}
      {...props}
    />
  )
}

export { Skeleton }
