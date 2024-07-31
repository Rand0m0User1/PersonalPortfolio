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
      <div className="flex flex-col-reverse text-center items-center justify-center my-12 py-16 sm:py-30 md:flex-row md:space-x-5 md:text-left md:py-60">
        <div className="md:mt-2 md:w-3/5 md:ml-20">
          <h1 className="font-bold text-6xl mt-6 md:text-10xl md:mt-0">
            Hi, I&#39;m Aleks!
          </h1>
          <div className="text-4xl mt-4 mb-6 md:text-4xl">
            <span>a </span>
            <span
              className="font-bold text-amber-400"
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
          <div className="flex flex-row items-center justify-center md:justify-start space-x-4">
            <a
              href="https://github.com/Rand0m0User1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub
                size={30}
                className="hover:animate-spin transition-transform cursor-pointer"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/aleksander-kurgan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={30}
                className="hover:animate-spin transition-transform cursor-pointer"
              />
            </a>
          </div>
        </div>
        <div className="md:w-1/2 md:mt-2 flex justify-center">
          <Image
            className="rounded-full shadow-xl ring-4 ring-white"
            src="/headshot.png"
            alt="Aleks Headshot"
            width={300}
            height={300}
            unoptimized
          />
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
