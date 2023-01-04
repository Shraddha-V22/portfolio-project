import React from "react";
import { useTheme } from "../App";
import devsnest from "../Images/devsnest.png";
import freecodecamp from "../Images/freecodecamp.jpg";

export default function About() {
  const modeToggled = useTheme();

  return (
    <div className="m-8 scroll-mt-12" id="about">
      <h1 className="mb-4 flex cursor-default justify-center gap-2 text-[48px]">
        <span className="duration-75 hover:scale-125">A</span>
        <span className="duration-75 hover:scale-125">B</span>
        <span className="duration-75 hover:scale-125">O</span>
        <span className="duration-75 hover:scale-125">U</span>
        <span className="duration-75 hover:scale-125">T</span>
      </h1>
      <section className="flex h-[80%] flex-col items-center justify-center gap-4">
        <section
          className={`flex h-[fit-content] max-w-[800px] gap-4 p-8 text-justify tracking-wide ${
            modeToggled ? "text-babyBlue" : "text-navyBlue"
          }`}
        >
          <p>
            Hi! My name is{" "}
            <strong className="text-blueGrotto">Shraddha Vishwakarma</strong>{" "}
            and I'm front-end developer.
            <br />
            As a frontend developer, I have a strong foundation in HTML, CSS,
            JavaScript, and React. I am skilled in creating visually appealing
            and user-friendly websites and applications. I am able to work well
            independently and as part of a team, and have excellent
            problem-solving and communication skills. With my talent and
            dedication, I am well-equipped to succeed in a frontend developer
            role.
          </p>
        </section>

        <section className="flex w-[fit-content] flex-col items-center rounded-md bg-gradient-to-b from-babyBlue to-blueGrotto p-4">
          <h1 className="mb-2 text-xl text-navyBlue">Certifications</h1>
          <section className="grid grid-cols-autoFill-250 gap-2 text-center sm:w-[fit-content] lg:w-[770px]">
            <section className="w-[250px] rounded-md bg-babyBlue p-2">
              <img
                src={devsnest}
                alt="Devsnest logo"
                className="mx-auto h-16 w-16 rounded-full p-2"
              />
              <h1 className="text-xl font-bold text-dark">Devsnest</h1>
              <p className="text-sm text-navyBlue">Front-End Web Development</p>
            </section>
            <section className="w-[250px] rounded-md bg-babyBlue p-2">
              <img
                src={freecodecamp}
                alt="FreeCodeCamp logo"
                className="mx-auto h-16 w-16 rounded-full p-2"
              />
              <h1 className="text-xl font-bold text-dark">Free Code Camp</h1>
              <p className="text-sm text-navyBlue">
                JavaScript Algorithms and Data Structures
              </p>
            </section>

            <section className="w-[250px] rounded-md bg-babyBlue p-2">
              <img
                src={freecodecamp}
                alt="FreeCodeCamp logo"
                className="mx-auto h-16 w-16 rounded-full p-2"
              />
              <h1 className="text-xl font-bold text-dark">Free Code Camp</h1>
              <p className="text-sm text-navyBlue">
                Responsive Web Development
              </p>
            </section>
          </section>
        </section>
      </section>
      {/* <section className="max-w-[500px] bg-gray-400 p-4 text-justify text-white"></section> */}
    </div>
  );
}
