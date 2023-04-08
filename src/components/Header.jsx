import React from "react";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faPager } from "@fortawesome/free-solid-svg-icons";
import { faWindowClose } from "@fortawesome/free-regular-svg-icons";
import { faEnvelopesBulk } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";
import NavBarLinkIcon, { NavBarLink } from "./NavLinkIcon";

export default function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      return setWindowWidth(e.target.innerWidth);
    });

    return () =>
      window.addEventListener("resize", (e) => {
        return setWindowWidth(e.target.innerWidth);
      });
  }, [windowWidth]);

  return (
    <>
      <header className="font-aboreto font-[600] text-white">
        {windowWidth >= 550 ? (
          <nav>
            <ul
              className={`flex w-full justify-end pr-8 pt-4 text-sm uppercase`}
            >
              <NavBarLink toPage="" />
              <NavBarLink toPage="about" />
              <NavBarLink toPage="skills" />
              <NavBarLink toPage="projects" />
              <NavBarLink toPage="blogs" />
              <NavBarLink toPage="connect" />
            </ul>
          </nav>
        ) : (
          <>
            <nav
              className={`absolute top-0 w-full transition-all duration-300`}
            >
              <ul
                className={`absolute top-1 flex w-full justify-center gap-2 p-1 text-sm uppercase transition-all duration-300`}
              >
                <NavBarLinkIcon iconName={faHouse} linkName="" />
                <NavBarLinkIcon iconName={faUser} linkName="about" />
                <NavBarLinkIcon iconName={faCode} linkName="skills" />
                <NavBarLinkIcon iconName={faWindowClose} linkName="projects" />
                <NavBarLinkIcon iconName={faPager} linkName="blogs" />
                <NavBarLinkIcon iconName={faEnvelopesBulk} linkName="connect" />
              </ul>
            </nav>
          </>
        )}
      </header>
    </>
  );
}
