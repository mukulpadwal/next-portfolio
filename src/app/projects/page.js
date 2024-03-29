"use client";

import AnimatedText from "@/components/AnimatedText";
import React, { useEffect, useState } from "react";
import FeaturedProject from "@/components/FeaturedProject";
import Project from "@/components/Project";
import database from "@/appwrite/appwrite";
import TransitionEffect from "@/components/TransitionEffect";
import FeaturedProjectSkeleton from "@/components/skeletons/FeaturedProjectSkeleton";
import ProjectSkeleton from "@/components/skeletons/ProjectSkeleton";

export default function Projects() {
  const [allProjects, setAllProjectsData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    database
      .getProjects()
      .then((response) => {
        setAllProjectsData(response.documents);
        setLoading(true);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <>
      <TransitionEffect />
      <div className="w-full h-full inline-block z-0 bg-light dark:bg-dark pt-16 p-32 xl:p-24 lg:p-16 md:p-12 md:pt-16 sm:p-8">
        <main className="w-full flex flex-col items-center justify-center text-dark dark:text-light">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 !text-center !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              {loading ? (
                <FeaturedProject
                  type={allProjects[0]?.type ?? ""}
                  title={allProjects[0]?.title ?? ""}
                  summary={allProjects[0]?.summary ?? ""}
                  thumbNailImg={allProjects[0]?.thumbNailImg ?? ""}
                  link={allProjects[0]?.deployedLink ?? ""}
                  gitHubLink={allProjects[0]?.githubRepoLink ?? ""}
                />
              ) : (
                <FeaturedProjectSkeleton />
              )}
            </div>
            <div className="col-span-6 sm:col-span-12">
              {loading ? (
                <Project
                  type={allProjects[1]?.type ?? ""}
                  title={allProjects[1]?.title ?? ""}
                  thumbNailImg={allProjects[1]?.thumbNailImg ?? ""}
                  link={allProjects[1]?.deployedLink ?? ""}
                  gitHubLink={allProjects[1]?.githubRepoLink ?? ""}
                />
              ) : (
                <ProjectSkeleton />
              )}
            </div>
            <div className="col-span-6 sm:col-span-12">
              {loading ? (
                <Project
                  type={allProjects[2]?.type ?? ""}
                  title={allProjects[2]?.title ?? ""}
                  thumbNailImg={allProjects[2]?.thumbNailImg ?? ""}
                  link={allProjects[2]?.deployedLink ?? ""}
                  gitHubLink={allProjects[2]?.githubRepoLink ?? ""}
                />
              ) : (
                <ProjectSkeleton />
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
