"use client"
import React from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll'
import { HiArrowDown } from "react-icons/hi"

const Home = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center my-12 py-16 sm:py-30 md:flex-row md:space-x-5 md:text-left md:py-60">
        <div className="md:w-1/2 md:mt-2">
          <Image className="rounded-full" src="/headshot.png" alt="" width={300} height={300} unoptimized/>
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="font-bold text-4xl mt-6 md:text-7xl md:mt-0">Hi, I&#39;m Aleks!</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">a student at the Center for Information Technology</p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-amber-600 rounded shadow hover:bg-amber-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>

      <div className="flex flex-row items-center text-center justify-center">
      <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default Home