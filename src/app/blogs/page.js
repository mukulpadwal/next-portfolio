"use client";

import AnimatedText from "@/components/AnimatedText";
import FeaturedBlog from "@/components/FeaturedBlog";
import Blog from "@/components/Blog";
import TransitionEffect from "@/components/TransitionEffect";

export default function Blogs() {
  return (
    <>
      <TransitionEffect />
      <div className="w-full h-full inline-block z-0 bg-light dark:bg-dark pt-16 p-32 xl:p-24 lg:p-16 md:p-12 md:pt-16 sm:p-8">
        <main className="w-full flex flex-col items-center justify-center overflow-hidden text-dark dark:text-light">
          <AnimatedText
            text="Tech Blogs: Shaping Tomorrow with Words"
            className="mb-16 !text-center !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
          />
          <ul className="w-full grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedBlog
              thumbNailImg="data:image/jpeg;base64,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"
              title="Test BLOG 1"
              time="8 minutes"
              summary="abcdefg"
              link="/"
            />

            <FeaturedBlog
              thumbNailImg="data:image/jpeg;base64,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"
              title="Test BLOG 2"
              time="8 minutes"
              summary="abcdefg"
              link="/"
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Blogs
          </h2>
          <ul className="w-full">
            <Blog
              thumbNailImg={""}
              title={"Blog 1 hello you are awesome"}
              link={"/"}
              date={"1-1-1"}
            />
            <Blog
              thumbNailImg={""}
              title={"Blog 1"}
              link={"/"}
              date={"1-1-1"}
            />
            <Blog
              thumbNailImg={""}
              title={"Blog 1"}
              link={"/"}
              date={"1-1-1"}
            />
            <Blog
              thumbNailImg={""}
              title={"Blog 1"}
              link={"/"}
              date={"1-1-1"}
            />
          </ul>
        </main>
      </div>
    </>
  );
}
