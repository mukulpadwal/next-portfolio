"use client";

import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import {TwitterIcon, LinkedInIcon, GithubIcon, HashNodeIcon} from "./Icons";
import {motion} from 'framer-motion';

const CustomLink = ({ href, title, className = "" }) => {
  const pathname  = usePathname();
  console.log(pathname);
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

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between bg-light text-dark dark:bg-dark dark:text-light">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/blogs" title="Blogs" className="ml-4" />
      </nav>
      <div className="absolute left-[50%] t-2 -translate-x-[50%]">
        <Logo />
      </div>
      <nav className="flex items-center justify-center flex-wrap">
        <motion.a href="https://www.twitter.com/padwalmukul/" rel="noreferrer" target="_blank" className="mr-3 w-6" whileHover={{y: -2}} whileTap={{scale:0.9}}>
          <TwitterIcon className={'fill-dark dark:fill-white'} />
        </motion.a>
        <motion.a href="https://www.github.com/mukulpadwal/" rel="noreferrer" target="_blank" className="mx-3 w-6" whileHover={{y: -2}} whileTap={{scale:0.9}}>
          <GithubIcon />
        </motion.a>
        <motion.a href="https://www.linkedin.com/in/mukulpadwal/" rel="noreferrer" target="_blank" className="mx-3 w-6" whileHover={{y: -2}} whileTap={{scale:0.9}}>
          <LinkedInIcon />
        </motion.a>
        <motion.a href="https://mukulpadwal.hashnode.dev/" rel="noreferrer" target="_blank" className="ml-3 w-6" whileHover={{y: -2}} whileTap={{scale:0.9}}>
          <HashNodeIcon />
        </motion.a>
      </nav>
    </header>
  );
};

export default NavBar;
