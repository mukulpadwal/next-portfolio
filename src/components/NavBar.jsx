"use client";

import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import {
  TwitterIcon,
  LinkedInIcon,
  GithubIcon,
  HashNodeIcon,
  SunIcon,
  MoonIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { usePathname, useRouter } from "next/navigation";

const CustomLink = ({ href, title, className = "" }) => {
  const pathname = usePathname();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          pathname === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const MobileCustomLink = ({ href, title, className = "", toggle }) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleButtonClick = () => {
    toggle((prev) => !prev);
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleButtonClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-light dark:bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          pathname === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher("dark");
  const [isOpened, setIsOpened] = useState(false);

  const handleHamburgerClick = () => {
    setIsOpened((prev) => !prev);
  };

  return (
    <header className="relative w-full px-32 py-8 font-medium flex items-center justify-between bg-light text-dark dark:bg-dark dark:text-light lg:px-16 md:px-12 sm:px-8">
      {/* Hamburger Menu for responsive screens */}
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleHamburgerClick}
      >
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm -translate-y-0.5 ${
            isOpened ? "rotate-45 translate-y-2.5" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${
            isOpened ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm translate-y-0.5 ${
            isOpened ? "-rotate-45 -translate-y-0.5" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      {/* Navigation Menu for larger Screens */}
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="/blogs" title="Blogs" className="ml-4" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://www.twitter.com/padwalmukul/"
            rel="noreferrer"
            target="_blank"
            className="mr-3 w-6"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <TwitterIcon className={"fill-dark dark:fill-white"} />
          </motion.a>
          <motion.a
            href="https://www.github.com/mukulpadwal/"
            rel="noreferrer"
            target="_blank"
            className="mx-3 w-6"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon className={"fill-dark dark:fill-white"} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/mukulpadwal/"
            rel="noreferrer"
            target="_blank"
            className="mx-3 w-6"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://mukulpadwal.hashnode.dev/"
            rel="noreferrer"
            target="_blank"
            className="mx-3 w-6"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <HashNodeIcon />
          </motion.a>

          <motion.button
            className="ml-3 w-6"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
          >
            {mode === "dark" ? (
              <SunIcon className="fill-dark" />
            ) : (
              <MoonIcon className="fill-dark" />
            )}
          </motion.button>
        </nav>
      </div>

      {/* Navigation Menu for Smaller Screens */}
      {isOpened && (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="z-30 min-w-[70vw] hidden lg:flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center flex-col justify-center">
            <MobileCustomLink
              href="/"
              title="Home"
              className=""
              toggle={handleHamburgerClick}
            />
            <MobileCustomLink
              href="/about"
              title="About"
              className=""
              toggle={handleHamburgerClick}
            />
            <MobileCustomLink
              href="/projects"
              title="Projects"
              className=""
              toggle={handleHamburgerClick}
            />
            <MobileCustomLink
              href="/blogs"
              title="Blogs"
              className=""
              toggle={handleHamburgerClick}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a
              href="https://www.twitter.com/padwalmukul/"
              rel="noreferrer"
              target="_blank"
              className="mr-3 w-6 sm:mr-2"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <TwitterIcon className={"fill-light dark:fill-dark"} />
            </motion.a>
            <motion.a
              href="https://www.github.com/mukulpadwal/"
              rel="noreferrer"
              target="_blank"
              className="mx-3 w-6 sm:mx-2"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon className={"fill-light dark:fill-dark"} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/mukulpadwal/"
              rel="noreferrer"
              target="_blank"
              className="mx-3 w-6 sm:mx-2"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://mukulpadwal.hashnode.dev/"
              rel="noreferrer"
              target="_blank"
              className="mx-3 w-6 sm:mx-2"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <HashNodeIcon />
            </motion.a>

            <motion.button
              className="ml-3 w-6 bg-light dark:bg-dark rounded-full p-0.5 sm:ml-2"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
            >
              {mode === "dark" ? <SunIcon /> : <MoonIcon />}
            </motion.button>
          </nav>
        </motion.div>
      )}

      <div className="absolute left-[50%] t-2 -translate-x-[50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
