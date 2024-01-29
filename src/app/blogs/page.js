"use client";

import AnimatedText from "@/components/AnimatedText";
import FeaturedBlog from "@/components/FeaturedBlog";
import Blog from "@/components/Blog";
import TransitionEffect from "@/components/TransitionEffect";
import { useEffect, useState } from "react";
import { GET_USER_ARTICLES, gql } from "@/hashode/hashnode";

export default function Blogs() {
  const [fetchedBlogs, setFetchedBlogs] = useState([]);

  useEffect(() => {
    gql(GET_USER_ARTICLES)
      .then((response) =>
        setFetchedBlogs(response.data.publication.posts.edges)
      )
      .catch((error) => console.log(error.message));
  }, []);

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
            {fetchedBlogs.slice(0,2).map((blog) => (
              <div key={blog.id}>
                <FeaturedBlog
                  thumbNailImg={blog.node.coverImage.url}
                  title={blog.node.title}
                  time={blog.node.readTimeInMinutes}
                  summary={blog.node.brief}
                  link={`https://mukulpadwal.hashnode.dev/${blog.node.slug}`}
                />
              </div>
            ))}
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Blogs
          </h2>
          <ul className="w-full">
          {
            fetchedBlogs.slice(2,).map((blog) => (
              <div key={blog.id}>
                <Blog
                  thumbNailImg={blog.node.coverImage.url}
                  title={blog.node.title}
                  link={`https://mukulpadwal.hashnode.dev/${blog.node.slug}`}
                  date={blog.node.publishedAt}
                />
              </div>
            ))
          }
          </ul>
        </main>
      </div>
    </>
  );
}
