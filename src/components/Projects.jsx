import React from "react";
import projectImageData from "../projectsData";
import { Parallax } from "react-scroll-parallax";
import { random } from "../common";

export default function Projects() {
  return (
    <section className="mb-8 scroll-mt-12 px-4" id="projects">
      <h1 className="mb-4 flex cursor-default justify-center gap-2 text-[48px]">
        <span className="duration-75 hover:scale-125">P</span>
        <span className="duration-75 hover:scale-125">R</span>
        <span className="duration-75 hover:scale-125">O</span>
        <span className="duration-75 hover:scale-125">J</span>
        <span className="duration-75 hover:scale-125">E</span>
        <span className="duration-75 hover:scale-125">C</span>
        <span className="duration-75 hover:scale-125">T</span>
        <span className="duration-75 hover:scale-125">S</span>
      </h1>{" "}
      <section className="mx-auto mt-8 grid grid-cols-autoFill-250 justify-center gap-8 p-4 sm:w-[95vw] lg:w-[90vw]">
        {projectImageData.map((pro) => (
          <ProjectCard project={pro} key={pro.title} />
        ))}
      </section>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <section className="flex h-full w-[250px] flex-col rounded-md bg-gradient-to-bl from-babyBlue to-blueGreen p-4 shadow-spread">
      <img
        src={project.img}
        alt={project.title}
        className="mb-2 h-28 w-full object-contain"
      />
      <section>
        <h2 className="text-xl font-bold text-navyBlue line-clamp-1">
          {project.title}
        </h2>
        <p className="h-[60px] text-sm text-navyBlue/75 line-clamp-3">
          {project.descp}
        </p>
        <section className="mt-4 flex justify-between gap-4">
          <a href={project.live} target="_blank">
            <button className="w-24 rounded-md border-[1px] border-navyBlue/50 bg-navyBlue py-1 px-4 text-babyBlue transition-colors duration-300 ease-in-out hover:bg-transparent hover:text-navyBlue">
              Live
            </button>
          </a>
          <a href={project.github} target="_blank">
            <button className="w-24 rounded-md border-[1px] border-navyBlue/50 bg-navyBlue py-1 px-4 text-babyBlue transition-colors duration-300 ease-in-out hover:bg-transparent hover:text-navyBlue">
              Github
            </button>
          </a>
        </section>
      </section>
    </section>
  );
}
