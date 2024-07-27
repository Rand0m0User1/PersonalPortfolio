"use client"
import React from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center my-10 py-16">
        <div>
          <Image className="rounded-full" src="/headshot.png" alt="" width={300} height={300} unoptimized/>
        </div>
        <div>
          <h1 className="font-bold text-4xl mt-6">Hi, I&#39;m Aleks!</h1>
          <p>a student at the Center for Information Technology</p>
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
    </section>
  )
}

export default Home
