import React from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaLaptopCode } from "react-icons/fa";
import Section from "./Section";
import CadModelsLink from "./CadModelsLink";
import { projects } from "@/data/projects";

const ProjectsSection = () => {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Some things I've built over the past few years:"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.name}
            className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white"
          >
            <div className="relative aspect-[16/10] bg-slate-100">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-slate-300">
                  <FaLaptopCode size={44} />
                </div>
              )}
            </div>

            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-bold text-slate-800">{project.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                {project.description}
              </p>

              {project.tags && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-300 px-2.5 py-0.5 text-xs font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {(project.github || project.link) && (
                <div className="mt-4 flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.name} on GitHub`}
                      className="text-slate-500 transition-colors hover:text-orange-500"
                    >
                      <FaGithub size={18} />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.name}`}
                      className="text-slate-500 transition-colors hover:text-orange-500"
                    >
                      <FaExternalLinkAlt size={16} />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-xl bg-orange-50 p-6">
        <p className="text-slate-700">
          I also have experience with{" "}
          <span className="font-semibold text-orange-500">
            Computer Aided Design (CAD)
          </span>{" "}
          for robotics! Click below to view interactive 3D models.
        </p>
        <div className="mt-4">
          <CadModelsLink />
        </div>
      </div>
    </Section>
  );
};

export default ProjectsSection;
