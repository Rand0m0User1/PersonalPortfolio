"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
    {
      name: "WeatherGuru",
      description:
        "WeatherGuru is a sleek and user-friendly weather application developed using pure HTML, CSS, and JavaScript. Powered by Node.js, it provides real-time weather updates for any location, delivering the information in a visually appealing format.",
      image: "/weatherguru.png",
      github: "https://github.com/Rand0m0User1/WeatherGuru",
      link: "https://weather-guru-lime.vercel.app/",
    },
    {
      name: "HCPS Transportation",
      description: "Contributor to the development of the set of applications that connected with the Edulog transportation logistics platform, enabling HCPS students to scan their smartphones to verify boarding and disembarkation from the school bus.",
      image: "/bustransportation.jpeg",
      github: "",
      link: "https://docs.google.com/presentation/d/1JiWFtx2hWTuxL83uG-Ihb7gq1PctHwVsQyWkKM5nl40/edit?usp=sharing",
    },
    {
      name: "This Website",
      description:
        "All about me :)",
      image: "/portfolio.png",
      github: "https://github.com/Rand0m0User1/PersonalPortfolio",
      link: "",
    },
  ]

const ProjectsSection = () => {
  return (
    <section id="projects">
        <h1 className="text-center font-bold text-4xl py-8">Projects
            <hr className="w-6 h-1 mx-auto my-4 bg-amber-200 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col space-y-28">
            {projects.map((project, idx) => {
                return <div key={idx}>
                    <div className="flex flex-col md:flex-row md:space-x-12">
                        <div className="mt-5 md:w-1/2">
                            <Link href={project.link} target="_blank">
                                <Image src={project.image} alt="" width={1000} height={1000} className="rounded-xl shadow-xl hover:opacity-70"/>
                            </Link>
                        </div>
                        <div className="mt-5 md:w-1/2">
                            <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                            <p className="text-xl leading-7 mb-4">{project.description}</p>
                            <div className="flex flex-row align-bottom space-x-4">
                                {project.github && (
                                    <Link href={project.github} target="_blank">
                                    <BsGithub
                                        size={30}
                                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                                    />
                                    </Link>
                                )}
                                {project.link && (
                                    <Link href={project.link} target="_blank">
                                        <BsArrowUpRightSquare
                                            size={30}
                                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                                        />
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </div>
    </section>
  )
}

export default ProjectsSection
