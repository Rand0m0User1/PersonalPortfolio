import React from "react";

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

const Section = ({ id, title, subtitle, children }: SectionProps) => {
  return (
    <section id={id} className="scroll-mt-8">
      <div className="my-12 border-t border-dashed border-slate-300" />
      <h2 className="text-2xl font-bold text-orange-500">{title}</h2>
      {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
      <div className="mt-6">{children}</div>
    </section>
  );
};

export default Section;
