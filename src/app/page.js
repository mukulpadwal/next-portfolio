import React from "react";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import profileImage from "public/profile/developer-pic-1-removed-bg-removebg.png";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/svgs/light_bulb.svg";
import TransitionEffect from "@/components/TransitionEffect";
import conf from "@/conf/conf";

export default function Home() {
  console.log(conf);
  return (
    <>
      <TransitionEffect />
      <div className="w-full h-full inline-block z-0 pt-0 pb-1 px-32 bg-light dark:bg-dark xl:p-24 lg:p-16 md:p-12 md:pt-16 sm:p-8">
        <main className="flex items-center w-full text-dark dark:text-light">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="z-10 w-1/2 h-1/2 md:w-full">
              <Image
                src={profileImage}
                alt="profileImage"
                priority
                className="w-full h-auto mix-blend-multiply lg:hidden md:inline-block md:w-full"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Coding Visions: Turning Dreams into Digital Reality"
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="py-4 text-base font-medium md:text-sm xs:text-xs">
                A passionate Full Stack Web Developer with strong technical
                skills, an eye for design and a commitment to delivering
                innovative, user‑friendly software solutions.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href={conf.resumeLink}
                  target="_blank"
                  className="flex items-center bg-dark hover:bg-light text-light hover:text-dark p-2.5 px-6 rounded-lg font-semibold border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                >
                  Resume <LinkArrow className="w-6 ml-1" />
                </Link>
                <Link
                  href={"/contact"}
                  className="ml-6 text-lg font-medium capitalize underline text-dark dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          <HireMe />

          <div className="absolute right-6 bottom-8 w-24 md:hidden xl:w-20">
            <Image
              src={lightBulb}
              alt="lightBulb"
              priority
              className="w-full h-auto"
            />
          </div>
        </main>
      </div>
    </>
  );
}
