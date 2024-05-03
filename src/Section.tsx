import React, { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

type SectionProperties = {
  className: string;
  label: string;
  icon: IconDefinition;
  children: ReactNode;
};

export default function Section(props: SectionProperties) {
  const { className, label, icon, children } = props;
  return (
    <section className={className}>
      <h2>
        <FontAwesomeIcon icon={icon} /> {label}
      </h2>
      <hr />
      <div style={{ paddingLeft: "16px", paddingRight: "16px" }}>{children}</div>
    </section>
  );
}
