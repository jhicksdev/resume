import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type Profile = {
  name: string;
  occupation: string;
  phone: string;
  email: string;
  github: string;
  image: string;
};

function Profile(data: Profile) {
  const { name, occupation, phone, email, github, image } = data;
  return (
    <div className="profile">
      <img src={image} alt={name} />
      <div>
        <p className="roboto-bold name">{name}</p>
        <p className="occupation">
          <em>{occupation}</em>
        </p>
        <p className="phone">
          <FontAwesomeIcon icon={faPhone} style={{ marginRight: "8px" }} />
          <a href={`tel:+1${phone.replace(/[^0-9.]/, "")}`}>{phone}</a>
        </p>
        <p className="email">
          <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "8px" }} />
          <a href={`mailto:${email}`}>{email}</a>
        </p>
        <p className="github">
          <FontAwesomeIcon icon={faGithub} style={{ marginRight: "8px" }} />
          <a href={`https://github.com/${github}`}>{github}</a>
        </p>
      </div>
    </div>
  );
}

export { Profile };
