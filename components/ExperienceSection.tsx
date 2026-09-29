import React from "react";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import Section from "./Section";
import { experience } from "@/data/experience";

// Splitting on "**" puts the marked-up phrases at the odd indexes, so every
// other chunk gets bolded and the rest stays plain text.
const renderBullet = (text: string) =>
  text
    .split("**")
    .map((part, idx) =>
      idx % 2 === 1 ? (
        <strong key={idx} className="font-semibold text-slate-800">
          {part}
        </strong>
      ) : (
        part
      )
    );

const ExperienceSection = () => {
  return (
    <Section id="experience" title="Experience & Research">
      <div className="flex flex-col gap-5">
        {experience.map((item) => (
          <div
            key={item.org + item.role}
            className="relative overflow-hidden rounded-xl bg-slate-100/70"
          >
            {item.image && (
              <div className="relative aspect-[2/1] w-full bg-slate-200">
                <Image
                  src={item.image}
                  alt={item.org}
                  fill
                  sizes="(max-width: 768px) 100vw, 720px"
                  className="object-cover"
                />
              </div>
            )}

            <div className="relative p-6">
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${item.org}`}
                  className="absolute right-5 top-0 -translate-y-1/2 rounded-full bg-slate-800 p-2.5 text-white shadow-sm transition-colors hover:bg-orange-500"
                >
                  <FaExternalLinkAlt size={13} />
                </a>
              )}

              <h3 className="text-lg font-bold text-slate-800">{item.org}</h3>

              <div className="mt-1 flex flex-col gap-x-4 sm:flex-row sm:items-baseline sm:justify-between">
                <p className="font-semibold text-slate-600">{item.role}</p>
                <p className="shrink-0 text-sm font-medium text-slate-500">
                  {item.dates}
                </p>
              </div>

              <ul className="mt-4 space-y-2.5">
                {item.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex gap-2.5 text-slate-600">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
                    <span className="text-sm leading-relaxed">
                      {renderBullet(bullet)}
                    </span>
                  </li>
                ))}
              </ul>

              {item.tags && item.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-300 px-3 py-1 text-xs font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;
