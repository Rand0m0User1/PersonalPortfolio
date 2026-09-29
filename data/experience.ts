// Add a role by appending an object to this array. Nothing else to change.
//
// bullets -- REQUIRED. One string per bullet point, same style as my resume.
//            Wrap any phrase in **double asterisks** to bold it, e.g.
//              "Shipped **48 internal tools** last year."
//            Use this to highlight numbers and outcomes, not whole bullets.
//
// image   -- OPTIONAL banner across the top of the card.
//            1. Put the file in `public/`, e.g. public/adhd-vr.webp
//            2. Reference it with a leading slash and no "public":
//                 image: "/adhd-vr.webp"
//            Banners crop to 2:1, so a landscape image works best.
//            Leave it out and the card renders as text only.
//
// tags    -- OPTIONAL. Only technology you actually used. Leave it out, or
//            use [], to show none. Roles belong in `role`, not here.
//
// link    -- OPTIONAL. Renders a small external-link button on the card.

export type Experience = {
  org: string;
  role: string;
  dates: string;
  bullets: string[];
  image?: string;
  tags?: string[];
  link?: string;
};

export const experience: Experience[] = [
  {
    org: "Louisiana State University, Rutgers University & University of Zurich",
    role: "Academic Researcher & Software Lead in Human-Computer Interaction",
    dates: "Sept. 2024 - Present",
    image: "/adhd-vr.webp",
    bullets: [
      "**NIMH-funded research** with a team of international scholars on a VR-based ADHD intervention study across multiple large participant cohorts. Added and completed novel research objectives, resulting in **2 co-authored peer-reviewed publications**. The study is expanding, and commercialization is advancing via the federal SBIR program.",
      "Built a data pipeline to parse, analyze, and report **180 hours of raw interaction telemetry** for the published study’s core metrics, including its strongest predictor of attention; anonymized the dataset for public release.",
      "**Actively refactoring, security auditing, and expanding a six-app codebase**: Azure-hosted cloud services (a domain-driven FastAPI/PostgreSQL backend, student and manager React web portals, and an OCR microservice) alongside standalone applications (a local telemetry server and a real-time stoplight feedback app).",
    ],
    tags: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "React",
      "Azure",
      "pandas",
      "Domain-Driven Design",
    ],
    link: "https://www.lsu.edu/blog/2024/10/01vr_adhdresearch_rh.php",
  },
  {
    org: "Henrico County Public Schools",
    role: "Software Developer & Systems Administrator (Part Time)",
    dates: "May 2026 - Sept. 2026",
    bullets: [
      "Sole developer and administrator of the production Flask/PostgreSQL application running CIT’s internship program for **48 students, 31 mentors, and 24 partner organizations**.",
      "Detected, contained, and resolved a security compromise of the production server in a single overnight response; built the first backup infrastructure and a self-service account provisioning service with cross-system LDAP integration.",
      "Audited, migrated, and decommissioned **25+ internal web applications** from a legacy server onto new production infrastructure, handling networking, nginx configuration, and TLS cutover.",
    ],
    tags: [
      "Flask",
      "PostgreSQL",
      "Linux",
      "nginx",
      "LDAP",
      "Incident Response",
    ],
  },
  {
    org: "FRC #1086 Blue Cheese",
    role: "Robotics, CAD & Manufacturing",
    dates: "2022 - 2024",
    bullets: [
      "Developed 3D robot models using self-taught professional CAD software (Onshape).",
      "Fabricated competition robot parts using CAM software (Fusion 360) and in-shop machinery.",
      "Led CAD and machining workshops for first-year teammates and served as a STEM outreach volunteer at **10+ schools**, showcasing robotics, pneumatics, and circuits to elementary students.",
    ],
    tags: ["Onshape", "Fusion 360 CAM", "In-Shop Machining"],
  },
];
