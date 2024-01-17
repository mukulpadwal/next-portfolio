"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, grade }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">{type}</h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{grade}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Education</h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          className="absolute left-9 top-0 bg-dark w-[4px] h-full origin-top"
          style={{ scaleY: scrollYProgress }}
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Bachelor Of Engineering In Computer Science"
            time="Aug 2019 - Jul 2023"
            place="CHITKARA UNIVERSITY"
            grade="Grade: 9.94 CGPA"
          />
          <Details
            type="Class XII | Non-Medical (PCM)"
            time="March 2018 - May 2019"
            place="DALHOUSIE PUBLIC SCHOOL, DALHOUSIE"
            grade="Percentage: 90.8%"
          />
          <Details
            type="Class X"
            time="Aug 2019 - Jul 2023"
            place="DALHOUSIE PUBLIC SCHOOL, DALHOUSIE"
            grade="Grade: 9.1 CGPA"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
