export type Education = {
  school: string;
  program?: string;
  dates: string;
  detail?: string;
  activities?: string[];
  note?: string;
};

export const education: Education[] = [
  {
    school: "Stanford University",
    program: "B.S. in Computer Science",
    dates: "2026 - 2030 (Expected)",
    detail:
      "Coursework (2026-27): CS106B Programming Abstractions (C++), MATH51 Linear Algebra & Multivariable Calculus, CS103 Mathematical Foundations of Computing, CS107 Computer Organization & Systems.",
    activities: ["Stanford Jazz Orchestra", "Stanford Wind Symphony"],
  },
  {
    school: "Deep Run High School",
    program: "Center for Information Technology (CIT)",
    dates: "2022 - 2026",
    detail:
      "GPA 4.64 / 4.0 weighted. Relevant Coursework: Dual Enrollment Discrete Mathematics, AP Computer Science A, AP Calculus BC, Enterprise Architecture, and App Development. Computer Science Honor Society council member.",
  },
  {
    school: "Polish School of the Embassy of the Republic of Poland",
    program: "Washington, D.C.",
    dates: "2014 - 2022",
    detail:
      "Graduated the primary and secondary state-accredited curriculum with distinction. Polish Ambassador's Diploma for Academic Excellence, 2018 to 2022.",
    note: "Eight years of the full Polish national curriculum alongside U.S. schooling, so I am bilingual, natively fluent in both English and Polish.",
  },
];
