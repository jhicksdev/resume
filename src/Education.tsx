import React from "react";
import Section from "./Section";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

type EducationData = {
  schools: {
    name: string;
    location: string;
    image: {
      src: string;
      width: number;
    };
    website: string;
    major: string;
    duration: {
      start: {
        month: string;
        year: number;
      };
      end?: {
        month: string;
        year: number;
      };
    };
    awards: string[];
  }[];
};

function Education(data: EducationData) {
  const { schools } = data;
  return (
    <Section className="education" label="Education" icon={faGraduationCap}>
      {schools.map((school) => (
        <div>
          <img src={school.image.src} alt={school.name} width={school.image.width} />
          <p className="summary">
            <a href={school.website}>
              <strong>{school.name}</strong>
            </a>{" "}
            | <strong>{school.location}</strong> | <em>{school.major}</em>
          </p>
          <p className="duration">
            📅 {school.duration.start.month} {school.duration.start.year} → {school.duration.end ? `${school.duration.end.month} ${school.duration.end.year}` : "Present"}
          </p>
          <ul>
            {school.awards.map((award) => (
              <li>{award}</li>
            ))}
          </ul>
        </div>
      ))}
    </Section>
  );
}

export { Education, EducationData };
