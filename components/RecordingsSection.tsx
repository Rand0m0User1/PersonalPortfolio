import React from "react";
import { FaMusic } from "react-icons/fa";

const projects = [
  {
    name: "James Curnow Rhapsody for Euphonium",
    ytlink: "https://www.youtube.com/embed/x7sH6wLfTiI?si=P2_JxMJDvId3Oqze",
    description: (
      <>
        A beautiful rhapsody showcasing the range and expressive capabilities of
        the euphonium. Pianist:{" "}
        <a
          href="https://magdalenaadamek.wordpress.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Magdalena Adamek
        </a>
      </>
    ),
  },
  {
    name: "Ernst Sachse Concertino",
    ytlink: "https://www.youtube.com/embed/hcKxIkghNv8?si=XRI5GUxh5ZRH5du2",
    description: (
      <>
        A performance of Ernst Sachse&#39;s Concertino for Bass Trombone,
        adapted for euphonium. Pianist:{" "}
        <a
          href="https://magdalenaadamek.wordpress.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Magdalena Adamek
        </a>
      </>
    ),
  },
  {
    name: "GRYJB Alfie's Theme Improv Solo",
    ytlink:
      "https://www.youtube.com/embed/c4aSNEVmUrE?si=qNpM0v_-vE7FidN_&amp;start=177",
    description:
      "Improvisational solo at GRYJB's performance of Alfie's Theme at the Trinity Episcopal Jazz Festival",
  },
  {
    name: "GRYJB Urban Strut Improv Solo",
    ytlink:
      "https://www.youtube.com/embed/knRk8mRZ3ZY?si=RUYQdWCAUEHsFRsq&amp;start=86",
    description:
      "Improvisational solo at GRYJB's performance of Urban Strut at the annual Dominion Energy Center concert",
  },
  {
    name: "Recording of Jack Teagarden's Solo on 'I Guess I'll Go Back Home This Summer'",
    ytlink: "https://www.youtube.com/embed/hW9XYYaUvT0?si=Bq2IoMA44RqufsYS",
    description: (
      <>
        Transcription of a solo by one of the greatest Jazz Trombonists to ever
        live.{" "}
        <span className="font-bold text-amber-400">More to come soon!</span>
      </>
    ),
  },
];

const RecordingsSection = () => {
  return (
    <section id="recordings">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl py-8 mb-4">
          Recordings
          <hr className="w-6 h-1 mx-auto my-4 bg-amber-400 border-0 rounded" />
        </h1>
        <div className="flex flex-col space-y-28">
          {projects.map((project, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-col md:flex-row md:space-x-12"
              >
                <div className="md:w-1/2 flex flex-col items-center md:items-start mt-8 md:mt-0">
                  <h1 className="text-center md:text-left text-2xl font-bold mb-4 flex items-center space-x-2">
                    <FaMusic className="text-4xl text-amber-400" />
                    <span>{project.name}</span>
                  </h1>
                  <p className="text-center md:text-left text-xl leading-7 mb-4">
                    {project.description}
                  </p>
                </div>
                <div className="md:w-1/2">
                  <div className="relative" style={{ paddingBottom: "56.25%" }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={project.ytlink}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RecordingsSection;
