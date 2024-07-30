"use client";
import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";

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
    description:
      "Contributor to the development of the set of applications that connected with the Edulog transportation logistics platform, enabling HCPS students to scan their smartphones to verify boarding and disembarkation from the school bus.",
    image: "/bustransportation.jpeg",
    link: "https://docs.google.com/presentation/d/1JiWFtx2hWTuxL83uG-Ihb7gq1PctHwVsQyWkKM5nl40/edit?usp=sharing",
  },
  {
    name: "This Website",
    description: "All about me :)",
    image: "/portfolio.png",
    github: "https://github.com/Rand0m0User1/PersonalPortfolio",
  },
  {
    name: "2024 Climbing Mechanism",
    description:
      "Proposed compact climbing mechanism for 2024 FIRST Robotics Competition robot.",
    glbPath: "/chainclimb.glb",
    link: "https://cad.onshape.com/documents/22633d46d8241ca56701bcb0/w/7c9de08487f4f9c947e2a444/e/c7a4c4971d8186e864267b90?renderMode=0&uiState=66a971a6a3b64564ae9ad013",
  },
  {
    name: "Double Joined Arm",
    description:
      "Double-jointed arm with a variable wrist, tailored for the 2023 First Robotics Competition game, Charged Up. It’s versatile, though it does present a bit of a challenge for programmers. 😉",
    glbPath: "/djarm.glb",
    link: "https://cad.onshape.com/documents/8253e250247f832b06e3a35f/w/221930e2d4075dcf935fcfe5/e/7d2bf5cdca04897dcaade0e5?renderMode=0&uiState=66a9713817ca25772f74f1e4",
  },
];

interface ModelProps {
  path: string;
}

const Model: React.FC<ModelProps> = ({ path }) => {
  const { scene } = useGLTF(path) as any;
  return <primitive object={scene} scale={[8, 8, 8]} />;
};

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects">
      <h1 className="text-center font-bold text-4xl py-8">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-amber-400 border-0 rounded"></hr>
      </h1>
      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => (
          <div key={idx} className="flex flex-col items-start">
            {project.glbPath ? (
              <div className="w-full flex justify-center bg-white rounded-lg mt-5">
                <Canvas
                  style={{ width: "80%", height: "500px" }}
                  camera={{ position: [8, 8, -5], fov: 50 }}
                >
                  <ambientLight />
                  <OrbitControls enableZoom={false} />
                  <Suspense fallback={null}>
                    <Model path={project.glbPath} />
                  </Suspense>
                  <Environment preset="sunset" />
                </Canvas>
              </div>
            ) : (
              <div className="mt-5">
                <Link href={project.link || "#"} target="_blank">
                  <Image
                    src={project.image || ""}
                    alt={project.name}
                    width={1000}
                    height={1000}
                    className="border-4 border-amber-400 rounded-xl shadow-xl hover:opacity-70"
                  />
                </Link>
              </div>
            )}
            <div className="mt-5">
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
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
