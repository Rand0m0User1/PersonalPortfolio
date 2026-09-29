import React from "react";
import Section from "./Section";
import { education } from "@/data/education";

const EducationSection = () => {
  return (
    <Section id="education" title="Education">
      <div className="ml-1.5 border-l border-slate-200">
        {education.map((item) => (
          <div key={item.school} className="relative pb-8 pl-7 last:pb-0">
            <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-orange-500" />

            <div className="flex flex-col gap-x-4 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-bold text-slate-800">{item.school}</h3>
              <p className="shrink-0 text-sm font-medium text-slate-500">
                {item.dates}
              </p>
            </div>

            {item.program && (
              <p className="mt-0.5 text-sm font-medium text-slate-600">
                {item.program}
              </p>
            )}
            {item.detail && (
              <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
            )}
            {item.activities && (
              <div className="mt-3 flex flex-wrap gap-2">
                {item.activities.map((activity) => (
                  <span
                    key={activity}
                    className="rounded-full border border-slate-300 px-3 py-1 text-xs font-medium text-slate-600"
                  >
                    {activity}
                  </span>
                ))}
              </div>
            )}
            {item.note && (
              <p className="mt-3 rounded-lg border-l-2 border-orange-400 bg-orange-50 px-4 py-3 text-sm text-slate-700">
                {item.note}
              </p>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default EducationSection;
