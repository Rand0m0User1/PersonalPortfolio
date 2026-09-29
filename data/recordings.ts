export type Recording = {
  name: string;
  ytlink: string;
  description: string;
  credit?: { role: string; name: string; url?: string };
  isNew?: boolean;
};

export const RECORDINGS_PAGE_SIZE = 5;

export const recordings: Recording[] = [
  {
    name: "“Tenerife Dance” by Gregory Fritze",
    ytlink: "https://www.youtube.com/embed/KxUOWKt_HFY",
    description:
      "A vibrant piece based on the colors and dance rhythms of Tenerife, a musical postcard combining lyrical melodies with energetic dance motifs.",
    isNew: true,
  },
  {
    name: "Sonatine by Hidenori Arai & Melodious Etude No. 42",
    ytlink: "https://www.youtube.com/embed/mIj3i5NNuLk",
    description:
      "Sonatine by Hidenori Arai, paired with Melodious Etudes for Trombone Book 1 No. 42 by Marco Bordogni & Johannes Rochut.",
  },
  {
    name: "“Vocalise No. 10, Andante Pastorale” by Marco Bordogni",
    ytlink: "https://www.youtube.com/embed/71nKpRCXJFE",
    description:
      "A lyrical vocalise showcasing melodic expression and phrasing on the euphonium.",
  },
  {
    name: "Romance by Carl Maria von Weber",
    ytlink: "https://www.youtube.com/embed/2yEQQhbJ0Hc",
    description:
      "A romantic piece highlighting the expressive capabilities of the euphonium.",
  },
  {
    name: "Rhapsody for Euphonium by James Curnow",
    ytlink: "https://www.youtube.com/embed/x7sH6wLfTiI",
    description:
      "A rhapsody showcasing the full range and expressive capabilities of the euphonium.",
    credit: {
      role: "Pianist",
      name: "Magdalena Adamek",
      url: "https://magdalenaadamek.wordpress.com/",
    },
  },
  {
    name: "Concertino by Ernst Sachse",
    ytlink: "https://www.youtube.com/embed/hcKxIkghNv8",
    description:
      "Ernst Sachse’s Concertino for Bass Trombone, adapted for euphonium.",
    credit: {
      role: "Pianist",
      name: "Magdalena Adamek",
      url: "https://magdalenaadamek.wordpress.com/",
    },
  },
  {
    name: "Etude Based on “Sweet Georgia Brown”",
    ytlink: "https://www.youtube.com/embed/JxPWLWcxc5A",
    description:
      "A jazz etude exploring improvisation over the chord changes of the classic tune.",
  },
  {
    name: "Solo on “Hey Pete” at All Virginia Jazz 2024",
    ytlink: "https://www.youtube.com/embed/Q7GdCgQ16aM",
    description:
      "Solo performance directed by Vincent Gardner of the Jazz at Lincoln Center Orchestra.",
  },
  {
    name: "“Alfie’s Theme” Improv Solo with GRYJB",
    ytlink: "https://www.youtube.com/embed/c4aSNEVmUrE?start=177",
    description:
      "Improvised solo with the Greater Richmond Youth Jazz Band at the Trinity Episcopal Jazz Festival.",
  },
  {
    name: "Jack Teagarden Solo Transcription",
    ytlink: "https://www.youtube.com/embed/hW9XYYaUvT0",
    description:
      "A transcription of “I Guess I’ll Go Back Home This Summer,” a solo by one of the greatest jazz trombonists to ever live.",
  },
];
