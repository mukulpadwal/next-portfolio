import React from "react";
import profileImage from "public/profile/developer-pic-1-removed-bg-removebg.png";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/svgs/light_bulb.svg";

export default function Home() {
  return (
      <div className="w-full h-full inline-block z-0 bg-light pt-0 pb-1 px-32 dark:bg-dark">
        <main className="flex items-center text-dark w-full dark:text-light">
          <div className="flex items-center justify-between w-full">
            <div className="z-10 w-1/2 h-1/2">
              <Image
                src={profileImage}
                alt="profileImage"
                className="w-full h-auto mix-blend-multiply"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="Coding Visions: Turning Dreams into Digital Reality"
                className="!text-6xl !text-left"
              />
              <p className="py-4 text-base font-medium">
                A passionate Full Stack Web Developer with strong technical
                skills, an eye for design and a commitment to delivering
                innovative, user‑friendly software solutions.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href={process.env.NEXT_APP_RESUME_LINK}
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
                >
                  Resume <LinkArrow className="w-6 ml-1" />
                </Link>
                <Link
                  href={"/contact"}
                  className="ml-6 text-lg font-medium capitalize text-dark underline dark:text-light"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          <HireMe />

          <div className="absolute right-8 bottom-8 w-24">
            <Image src={lightBulb} alt="lightBulb" className="w-full h-auto" />
          </div>
        </main>
      </div>
  );
}
