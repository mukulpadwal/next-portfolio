"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] sm:w-[90%] mx-auto flex flex-col items-start justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 sm:text-sm">
          {time} | {address}
        </span>
        <br /><br />
        <div className="font-medium w-full sm:text-sm">
          {work.map((points, index) => {
            return (<><p key={index}>{points}</p><br /></>);
          })}
        </div>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64 sm:my-24">
      <h2 className="font-bold text-8xl mb-32 w-full text-center sm:text-5xl sm:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative sm:mx-0 sm:w-full">
        <motion.div
          className="absolute left-9 top-0 bg-dark dark:bg-light w-[4px] h-full origin-top sm:left-0"
          style={{ scaleY: scrollYProgress }}
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 ">
          <Details
            position="Full Stack Developer Intern"
            company="SOLVATIVE"
            companyLink="https://solvative.com/"
            time="Jun 2023 - Jan 2024"
            address="Remote, India"
            work={[
              "During this internship I",
              "• Redesigned company website using Astro.js.",
              "• Key role in developing B2C eCommerce platform on Salesforce Commerce Cloud, boosting online sales and user experience.",
              "• Resolved bugs, integrated new features for enhanced functionality and user experience.",
              "• Ensured ADA compliance for website.",
            ]}
          />
          <Details
            position="Software Engineer Intern"
            company="Neustar, Inc."
            companyLink="https://www.home.neustar/"
            time="Jul 2022 - Dec 2022"
            address="Bengaluru, Karnataka, India"
            work={[
              "During this internship, I",
              "• Created Automation Script to alert when the API functional failures.",
              "• Performed Monitoring activities to ensure the API’s, Database and loaders are working fine and documented the steps to monitor.",
              "• Wrote Unit Test Cases for a given module of the Application.",
              "• Collaborated with the team to resolve the issues regarding day to day activities and document learnings.",
            ]}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
