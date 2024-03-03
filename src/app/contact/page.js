"use client";

import AnimatedText from "@/components/AnimatedText";
import ContactMeForm from "@/components/ContactMeForm";
import TransitionEffect from "@/components/TransitionEffect";

const Contact = () => {
  return (
    <>
      <TransitionEffect />
      <div className="w-full h-full inline-block z-0 bg-light dark:bg-dark pt-16 p-32 xl:p-24 lg:p-16 md:p-12 md:pt-16 sm:p-8">
        <main className="w-full flex flex-col items-center justify-center text-dark dark:text-light">
          <AnimatedText
            text="Contact Me!"
            className="mb-8 sm:mb-2 !text-center !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
          />
          <p className="mb-8 !text-center !text-xl xl:!text-xl lg:!text-center lg:!text-base md:!text-base sm:!text-xs">
            Thank you for taking the time to learn more about me and my work. If
            you&apos;re interested in collaborating, have a project you&apos;d
            like to discuss, or just want to say hello, please don&apos;t
            hesitate to get in touch! You can reach me by dropping your message
            below. I&apos;m always excited to hear from like-minded individuals
            and potential clients, and I look forward to exploring the ways in
            which we can work together to create something amazing.
          </p>
          <div className="w-3/4 lg:w-full h-full">
            <ContactMeForm />
          </div>
        </main>
      </div>
    </>
  );
};

export default Contact;
