"use client";

import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";

const Contact = () => {
  return (
    <>
      <TransitionEffect />
      <div className="w-full h-screen inline-block z-0 bg-light dark:bg-dark pt-16 p-32 xl:p-24 lg:p-16 md:p-12 md:pt-16 sm:p-8">
        <main className="w-full h-full flex flex-col items-center justify-center text-dark dark:text-light">
          <AnimatedText
            text="Coming Soon!"
            className="!text-center !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
          />
        </main>
      </div>
    </>
  );
};

export default Contact;
