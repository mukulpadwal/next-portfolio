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
    x: "7vw",
    y: "-32vh",
  },
  {
    name: "jQuery",
    x: "24vw",
    y: "-15vh",
  },
  {
    name: "Node.js",
    x: "-11vw",
    y: "30vh",
  },
  {
    name: "Express.js",
    x: "7vw",
    y: "32vh",
  },
  {
    name: "mongoose",
    x: "-28vw",
    y: "5vh",
  },
  {
    name: "Tailwind CSS",
    x: "28vw",
    y: "5vh",
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
      className="flex items-center justify-center font-semibold bg-dark text-light rounded-full py-3 px-6 shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{once: true}}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h1 className="font-bold text-8xl mt-64 w-full text-center">Skills</h1>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center font-semibold bg-dark text-light rounded-full py-3 px-6 shadow-dark cursor-pointer"
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
