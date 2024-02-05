import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const FeaturedBlogSkeleton = () => {
  return (
    <div className="w-full p-4 border border-solid border-dark dark:border-light rounded-2xl">
      <div className="w-full cursor-pointer overflow-hidden rounded-lg inline-block">
        <Skeleton className="w-full lg:w-full h-[300px]" />
      </div>
      <Skeleton className="h-4 w-full my-2" />
      <Skeleton className="h-14 w-full my-2" />
      <Skeleton className="w-1/4 h-4 my-2" />
    </div>
  );
};

export default FeaturedBlogSkeleton;
