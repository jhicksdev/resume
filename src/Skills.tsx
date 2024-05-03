import React from "react";
import Section from "./Section";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";

export default function Skills(props: { texts: string[] }) {
  const { texts } = props;
  return (
    <Section className="skills" label="Skills" icon={faScrewdriverWrench}>
      <ul>
        {texts.map((text) => (
          <li>{text}</li>
        ))}
      </ul>
    </Section>
  );
}
