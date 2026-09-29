// Peer-reviewed publications, newest first.
// Your own name is bolded automatically wherever AUTHOR_NAME appears in
// the `authors` string, so keep the spelling below consistent.
//
// status  -- OPTIONAL. e.g. "Accepted August 7, 2026" or "Under review".
// metrics -- OPTIONAL. Journal quality line.
// credit  -- OPTIONAL. Your CRediT contribution roles.
// link    -- OPTIONAL. Renders the title as a link.

export const AUTHOR_NAME = "Kurgan, A.";

export type Publication = {
  authors: string;
  title: string;
  venue: string;
  status?: string;
  metrics?: string;
  credit?: string;
  link?: string;
};

export const publications: Publication[] = [
  {
    authors:
      "Chan, E. S. M., da Costa, M., Fritz, T., Frontale, S., Jamalinabijan, F., Cuber, I., Kurgan, A., Shepherd, D. C., & Langberg, J. M.",
    title:
      "Enhancing Academic Engagement in College Students with ADHD: A Randomized Controlled Trial of a Virtual Reality Study Aid",
    venue: "Technology, Mind, and Behavior",
    status: "Accepted August 7, 2026",
    metrics: "Q1 Journal. CiteScore 8, Impact Factor 3.4.",
    credit:
      "Software (Lead), Data Curation (Supporting), Formal Analysis (Supporting)",
  },
  {
    authors:
      "da Costa, M., Chan, E. S. M., Langberg, J. M., Cuber, I., Jamalinabijan, F., Kurgan, A., Fritz, T., & Shepherd, D. C.",
    title:
      "Towards Ecological Validity When Assessing ADHD Symptoms: Patterns in Automatically Collected, Real-World PC Activity Data",
    venue: "International Journal of Human-Computer Studies, 209, 103724",
    metrics:
      "Q1 Journal. CiteScore 10.1, Impact Factor 6.1, 16% acceptance rate.",
    credit:
      "Data Curation, Data Analysis, Modeling, Validation, Software Development",
    link: "https://doi.org/10.1016/j.ijhcs.2025.103724",
  },
];
