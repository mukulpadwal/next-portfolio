import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

function ProjectSkeleton() {
  return (
    <div className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark dark:border-light bg-light dark:bg-dark p-6 relative xs:p-4">
      <Skeleton className="w-full h-[300px] rounded-3xl" />
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <Skeleton className="h-4 w-full my-2" />
        <Skeleton className="h-4 w-full my-2" />
        <div className="w-full mt-2 flex items-center justify-between">
          <Skeleton className="h-6 w-[100px] rounded-lg p-2 px-6 sm:px-4" />
          <Skeleton className="rounded-full h-[40px] w-[40px]" />
        </div>
      </div>
    </div>
  );
}

export default ProjectSkeleton;
