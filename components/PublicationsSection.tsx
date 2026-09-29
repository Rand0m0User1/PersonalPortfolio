import React from "react";
import Section from "./Section";
import { publications, AUTHOR_NAME } from "@/data/publications";

const renderAuthors = (authors: string) =>
  authors
    .split(AUTHOR_NAME)
    .flatMap((part, idx) =>
      idx === 0
        ? [part]
        : [
            <strong key={idx} className="text-slate-800">
              {AUTHOR_NAME}
            </strong>,
            part,
          ]
    );

const PublicationsSection = () => {
  return (
    <Section id="publications" title="Publications">
      <div className="flex flex-col gap-5">
        {publications.map((pub) => (
          <div key={pub.title} className="rounded-xl bg-slate-100/70 p-6">
            <h3 className="font-bold text-slate-800">
              {pub.link ? (
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-orange-300 hover:decoration-orange-500"
                >
                  {pub.title}
                </a>
              ) : (
                pub.title
              )}
            </h3>

            <p className="mt-2 text-sm text-slate-600">
              {renderAuthors(pub.authors)}
            </p>

            <p className="mt-2 text-sm font-medium italic text-slate-600">
              {pub.venue}
              {pub.status && (
                <span className="not-italic font-normal">
                  {" "}
                  &middot; {pub.status}
                </span>
              )}
            </p>

            {pub.metrics && (
              <p className="mt-2 text-xs text-slate-500">{pub.metrics}</p>
            )}
            {pub.credit && (
              <p className="mt-1 text-xs text-slate-500">
                <span className="font-semibold">Contribution:</span>{" "}
                {pub.credit}
              </p>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default PublicationsSection;
