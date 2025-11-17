import React from "react";
import Image from "next/image";

const skills = [
  { skill: "Python", img: "/python.svg" },
  { skill: "Java", img: "/java.svg" },
  { skill: "HTML", img: "/html.svg" },
  { skill: "CSS", img: "/css.svg" },
  { skill: "Javascript", img: "/js.svg" },
  { skill: "Next.js", img: "/next.svg" },
  { skill: "Tailwind CSS", img: "/tailwind.svg" },
  { skill: "Flutter", img: "/flutter.svg" },
  { skill: "Typescript", img: "/typescript.svg" },
  { skill: "React", img: "/react.svg" },
  { skill: "NPM", img: "/npm.svg" },
  { skill: "Wordpress", img: "/wordpress.svg" },
  { skill: "Git", img: "/git.svg" },
  { skill: "Onshape (CAD)", img: "/onshape.png" },
  { skill: "Fusion 360 (CAM)", img: "/fusion.png" },
  { skill: "Music Performance", img: "/music.svg" },
  { skill: "Solo Performance", img: "/euph.webp" },
  { skill: "Big Band", img: "/bigband.png" },
  { skill: "Jazz Improvisation", img: "/trombone.svg" },
  { skill: "Agile Methodologies (SCRUM)", img: "/scrum.png" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-5xl py-8">
          About Me
          <hr className="w-24 h-1.5 mx-auto my-6 bg-gradient-to-r from-amber-400 to-amber-600 border-0 rounded-full" />
        </h1>
        <div className="flex flex-col space-y-8 items-center justify-center md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-24 md:items-start">
          <div className="border-l-4 border-amber-400 text-lg sm:text-lg md:text-xl lg:text-xl whitespace-normal break-words text-center md:text-left md:w-1/2 max-w-full p-6 bg-gradient-to-br from-transparent to-amber-400/5 rounded-r-xl">
            <p>
              Hi! I&#39;m Aleksander, a 16 year old junior enrolled in the{" "}
              <span className="font-bold text-amber-400">
                Center for Information Technology
              </span>{" "}
              at Deep Run High School in Glen Allen, VA. I am generally curious
              and have many interests, but I am the most passionate about{" "}
              <span className="font-bold text-amber-400">technology</span>,{" "}
              <span className="font-bold text-amber-400">music</span>, and{" "}
              <span className="font-bold text-amber-400">engineering</span>.
            </p>
            <br />
            <p>
              In programming, I engage in{" "}
              <span className="font-bold text-amber-400">web development</span>,{" "}
              <span className="font-bold text-amber-400">UI development</span>,
              and <span className="font-bold text-amber-400">data science</span>
              , among other projects. My passion for technology is furthered
              with my fascination for engineering as I use{" "}
              <span className="font-bold text-amber-400">Onshape</span>, a{" "}
              <span className="font-bold text-amber-400">
                cloud-based CAD software
              </span>
              , to develop complex mechanisms that ultimately culminate in full
              robots. Additionally, I have experience in{" "}
              <span className="font-bold text-amber-400">Fusion 360 CAM</span>,
              taking designs from the 3D drawing board to{" "}
              <span className="font-bold text-amber-400">
                CNC manufacturing
              </span>
              .
            </p>
            <br />
            <p>
              Outside of technology and engineering, I am also an{" "}
              <span className="font-bold text-amber-400">
                all-state solo performing musician
              </span>
              . I have played jazz trombone in an acclaimed{" "}
              <span className="font-bold text-amber-400">
                pre-college program
              </span>{" "}
              and classical euphonium, taking lessons from{" "}
              <span className="font-bold text-amber-400">
                Professor Ross Walter
              </span>
              .
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full md:w-auto md:max-w-full mx-4 md:mx-0">
              <Image
                className="rounded-lg object-cover"
                src="/aboutmephoto.jpg"
                alt="aboutmephoto"
                layout="responsive"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
        <h1 className="text-center font-bold text-3xl mb-12 mt-24">
          My Current Skillset
        </h1>
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {skills.map((item, idx) => (
              <div
                key={idx}
                className="group relative w-56 h-56 flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-stone-800 dark:to-stone-900 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-gray-200 dark:border-stone-700 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/0 to-amber-500/0 group-hover:from-amber-400/10 group-hover:to-amber-500/20 transition-all duration-300"></div>
                <div className="w-28 h-28 relative mb-3 z-10 transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={item.img}
                    alt={item.skill}
                    fill
                    objectFit="contain"
                  />
                </div>
                <p className="text-black dark:text-white font-bold text-center text-sm z-10">
                  {item.skill}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
