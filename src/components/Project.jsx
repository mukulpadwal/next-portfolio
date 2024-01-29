import React from "react";
import { GithubIcon } from "@/components/Icons";
import Image from "next/image";
import Link from "next/link";

const Project = ({ type, title, thumbNailImg, link, gitHubLink }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark dark:border-light bg-light dark:bg-dark p-6 relative xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          loader={() => thumbNailImg}
          src={thumbNailImg}
          alt={title}
          className="w-full h-auto rounded-3xl"
          width={100}
          height={100}
          priority={true}
          unoptimized
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold text-dark dark:text-light lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={gitHubLink} target="_blank" className="w-8 md:w-6">
            <GithubIcon className={"fill-dark dark:fill-light"} />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Project;
