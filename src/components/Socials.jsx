import React from "react";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Socials() {
  return (
    <section
      className="flex justify-center gap-6 text-white
    "
    >
      <a href="https://twitter.com/Shraddha_228">
        <FontAwesomeIcon
          icon={faTwitter}
          className="text-3xl hover:scale-110"
        />
      </a>
      <a href="https://www.linkedin.com/in/vkarma-shraddha/">
        <FontAwesomeIcon
          icon={faLinkedin}
          className="text-3xl hover:scale-110"
        />
      </a>
      <a href="https://github.com/Shraddha-V22">
        <FontAwesomeIcon icon={faGithub} className="text-3xl hover:scale-110" />
      </a>
    </section>
  );
}
