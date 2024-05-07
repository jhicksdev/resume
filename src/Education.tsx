import React from "react";
import Section from "./Section";
import { faCalendar, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Duration } from "./Duration";
import { Month } from "./Month";

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
    duration: Duration;
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
            <FontAwesomeIcon icon={faCalendar} style={{ marginRight: "8px" }} />
            {Month[school.duration.start.monthIndex]} {school.duration.start.year} → {school.duration.end ? `${Month[school.duration.end.monthIndex]} ${school.duration.end.year}` : "Present"}
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
