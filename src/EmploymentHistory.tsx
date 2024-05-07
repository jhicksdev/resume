import React from "react";
import Section from "./Section";
import { faCalendar, faHandshake } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Duration } from "./Duration";
import { Month } from "./Month";

type EmploymentHistoryData = {
  employments: {
    company: {
      name: string;
      location: string;
      image: {
        src: string;
        width: number;
      };
      website: string;
    };
    position: string;
    duration: Duration;
    skills: string[];
  }[];
};

function EmploymentHistory(data: EmploymentHistoryData) {
  const { employments } = data;
  return (
    <Section className="employment-history" label="Employment History" icon={faHandshake}>
      {employments.map((employment) => (
        <div>
          <img src={employment.company.image.src} alt={employment.company.name} width={employment.company.image.width} />
          <p className="summary">
            <a href={employment.company.website}>
              <strong>{employment.company.name}</strong>
            </a>{" "}
            | <strong>{employment.company.location}</strong> | <em>{employment.position}</em>
          </p>
          <p className="duration">
            <FontAwesomeIcon icon={faCalendar} style={{ marginRight: "8px" }} />
            {Month[employment.duration.start.monthIndex]} {employment.duration.start.year} → {employment.duration.end ? `${Month[employment.duration.end.monthIndex]} ${employment.duration.end.year}` : "Present"}
          </p>
          <ul>
            {employment.skills.map((skill) => (
              <li>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </Section>
  );
}

export { EmploymentHistory, EmploymentHistoryData };
