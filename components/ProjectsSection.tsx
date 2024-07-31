"use client";
import React, { useState, Suspense } from "react";
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
    link: "https://docs.google.com/presentation/d/1ZvLDIaKy_XhhAAJHN5zTUyqJCVizXZf3AlVmyxWWkZk/edit?usp=sharing",
  },
  {
    name: "This Website",
    description: "All about me.",
    image: "/portfolio.png",
    github: "https://github.com/Rand0m0User1/PersonalPortfolio",
  },
  {
    name: "Hockey Robot",
    description:
      "The robot is designed for a casual re-run of the F4 CADathon competition. It features an intake that passively centers the pucks, an indexer, and a high-power, variable-angle shooter.",
    glbPath: "puckrobot.glb",
    link: "https://cad.onshape.com/documents/aea32739f3009eb4a0fed1a5/w/cb6f4f03cdabbd21cc2bba95/e/9fd5c7e17a5c8e016f5b7045",
  },
  {
    name: "2024 Climbing Mechanism",
    description:
      "Proposed compact climbing mechanism for 2024 FIRST Robotics Competition robot.",
    glbPath: "/chainclimb.glb",
    link: "https://cad.onshape.com/documents/22633d46d8241ca56701bcb0/w/7c9de08487f4f9c947e2a444/e/c7a4c4971d8186e864267b90?renderMode=0&uiState=66a971a6a3b64564ae9ad013",
  },
  {
    name: "Double Jointed Arm",
    description:
      "Double-jointed arm with a variable wrist, tailored for the 2023 First Robotics Competition game, Charged Up. It's versatile, though it does present a bit of a challenge for programmers. 😉",
    glbPath: "/djarm.glb",
    link: "https://cad.onshape.com/documents/8253e250247f832b06e3a35f/w/221930e2d4075dcf935fcfe5/e/7d2bf5cdca04897dcaade0e5?renderMode=0&uiState=66a9713817ca25772f74f1e4",
  },
  {
    name: "Slapdown Intake",
    description:
      "Intake designed to avoid the use of a four-bar linkage, thereby simplifying the design and deployment process. It is intended to pick up plastic balls filled halfway with water",
    glbPath: "/slapdownintake.glb",
    link: "https://cad.onshape.com/documents/495f76657db70918ebca4f43/w/f636e2ac2cf051fd77c257f8/e/5fa5b776284f7976fe523b02?renderMode=0&uiState=66a975b0b819f171bcd57e8e",
  },
  {
    name: "Four Bar Linkage Intake",
    description:
      "Intake utilizing a four-bar linkage to optimize space constraints. The compact design allows it to be stowed neatly and supports a compact deployment mechanism. It is intended to pick up 7-inch foam balls from the 2021 FIRST Robotics Competition game, Infinite Recharge.",
    glbPath: "/fourbarintake.glb",
    link: "https://cad.onshape.com/documents/c48936fccef1fb811cf717e2/w/a91025fc85fa0d82564d9e3b/e/16730cc9ec5c5772a3776724",
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
  const [loadedModels, setLoadedModels] = useState<Record<number, boolean>>({});

  const handleLoadModel = (index: number) => {
    setLoadedModels((prev) => ({ ...prev, [index]: true }));
  };

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
              <div className="w-full flex flex-col items-center mt-5">
                {!loadedModels[idx] ? (
                  <button
                    onClick={() => handleLoadModel(idx)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Load Model
                  </button>
                ) : (
                  <div className="w-full flex justify-center bg-white rounded-lg mt-5 hover:cursor-all-scroll">
                    <Canvas
                      style={{ width: "80%", height: "500px" }}
                      camera={{ position: [8, 8, -5], fov: 50 }}
                    >
                      <ambientLight />
                      <OrbitControls enableZoom={true} />
                      <Suspense fallback={<div>Loading model...</div>}>
                        <Model path={project.glbPath} />
                      </Suspense>
                      <Environment preset="sunset" />
                    </Canvas>
                  </div>
                )}
              </div>
            ) : (
              <div className="mt-5">
                <Link href={project.link || "#"} target="_blank">
                  <Image
                    src={project.image || ""}
                    alt={project.name}
                    width={1000}
                    height={1000}
                    unoptimized
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
