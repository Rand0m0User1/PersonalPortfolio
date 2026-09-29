// CAD models shown on /CADmodels. Drop a .glb into /public and append an
// entry here. `link` (Onshape document) is optional.

export type CadModel = {
  name: string;
  description: string;
  glbPath: string;
  link?: string;
};

export const cadModels: CadModel[] = [
  {
    name: "Slapshot",
    description:
      "Robot designed for a casual re-run of the F4 CADathon competition. It features an intake that passively centers the pucks, an indexer, and a high-power, variable-angle shooter.",
    glbPath: "/puckrobot.glb",
    link: "https://cad.onshape.com/documents/aea32739f3009eb4a0fed1a5/w/cb6f4f03cdabbd21cc2bba95/e/9fd5c7e17a5c8e016f5b7045",
  },
  {
    name: "2024 Climbing Mechanism",
    description:
      "Proposed compact climbing mechanism for the 2024 FIRST Robotics Competition robot.",
    glbPath: "/chainclimb.glb",
    link: "https://cad.onshape.com/documents/22633d46d8241ca56701bcb0/w/7c9de08487f4f9c947e2a444/e/c7a4c4971d8186e864267b90",
  },
  {
    name: "Double Jointed Arm",
    description:
      "Double-jointed arm with a variable wrist, tailored for the 2023 FIRST Robotics Competition game, Charged Up. Versatile, though it does present a bit of a challenge for programmers. 😉",
    glbPath: "/djarm.glb",
    link: "https://cad.onshape.com/documents/8253e250247f832b06e3a35f/w/221930e2d4075dcf935fcfe5/e/7d2bf5cdca04897dcaade0e5",
  },
  {
    name: "Blockade",
    description:
      "Robot designed for the 2018 FIRST Robotics Competition game, Power Up. It picks up power cubes and deposits them into a high balance-beam goal using an elevator system, and features a buddy-climb system that lifts another robot off the ground during the endgame.",
    glbPath: "/cubinator.glb",
    link: "https://cad.onshape.com/documents/aea32739f3009eb4a0fed1a5/w/cb6f4f03cdabbd21cc2bba95/e/9fd5c7e17a5c8e016f5b7045",
  },
  {
    name: "Slapdown Intake",
    description:
      "Intake designed to avoid a four-bar linkage, simplifying both the design and the deployment process. Intended to pick up plastic balls filled halfway with water.",
    glbPath: "/slapdownintake.glb",
    link: "https://cad.onshape.com/documents/495f76657db70918ebca4f43/w/f636e2ac2cf051fd77c257f8/e/5fa5b776284f7976fe523b02",
  },
  {
    name: "Four Bar Linkage Intake",
    description:
      "Intake using a four-bar linkage to optimize space constraints. The compact design stows neatly and supports a compact deployment mechanism. Built to pick up 7-inch foam balls from the 2021 FIRST Robotics Competition game, Infinite Recharge.",
    glbPath: "/fourbarintake.glb",
    link: "https://cad.onshape.com/documents/c48936fccef1fb811cf717e2/w/a91025fc85fa0d82564d9e3b/e/16730cc9ec5c5772a3776724",
  },
];
