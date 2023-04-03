import React from "react";
import projectImageData from "../projectsData";
import { motion } from "framer-motion";
import { componentVarient } from "./varients/varients";

export default function Projects() {
  return (
    <motion.section className="h-full w-full max-[1300px]:overflow-y-scroll">
      <section className="mx-auto flex flex-wrap items-center justify-center gap-4 p-4">
        {projectImageData.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </section>
    </motion.section>
  );
}

function ProjectCard({ project }) {
  return (
    <section className="h-[200px] w-[250px] rounded-md bg-black/90 p-4 text-white">
      <section className="flex h-full flex-col justify-between gap-2 rounded-md">
        <motion.h2
          variants={componentVarient}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="max-[800px]:text-md font-aboreto text-lg font-bold line-clamp-1"
        >
          {project.title}
        </motion.h2>
        <motion.p
          variants={componentVarient}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="font-newCycle text-sm line-clamp-3"
        >
          {project.descp}
        </motion.p>
        <section className="mt-4 flex justify-start gap-6 font-aboreto">
          <motion.a
            variants={componentVarient}
            initial="hidden"
            animate="visible"
            exit="exit"
            whileHover={{ scale: 1.1 }}
            href={project.live}
            target="_blank"
          >
            <button className="text-md w-24 rounded-md border-[1px] border-white py-1 px-2 max-[800px]:text-sm">
              Live
            </button>
          </motion.a>
          <motion.a
            variants={componentVarient}
            initial="hidden"
            animate="visible"
            exit="exit"
            whileHover={{ scale: 1.1 }}
            href={project.github}
            target="_blank"
          >
            <button className="text-md w-24 rounded-md border-[1px] border-white py-1 px-2 max-[800px]:text-sm">
              Github
            </button>
          </motion.a>
        </section>
      </section>
    </section>
  );
}
