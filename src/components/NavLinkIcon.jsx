import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function NavLinkIcon({ iconName, linkName }) {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === `/${linkName}`) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [location]);

  return (
    <li
      className={`${
        isActive && "bg-white/50"
      } h-[fit-content] rounded-md py-1 px-2 transition-colors duration-200 ease-in-out hover:cursor-pointer hover:bg-newGrey/50`}
    >
      <Link to={`/${linkName}`}>
        <FontAwesomeIcon icon={iconName} />
      </Link>
    </li>
  );
}

export function NavLink({ toPage }) {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === `/${toPage}`) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [location]);

  return (
    <li
      className={`${
        isActive && "bg-white text-black"
      } h-[fit-content] rounded-md py-1 px-4 transition-colors duration-200 ease-in-out hover:cursor-pointer`}
    >
      <Link to={`/${toPage}`}>{toPage === "" ? "home" : toPage}</Link>
    </li>
  );
}
