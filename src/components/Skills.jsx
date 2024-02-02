"use client";

import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  {
    name: "HTML",
    x: "-13vw",
    y: "10vh",
  },
  {
    name: "CSS",
    x: "13vw",
    y: "10vh",
  },
  {
    name: "JavaScript",
    x: "0vw",
    y: "-18vh",
  },
  {
    name: "React",
    x: "-24vw",
    y: "-15vh",
  },
  {
    name: "Next.js",
    x: "-11vw",
    y: "-30vh",
  },
  {
    name: "Astro.js",
    x: "15vw",
    y: "-30vh",
  },
  {
    name: "jQuery",
    x: "24vw",
    y: "-15vh",
  },
  {
    name: "Node.js",
    x: "-25vw",
    y: "25vh",
  },
  {
    name: "Express.js",
    x: "25vw",
    y: "25vh",
  },
  {
    name: "mongoose",
    x: "-28vw",
    y: "0vh",
  },
  {
    name: "Tailwind CSS",
    x: "28vw",
    y: "0vh",
  },
  // {
  //   name: "TOBEADDED",
  //   x: "-24vw",
  //   y: "20vh"
  // },
  // {
  //   name: "TOBEADDED",
  //   x: "22vw",
  //   y: "22vh"
  // },
];

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="cursor-pointer w-max origin-center absolute  font-semibold bg-dark text-light py-3 px-6 md:py-1.5 md:px-3 rounded-full dark:bg-light dark:text-dark md:text-xs"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h1 className="font-bold text-8xl my-28 lg:my-32 w-full text-center md:text-6xl md:my-24">
        Skills
      </h1>
      <div className="w-full h-[100vh] relative bg-circularLight dark:bg-circularDark flex items-center justify-center mb-64 md:mb-32 rounded-full lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd  sm:bg-circularLightSm sm:dark:bg-circularDarkSm lg:h-[80vh] sm:h-[60vh] xs:h-[70vh]">
        <motion.div
          className="cursor-pointer flex rounded-full font-semibold bg-dark text-light py-3 px-6 md:py-1.5 md:px-3 shadow-dark dark:bg-light dark:text-dark xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        {skillsData.map((skill, idx) => {
          return (
            <Skill
              key={skill.name + "-" + idx}
              name={skill.name}
              x={skill.x}
              y={skill.y}
            />
          );
        })}
      </div>
    </>
  );
};

export default Skills;
