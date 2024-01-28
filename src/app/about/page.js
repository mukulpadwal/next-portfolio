import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import React from "react";
import profileImage from "../../../public/profile/developer-pic-2.png";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TransitionEffect from "@/components/TransitionEffect";

export default function About() {
  return (
    <>
      <TransitionEffect />
      <div className="w-full h-full inline-block z-0 bg-light dark:bg-dark py-16 p-32 xl:p-24 lg:p-16 md:p-12 sm:p-8">
        <main className="w-full flex flex-col items-center justify-center text-dark dark:text-light">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="!text-8xl !text-center lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl mb-12 lg:mb-4"
          />
          <div className="py-8 grid grid-cols-12 gap-16 lg:grid-cols-1 xl:grid-cols-12">
            <div className="col-span-4 flex flex-col items-start justify-start lg:order-2 lg:items-center lg:justify-center">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <Tabs defaultValue="passion" className="w-[400px] lg:w-full">
                <TabsList className="grid w-full grid-cols-3 bg-dark text-light dark:bg-light dark:text-dark">
                  <TabsTrigger value="passion">Passion</TabsTrigger>
                  <TabsTrigger value="craft">Craft</TabsTrigger>
                  <TabsTrigger value="innovation">Innovation</TabsTrigger>
                </TabsList>
                <TabsContent value="passion">
                  <Card className="dark:bg-dark dark:text-light dark:border-light">
                    <CardHeader>
                      <CardTitle className="text-xl">
                        Passion in Pixels
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <ul className="list-disc">
                        <li>
                          I&apos;m Mukul Padwal, a dedicated full stack
                          developer with a year of hands-on experience.
                        </li>
                        <br />
                        <li>
                          My dedication lies in translating concepts into
                          digital realities, using code as a canvas for both
                          functionality and visually captivating masterpieces.
                        </li>
                        <br />
                        <li>
                          Throughout my journey in web development, innovation
                          has been the driving force, shaping a path marked by
                          continuous creativity.
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="craft">
                  <Card className="dark:bg-dark dark:text-light dark:border-light">
                    <CardHeader>
                      <CardTitle className="text-xl">Craft of Coding</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <ul className="list-disc">
                        <li>
                          From captivating front-end designs to robust back-end
                          solutions, I create holistic web experiences.
                        </li>
                        <br />
                        <li>
                          My toolbox includes the latest frameworks, languages,
                          and design principles, ensuring solutions meet current
                          standards and future challenges.
                        </li>
                        <br />
                        <li>
                          I believe in the art of coding as a dynamic and
                          evolving process.
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="innovation">
                  <Card className="dark:bg-dark dark:text-light dark:border-light">
                    <CardHeader>
                      <CardTitle className="text-xl">
                        Innovation as a Driving Force
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <ul className="list-disc">
                        <li>
                          Staying on the cutting edge is key; I embrace emerging
                          technologies and the latest industry trends.
                        </li>
                        <br />
                        <li>
                          My solutions are not just current but future-ready,
                          reflecting a commitment to innovation.
                        </li>
                        <br />
                        <li>
                          Innovation is the heartbeat of my development process.
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            <div className="col-span-4 relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:bg-dark dark:border-light p-8 sm:p-2 lg:order-1 lg:flex lg:items-center lg:justify-center">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profileImage}
                alt="profile"
                width={"100%"}
                height={"100%"}
                className="rounded-2xl"
                priority={true}
              />
            </div>

            <div className="col-span-4 flex flex-col items-start justify-start lg:order-3 lg:items-center lg:justify-center">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Beyond the Code:
              </h2>
              <Tabs
                defaultValue="communication"
                className="w-[400px] lg:w-full"
              >
                <TabsList className="grid w-full grid-cols-3 bg-dark text-light dark:bg-light dark:text-dark">
                  <TabsTrigger value="communication">Communication</TabsTrigger>
                  <TabsTrigger value="balance">Balance</TabsTrigger>
                  <TabsTrigger value="build">Build</TabsTrigger>
                </TabsList>
                <TabsContent value="communication">
                  <Card className="dark:bg-dark dark:text-light dark:border-light">
                    <CardHeader>
                      <CardTitle className="text-xl">
                        Clear Communication
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <ul className="list-disc">
                        <li>
                          Code enthusiast with a knack for effective
                          communication.
                        </li>
                        <br />
                        <li>
                          Reliable partner on your digital journey to success.
                        </li>
                        <br />
                        <li>
                          Communication as the bridge linking code to your
                          goals.
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="balance">
                  <Card className="dark:bg-dark dark:text-light dark:border-light">
                    <CardHeader>
                      <CardTitle className="text-xl">
                        Creative Balance
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <ul className="list-disc">
                        <li>More than a developer—a creative thinker.</li>
                        <br />
                        <li>
                          Beyond code, I add creativity for exceptional digital
                          experiences.
                        </li>
                        <br />
                        <li>
                          Blending technology with creativity in every project.
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="build">
                  <Card className="dark:bg-dark dark:text-light dark:border-light">
                    <CardHeader>
                      <CardTitle className="text-xl">Build Together</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <ul className="list-disc">
                        <li>
                          Ambitious startup or revamping online presence?
                          Let&apos;s collaborate.
                        </li>
                        <br />
                        <li>
                          Portfolio filled with innovation, collaboration, and
                          extraordinary projects.
                        </li>
                        <br />
                        <li>
                          Enter a space where technology meets creativity,
                          shaping vibrant digital realities.
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </main>
      </div>
    </>
  );
}
