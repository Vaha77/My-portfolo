import React from "react";
import ScrollIntoView from "react-scroll-into-view";
import { FaChevronDown } from "react-icons/fa";
function About() {
  return (
    <div>
      <div className="max-w-4xl mt-20 mx-auto">
        <p className="text-2xl text-black  md:text-4xl font-bold text-center">
          Hey 👋
        </p>
        <p className="text-base text-left md:text-center text-gray-500 leading-relaxed mt-4 justify-center">
          I am a programmer with hands-on experience in advanced web
          development. Equipped with advanced and latest software skills in tech
          world. Passionate to learn new tech skills and improve. Extroverted
          and eager to learn from colleges and build a friendly environment.
          Adept in various social media platforms and office technology
          programs.
        </p>
      </div>
      <ScrollIntoView selector="#tech">
        <div className="mx-auto p-20">
          <FaChevronDown className="animate-bounce mx-auto text-3xl text-blue-500" />
        </div>
      </ScrollIntoView>
    </div>
  );
}

export default About;
