import React from "react";
import { useTheme } from "../App";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

export default function Header({ onclick, activeSection }) {
  const modeToggled = useTheme();
  const [windowWidth, setWindowWidth] = useState(1000);
  const [menuClicked, setMenuClicked] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", (e) =>
      setWindowWidth(e.target.innerWidth)
    );
  }, []);

  function navItemClicked() {
    setMenuClicked(false);
  }

  return (
    <>
      <header
        className={` ${
          modeToggled ? "bg-navyBlue" : "bg-white"
        } fixed top-0 z-[1] w-full shadow-lg`}
      >
        {windowWidth >= 550 ? (
          <nav>
            <ul
              className={`flex w-full justify-center pb-1 text-sm uppercase ${
                modeToggled ? "text-babyBlue" : "text-navyBlue"
              }`}
            >
              <li
                className={`h-[fit-content] rounded-b-md py-1 px-4 transition-colors duration-200 ease-in-out hover:cursor-pointer ${
                  activeSection === "home" &&
                  (modeToggled
                    ? "bg-babyBlue/75 text-navyBlue"
                    : "bg-blueGrotto/75 text-white")
                }`}
              >
                <a href="#">home</a>
              </li>
              <li
                className={`h-[fit-content] rounded-b-md py-1 px-4 transition-colors duration-200 ease-in-out ${
                  activeSection === "about" &&
                  (modeToggled
                    ? "bg-babyBlue/75 text-navyBlue"
                    : "bg-blueGrotto/75 text-white")
                }`}
              >
                <a href="#about">about</a>
              </li>
              <li
                className={`h-[fit-content] rounded-b-md py-1 px-4 transition-colors duration-200 ease-in-out ${
                  activeSection === "skills" &&
                  (modeToggled
                    ? "bg-babyBlue/75 text-navyBlue"
                    : "bg-blueGrotto/75 text-white")
                }`}
              >
                <a href="#skills">skills</a>
              </li>
              <li
                className={`h-[fit-content] rounded-b-md py-1 px-4 transition-colors duration-200 ease-in-out ${
                  activeSection === "projects" &&
                  (modeToggled
                    ? "bg-babyBlue/75 text-navyBlue"
                    : "bg-blueGrotto/75 text-white")
                }`}
              >
                <a href="#projects">projects</a>
              </li>
              <li
                className={`h-[fit-content] rounded-b-md py-1 px-4 transition-colors duration-200 ease-in-out ${
                  activeSection === "blogs" &&
                  (modeToggled
                    ? "bg-babyBlue/75 text-navyBlue"
                    : "bg-blueGrotto/75 text-white")
                }`}
              >
                <a href="#blogs">blogs</a>
              </li>
              <li
                className={`h-[fit-content] rounded-b-md py-1 px-4 transition-colors duration-200 ease-in-out ${
                  activeSection === "connect" &&
                  (modeToggled
                    ? "bg-babyBlue/75 text-navyBlue"
                    : "bg-blueGrotto/75 text-white")
                }`}
              >
                <a href="#connect">connect</a>
              </li>
              <li className="justify-self-end py-1 px-4">
                <button onClick={onclick}>
                  {modeToggled ? (
                    <FontAwesomeIcon icon={faSun} title="Light mode" />
                  ) : (
                    <FontAwesomeIcon icon={faMoon} title="Dark mode" />
                  )}
                </button>
              </li>
            </ul>
          </nav>
        ) : (
          <>
            <button className="w-full text-right">
              <FontAwesomeIcon
                icon={faBars}
                onClick={() => setMenuClicked((prev) => !prev)}
                className={`cursor-pointer p-2 pr-3 text-xl uppercase ${
                  modeToggled ? "text-babyBlue" : "text-navyBlue"
                }`}
              />
            </button>

            <nav
              className={`absolute top-9 h-screen w-full transition-all duration-300 ${
                menuClicked ? "right-[0%]" : "right-[-100%]"
              } ${modeToggled ? "bg-navyBlue" : "bg-babyBlue"}`}
            >
              <ul
                className={`flex flex-col gap-2 p-4 text-sm uppercase ${
                  modeToggled ? "text-babyBlue" : "text-navyBlue"
                }`}
              >
                <li
                  className={`h-[fit-content] rounded-md py-1 px-2 transition-colors duration-200 ease-in-out hover:cursor-pointer hover:bg-babyBlue/50 ${
                    activeSection === "home" &&
                    (modeToggled
                      ? "bg-babyBlue/75 text-navyBlue"
                      : "bg-blueGrotto/75 text-white")
                  }`}
                >
                  <a onClick={navItemClicked} href="#">
                    home
                  </a>
                </li>
                <li
                  className={`h-[fit-content] rounded-md py-1 px-2 transition-colors duration-200 ease-in-out hover:cursor-pointer hover:bg-babyBlue/50 ${
                    activeSection === "about" &&
                    (modeToggled
                      ? "bg-babyBlue/75 text-navyBlue"
                      : "bg-blueGrotto/75 text-white")
                  }`}
                >
                  <a onClick={navItemClicked} href="#about">
                    about
                  </a>
                </li>
                <li
                  className={`h-[fit-content] rounded-md py-1 px-2 transition-colors duration-200 ease-in-out hover:cursor-pointer hover:bg-babyBlue/50 ${
                    activeSection === "skills" &&
                    (modeToggled
                      ? "bg-babyBlue/75 text-navyBlue"
                      : "bg-blueGrotto/75 text-white")
                  }`}
                >
                  <a onClick={navItemClicked} href="#skills">
                    skills
                  </a>
                </li>
                <li
                  className={`h-[fit-content] rounded-md py-1 px-2 transition-colors duration-200 ease-in-out hover:cursor-pointer hover:bg-babyBlue/50 ${
                    activeSection === "projects" &&
                    (modeToggled
                      ? "bg-babyBlue/75 text-navyBlue"
                      : "bg-blueGrotto/75 text-white")
                  }`}
                >
                  <a onClick={navItemClicked} href="#projects">
                    projects
                  </a>
                </li>
                <li
                  className={`h-[fit-content] rounded-md py-1 px-2 transition-colors duration-200 ease-in-out hover:cursor-pointer hover:bg-babyBlue/50 ${
                    activeSection === "blogs" &&
                    (modeToggled
                      ? "bg-babyBlue/75 text-navyBlue"
                      : "bg-blueGrotto/75 text-white")
                  }`}
                >
                  <a onClick={navItemClicked} href="#blogs">
                    blogs
                  </a>
                </li>
                <li
                  className={`h-[fit-content] rounded-md py-1 px-2 transition-colors duration-200 ease-in-out hover:cursor-pointer hover:bg-babyBlue/50 ${
                    activeSection === "connect" &&
                    (modeToggled
                      ? "bg-babyBlue/75 text-navyBlue"
                      : "bg-blueGrotto/75 text-white")
                  }`}
                >
                  <a onClick={navItemClicked} href="#connect">
                    connect
                  </a>
                </li>
                <li className="mt-2 justify-self-end py-1 px-2">
                  <button onClick={onclick}>
                    {modeToggled ? (
                      <div className="flex items-center gap-4">
                        <FontAwesomeIcon icon={faSun} title="Light mode" />
                        <h4>Light Mode</h4>
                      </div>
                    ) : (
                      <div className="flex items-center gap-4">
                        <FontAwesomeIcon icon={faMoon} title="Dark mode" />
                        <h4>Dark Mode</h4>
                      </div>
                    )}
                  </button>
                </li>
              </ul>
            </nav>
          </>
        )}
        <div
          className={`h-1 w-[100%] bg-gradient-to-r from-navyBlue via-blueGreen to-navyBlue`}
        ></div>
      </header>
      {/* <div className="fixed h-8 w-full animate-bg-pan bg-gradient-to-r from-navyBlue via-blueGreen to-navyBlue bg-200% blur-md"></div> */}
    </>
  );
}
