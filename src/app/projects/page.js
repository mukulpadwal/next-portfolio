"use client";

import AnimatedText from "@/components/AnimatedText";
import React, { useEffect, useState } from "react";
import FeaturedProject from "@/components/FeaturedProject";
import Project from "@/components/Project";
import { promise } from "@/appwrite/appwrite";

export default function Projects() {
  const [allProjects, setAllProjectsData] = useState([]);

  useEffect(() => {
    (async () => {
      await promise.then(
        function (response) {
          setAllProjectsData(response.documents);
        },
        function (error) {
          console.log(error);
        }
      );
    })();
  }, []);

  return (
    <main className="w-full flex flex-col items-center justify-center text-dark dark:text-light">
      <div className="w-full h-full inline-block z-0 bg-light dark:bg-dark pt-16 p-32">
        <AnimatedText text="Imagination Trumps Knowledge!" className="mb-16" />

        <div className="grid grid-cols-12 gap-24 gap-y-32">
          <div className="col-span-12">
            <FeaturedProject
              type={allProjects[0]?.type}
              title={allProjects[0]?.title}
              summary={allProjects[0]?.summary}
              thumbNailImg={'/primaryDark'}
              link={'allProjects[0]?.deployedLink'}
              gitHubLink={'allProjects[0]?.githubLink'}
            />
          </div>
          <div className="col-span-6">
            <Project type="gggggg" title="ggggg" thumbNailImg="/gggggg" link="/ggggg" gitHubLink="/ggggg" />
          </div>
          <div className="col-span-6">
            <Project type="" title="" thumbNailImg="" link="" gitHubLink="" />
          </div>
        </div>
      </div>
    </main>
  );
}
