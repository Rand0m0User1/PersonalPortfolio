"use client"
import React from 'react'
import Image from 'next/image'

const skills = [
    { skill: "Python", img: "/python.png"},
    { skill: "HTML" },
    { skill: "CSS" },
    { skill: "Javascript" },
    { skill: "Next.js" },
    { skill: "Tailwind CSS" },
    { skill: "Flutter" },
    { skill: "Git" },
    { skill: "Computer Aided Design (CAD)" },
    { skill: "Computer Aided Manufacturing (CAM)" },
    { skill: "Onshape (CAD)" },
    { skill: "Fusion 360 (CAM)" },
    { skill: "Fabrication" },
    { skill: "Music Performance" },
    { skill: "Solo Performance" },
    { skill: "Big Band" },
    { skill: "Jazz Improvisation" },
    { skill: "Agile Methodologies (SCRUM)" },
  ]

  const AboutSection = () => {
    return (
        <section id="about">
            <div className="my-12 pb-12 md:pt-16 md:pb-48">
                <h1 className="text-center font-bold text-4xl py-8">About Me</h1>
                <div className="flex flex-col space-y-5 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
                    <div className="text-center md:text-left md:w-1/2">
                        <p>FillerFillerFillerFillerFillerFillerFillerFillerFillerFillerFillerFiller</p>
                        <br />
                        <p>FillerFillerFillerFillerFillerFillerFillerFillerFillerFillerFillerFiller</p>
                    </div>
                    <div className="md:w-1/2 flex justify-center md:justify-start">
                        <div className="relative w-60 h-60 md:w-80 md:h-80">
                            <Image className="rounded-lg object-cover" src="/headshot.png" alt="Headshot" layout="fill" />
                        </div>
                    </div>
                </div>
                <h1 className="text-center font-bold text-2xl mb-6">My Current Skillset</h1>
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                        {skills.map((item, idx) => {
                            return (
                                <div key={idx} className="w-40 h-40 flex flex-col items-center justify-center bg-gray-200 p-4 rounded-lg shadow-lg">
                                    <div className="w-16 h-16 mb-4">
                                        <Image src={item.img} alt={item.skill} width={64} height={64} unoptimized className="object-contain" />
                                    </div>
                                    <p className="text-gray-500 font-semibold text-center">{item.skill}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
