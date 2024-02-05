import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const BlogSkeleton = () => {
  return (
    <div className="w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between first:mt-0 border border-solid border-dark dark:border-light border-r-4 border-b-4 sm:flex-col sm:items-start">
      <Skeleton className="h-4 w-11/12 md:my-2" />
      <Skeleton className="h-4 w-1/12 sm:w-1/4 ml-4 md:my-2 sm:ml-0 xs:text-sm" />
    </div>
  );
};

export default BlogSkeleton;
