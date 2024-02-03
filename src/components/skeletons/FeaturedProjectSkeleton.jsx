import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

function FeaturedProjectSkeleton() {
  return (
    <div className="w-full flex items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark dark:border-light bg-light dark:bg-dark shadow-2xl p-12 relative lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <Skeleton className="w-1/2 lg:w-full h-[300px] rounded-xl" />
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <Skeleton className="h-4 w-full my-2" />
        <Skeleton className="h-4 w-full my-2" />
        <Skeleton className="h-10 w-full my-2" />
        <div className="mt-2 flex items-center">
          <Skeleton className="rounded-full h-[50px] w-[50px]" />
          <Skeleton className="h-10 w-[125px] ml-4 rounded-lg p-2 px-6 sm:px-4" />
        </div>
      </div>
    </div>
  );
}

export default FeaturedProjectSkeleton;
