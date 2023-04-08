import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { NavLink } from "react-router-dom";

export default function NavBarLinkIcon({ iconName, linkName }) {
  const getStyle = ({ isActive }) =>
    isActive
      ? "bg-white text-black h-[fit-content] rounded-md py-1 px-4 transition-colors duration-200 ease-in-out hover:cursor-pointer"
      : "h-[fit-content] rounded-md py-1 px-4 transition-colors duration-200 ease-in-out hover:cursor-pointer";

  return (
    <NavLink className={getStyle} to={`/${linkName}`}>
      <FontAwesomeIcon icon={iconName} />
    </NavLink>
  );
}

export function NavBarLink({ toPage }) {
  const getStyle = ({ isActive }) =>
    isActive
      ? "bg-white text-black h-[fit-content] rounded-md py-1 px-4 transition-colors duration-200 ease-in-out hover:cursor-pointer"
      : "h-[fit-content] rounded-md py-1 px-4 transition-colors duration-200 ease-in-out hover:cursor-pointer";

  return (
    <NavLink className={getStyle} to={`/${toPage}`}>
      {toPage === "" ? "home" : toPage}
    </NavLink>
  );
}
