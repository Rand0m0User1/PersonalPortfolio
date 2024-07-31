import React from "react";
import Image from "next/image";

const skills = [
  { skill: "Python", img: "/python.svg" },
  { skill: "HTML", img: "/html.svg" },
  { skill: "CSS", img: "/css.svg" },
  { skill: "Javascript", img: "/js.svg" },
  { skill: "Next.js", img: "/next.svg" },
  { skill: "Tailwind CSS", img: "/tailwind.svg" },
  { skill: "Flutter", img: "/flutter.svg" },
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
        <h1 className="text-center font-bold text-4xl py-8">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-amber-400 border-0 rounded" />
        </h1>
        <div className="flex flex-col space-y-5 items-center justify-center md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-20 md:items-start">
          <div className="text-lg sm:text-lg md:text-xl lg:text-xl whitespace-normal break-words text-center md:text-left md:w-1/2 max-w-full p-4">
            <p>
              Hi! I&#39;m Aleksander, a 16 year old junior enrolled in the{" "}
              <span className="font-bold text-amber-400">
                Center for Information Technology
              </span>{" "}
              at Deep Run High School in Glen Allen, VA I am generally curious
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
              . From a young age, I have played jazz trombone in an acclaimed{" "}
              <span className="font-bold text-amber-400">
                pre-college program
              </span>{" "}
              and classical euphonium, taking lessons from{" "}
              <span className="font-bold text-amber-400">Dr. Ross Walter</span>.
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
        <h1 className="text-center font-bold text-2xl mb-6 mt-20">
          My Current Skillset
        </h1>
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
            {skills.map((item, idx) => (
              <div
                key={idx}
                className="hover:-translate-y-1 w-60 h-60 flex flex-col items-center justify-center bg-gray-200 p-4 rounded-lg shadow-lg border-4 border-amber-500 hover:bg-gray-300"
              >
                <div className="w-32 h-32 relative mb-2">
                  <Image
                    src={item.img}
                    alt={item.skill}
                    fill
                    objectFit="contain"
                  />
                </div>
                <p className="text-black font-semibold text-center">
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
