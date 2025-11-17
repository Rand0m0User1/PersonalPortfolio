"use client";
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import { HiArrowDown } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <section id="home">
      <div className="flex flex-col-reverse text-center items-center justify-center my-12 py-16 sm:py-30 md:flex-row md:space-x-8 md:text-left md:py-60">
        <div className="md:mt-2 md:w-3/5 md:ml-20">
          <h1 className="font-bold text-6xl mt-6 md:text-10xl md:mt-0 text-gray-900 dark:text-white">
            Hi, I&#39;m Aleks!
          </h1>
          <div className="text-4xl mt-6 mb-8 md:text-4xl">
            <span className="font-medium text-gray-900 dark:text-white">a </span>
            <span
              className="font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent"
              style={{ display: "inline-block" }}
            >
              <Typewriter
                options={{
                  strings: [
                    "student at the CIT",
                    "musician",
                    "CAD designer",
                    "programmer",
                    "developer",
                    "quick learner",
                    "developer",
                    "competitor",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                }}
              />
            </span>
          </div>
          <div className="flex flex-row items-center justify-center md:justify-start space-x-5 mt-2">
            <a
              href="https://github.com/Rand0m0User1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-stone-800 hover:bg-amber-400 dark:hover:bg-amber-500 transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-md hover:shadow-xl"
            >
              <BsGithub
                size={26}
                className="transition-transform cursor-pointer"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/aleksander-kurgan/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-stone-800 hover:bg-amber-400 dark:hover:bg-amber-500 transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-md hover:shadow-xl"
            >
              <FaLinkedin
                size={26}
                className="transition-transform cursor-pointer"
              />
            </a>
          </div>
        </div>
        <div className="md:w-1/2 md:mt-2 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
            <Image
              className="relative rounded-full shadow-2xl ring-4 ring-amber-400/50 hover:ring-8 hover:ring-amber-400/40 transition-all duration-500 hover:scale-105"
              src="/headshot.png"
              alt="Aleks Headshot"
              width={300}
              height={300}
              unoptimized
            />
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center text-center justify-center mt-8">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce text-amber-400" />
        </Link>
      </div>
    </section>
  );
};

export default Home;
