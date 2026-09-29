import React from "react";
import Image from "next/image";
import { FaFileAlt } from "react-icons/fa";
import { site } from "@/data/site";

const HomeSection = () => {
  return (
    <section id="home" className="scroll-mt-8 pt-20 pb-8">
      <Image
        className="rounded-full shadow-sm ring-1 ring-slate-200"
        src={site.avatar}
        alt={`${site.name} headshot`}
        width={96}
        height={96}
        priority
      />

      <p className="mt-6 text-2xl text-slate-700">
        Hey, I&#39;m{" "}
        <span className="font-bold text-orange-500">{site.shortName}</span>
      </p>

      <h1 className="mt-3 text-3xl sm:text-4xl font-bold leading-tight text-slate-800">
        I&#39;m an 18 y/o developer &amp; researcher studying Computer Science
        at Stanford University.
      </h1>

      <p className="mt-6 text-lg text-slate-600">
        I am generally curious and have many interests, but I am the most
        passionate about{" "}
        <span className="font-semibold text-orange-500">technology</span>,{" "}
        <span className="font-semibold text-orange-500">music</span>, and{" "}
        <span className="font-semibold text-orange-500">engineering</span>.
      </p>

      <a
        href={site.resume}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-600"
      >
        <FaFileAlt size={15} />
        View R&eacute;sum&eacute;
      </a>
    </section>
  );
};

export default HomeSection;
