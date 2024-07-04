import { Skeleton } from "@/components/ui/skeleton";

export default function TableSkeleton(){
  return(
    <div className="rounded py-4 px-2 border-slate-50 mt-2 border w-11/12 flex flex-col gap-4 justify-start items-center">
      <div className="w-full flex justify-start text-left">
        <Skeleton className="rounded-xl w-1/3 h-8"/>
      </div>
      <Skeleton className="rounded-xl w-11/12 h-8"/>
      <Skeleton className="rounded-xl w-11/12 h-8"/>
      <Skeleton className="rounded-xl w-11/12 h-8"/>
      <Skeleton className="rounded-xl w-11/12 h-8"/>
      <Skeleton className="rounded-xl w-11/12 h-8"/>
      <Skeleton className="rounded-xl w-11/12 h-8"/>
      <Skeleton className="rounded-xl w-11/12 h-8"/>
      <Skeleton className="rounded-xl w-11/12 h-8"/>
    </div>
  )
}
