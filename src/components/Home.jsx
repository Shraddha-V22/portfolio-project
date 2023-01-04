import React from "react";
import ProfilePhoto from "./ProfilePhoto";
import { Parallax } from "react-scroll-parallax";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "../App";

export default function Home() {
  const modeToggled = useTheme();

  return (
    <section className="" id="home">
      <section className="mx-auto flex h-screen w-[fit-content] flex-col items-center justify-center px-4 pt-8">
        <section
          className={`mx-auto w-[fit-content] animate-bg-pan bg-gradient-to-tl from-blueGreen ${
            modeToggled ? "via-blueGrotto" : "via-navyBlue"
          } to-blueGreen bg-200% bg-clip-text text-center font-bold uppercase tracking-wider text-transparent`}
        >
          <h1 className="min-[280px]:text-[36px] sm:text-[44px] lg:text-[60px]">
            Shraddha
          </h1>
          <h1 className="min-[280px]:text-[36px] sm:text-[44px] lg:text-[60px]">
            Vishwakarma
          </h1>
        </section>
        <section
          className={`flex gap-4 pt-8 ${
            modeToggled ? "text-blueGreen" : "text-navyBlue"
          } justify-center`}
        >
          <Parallax speed={10} scale={[1, 1.3, "easeInOut"]} translateY={0}>
            <a
              href="https://twitter.com/Shraddha_228"
              className="cursor-pointer"
            >
              <FontAwesomeIcon
                icon={faSquareTwitter}
                className="text-4xl hover:text-blueGrotto"
              />
            </a>
          </Parallax>
          <Parallax speed={10} scale={[1, 1.3, "easeInOut"]} translateY={0}>
            <a
              href="https://www.linkedin.com/in/vkarma-shraddha/"
              className="cursor-pointer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-4xl hover:text-blueGrotto"
              />
            </a>
          </Parallax>
          <Parallax speed={10} scale={[1, 1.3, "easeInOut"]} translateY={0}>
            <a
              href="https://github.com/Shraddha-V22"
              className="cursor-pointer"
            >
              <FontAwesomeIcon
                icon={faSquareGithub}
                className="text-4xl hover:text-blueGrotto"
              />
            </a>
          </Parallax>
        </section>
        {/* <ProfilePhoto /> */}
      </section>
    </section>
  );
}
