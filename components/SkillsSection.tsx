import React from "react";
import Section from "./Section";
import { skillGroups } from "@/data/skills";

const SkillsSection = () => {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-slate-800">
              <group.icon size={14} className="text-orange-500" />
              {group.label}
            </h3>
            <ul className="mt-2 space-y-1">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-slate-600"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-orange-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default SkillsSection;
