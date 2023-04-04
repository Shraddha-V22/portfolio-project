import React from "react";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faPager } from "@fortawesome/free-solid-svg-icons";
import { faWindowClose } from "@fortawesome/free-regular-svg-icons";
import { faEnvelopesBulk } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import NavLinkIcon, { NavLink } from "./NavLinkIcon";

export default function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      return setWindowWidth(e.target.innerWidth);
    });
  }, []);

  return (
    <>
      <header className="font-aboreto font-[600] text-white">
        {windowWidth >= 550 ? (
          <nav>
            <ul
              className={`flex w-full justify-end pr-8 pt-4 text-sm uppercase`}
            >
              <NavLink toPage="" />
              <NavLink toPage="about" />
              <NavLink toPage="skills" />
              <NavLink toPage="projects" />
              <NavLink toPage="blogs" />
              <NavLink toPage="connect" />
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
                <NavLinkIcon iconName={faHouse} linkName="" />
                <NavLinkIcon iconName={faUser} linkName="about" />
                <NavLinkIcon iconName={faCode} linkName="skills" />
                <NavLinkIcon iconName={faWindowClose} linkName="projects" />
                <NavLinkIcon iconName={faPager} linkName="blogs" />
                <NavLinkIcon iconName={faEnvelopesBulk} linkName="connect" />
              </ul>
            </nav>
          </>
        )}
      </header>
    </>
  );
}
