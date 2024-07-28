import React from 'react'
import Image from 'next/image'

const skills = [
    { skill: "Python", img: "/python.svg"},
    { skill: "HTML", img: "/html.svg" },
    { skill: "CSS", img: "/css.svg" },
    { skill: "Javascript", img: "/js.svg" },
    { skill: "Next.js", img: "/next.svg" },
    { skill: "Tailwind CSS", img: "/tailwind.svg" },
    { skill: "Flutter", img: "/flutter.svg" },
    { skill: "Git", img: "/git.svg"  },
    { skill: "Onshape (CAD)", img: "/onshape.png"  },
    { skill: "Fusion 360 (CAM)", img: "/fusion.png"  },
    { skill: "Music Performance", img: "/music.svg"  },
    { skill: "Solo Performance", img: "/euph.webp" },
    { skill: "Big Band", img: "/bigband.png" },
    { skill: "Jazz Improvisation", img: "/trombone.svg" },
    { skill: "Agile Methodologies (SCRUM)", img: "/scrum.png" },
]

const AboutSection = () => {
    return (
        <section id="about">
            <div className="my-12 pb-12 md:pt-16 md:pb-48">
                <h1 className="text-center font-bold text-4xl py-8">About Me
                    <hr className="w-6 h-1 mx-auto my-4 bg-amber-200 border-0 rounded"></hr>
                </h1>
                <div className="flex flex-col space-y-5 items-center justify-center md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-20 md:items-start">
                    <div className="text-center md:text-left md:w-1/2">
                        <p>FillerFillerFillerFillerFillerFillerFillerFillerFillerFillerFillerFiller</p>
                        <br />
                        <p>FillerFillerFillerFillerFillerFillerFillerFillerFillerFillerFillerFiller</p>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <div className="relative w-80 h-80 md:w-100 md:h-100">
                            <Image className="rounded-lg object-cover mx-auto" src="/aboutmephoto.jpg" alt="aboutmephoto" fill />
                        </div>
                    </div>
                </div>
                <h1 className="text-center font-bold text-2xl mb-6 mt-20">My Current Skillset</h1>
                <div className="flex justify-center">
                    <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
                        {skills.map((item, idx) => {
                            return (
                                <div key={idx} className="w-40 h-40 flex flex-col items-center justify-center bg-gray-200 p-4 rounded-lg shadow-lg border-4 border-amber-500 hover:bg-gray-300">
                                    <div className="w-16 h-16 relative mb-2">
                                        <Image src={item.img} alt={item.skill} fill objectFit="contain" />
                                    </div>
                                    <p className="text-black font-semibold text-center">{item.skill}</p>
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
