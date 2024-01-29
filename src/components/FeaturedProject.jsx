"use client";

import React from "react";
import { GithubIcon } from "@/components/Icons";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const FeaturedProject = ({
  type,
  title,
  summary,
  thumbNailImg,
  link,
  gitHubLink,
}) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark dark:border-light bg-light dark:bg-dark shadow-2xl p-12 relative lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          loader={() => thumbNailImg}
          src={thumbNailImg}
          alt={title}
          className="w-full h-auto rounded-3xl"
          width={100}
          height={100}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority={true}
          unoptimized
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold text-dark dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={gitHubLink} target="_blank" className="w-10">
            <GithubIcon className="fill-dark dark:fill-light" />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark dark:bg-light text-light dark:text-dark p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FeaturedProject;
