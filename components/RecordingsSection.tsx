"use client";
import React, { useState } from "react";
import { FaMusic, FaFileAlt } from "react-icons/fa";
import Section from "./Section";
import { recordings, RECORDINGS_PAGE_SIZE } from "@/data/recordings";
import { site } from "@/data/site";

const RecordingsSection = () => {
  const [shown, setShown] = useState(RECORDINGS_PAGE_SIZE);
  const visible = recordings.slice(0, shown);
  const remaining = recordings.length - shown;

  return (
    <Section
      id="recordings"
      title="Recordings & Performances"
      subtitle="Classical euphonium and jazz trombone:"
    >
      <div className="mb-4">
        <a
          href={site.performanceResume}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-600"
        >
          <FaFileAlt size={15} />
          View Performance R&eacute;sum&eacute;
        </a>
      </div>

      <div className="flex flex-col gap-8">
        {visible.map((recording) => (
          <div
            key={recording.ytlink}
            className="flex flex-col gap-6 md:flex-row"
          >
            <div className="md:w-1/2">
              <div className="relative aspect-video overflow-hidden rounded-xl bg-slate-100">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={recording.ytlink}
                  title={recording.name}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="flex items-start gap-2">
                <FaMusic
                  size={15}
                  className="mt-1.5 shrink-0 text-orange-500"
                />
                <h3 className="font-bold text-slate-800">
                  {recording.name}
                  {recording.isNew && (
                    <span className="ml-2 align-middle rounded-full bg-orange-500 px-2 py-0.5 text-[10px] font-semibold uppercase text-white">
                      New
                    </span>
                  )}
                </h3>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {recording.description}
              </p>

              {recording.credit && (
                <p className="mt-3 text-sm text-slate-500">
                  {recording.credit.role}:{" "}
                  {recording.credit.url ? (
                    <a
                      href={recording.credit.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-orange-500 underline decoration-orange-300 hover:decoration-orange-500"
                    >
                      {recording.credit.name}
                    </a>
                  ) : (
                    <span className="font-medium">{recording.credit.name}</span>
                  )}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {remaining > 0 && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShown(shown + RECORDINGS_PAGE_SIZE)}
            className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-orange-400 hover:text-orange-500"
          >
            Load more ({remaining} left)
          </button>
        </div>
      )}
    </Section>
  );
};

export default RecordingsSection;
