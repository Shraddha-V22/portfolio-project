import React from "react";
import logoImageData from "../ImgData";
import { Parallax } from "react-scroll-parallax";
import { useTheme } from "../App";

export default function Skills() {
  return (
    <section className="m-8 scroll-mt-12 px-4 sm:h-auto" id="skills">
      <h1 className="mb-4 flex cursor-default justify-center gap-2 text-[48px]">
        <span className="duration-75 hover:scale-125">S</span>
        <span className="duration-75 hover:scale-125">K</span>
        <span className="duration-75 hover:scale-125">I</span>
        <span className="duration-75 hover:scale-125">L</span>
        <span className="duration-75 hover:scale-125">L</span>
        <span className="duration-75 hover:scale-125">S</span>
      </h1>{" "}
      <section className="mx-auto mt-8 grid grid-cols-autoFill-100 place-items-center content-center justify-items-center gap-8 sm:h-auto sm:w-[90vw] lg:h-[350px] lg:w-[60vw]">
        {logoImageData.map((logo) => (
          <SkillCard key={logo.title} image={logo} />
        ))}
      </section>
    </section>
  );
}

function SkillCard({ image }) {
  const modeToggled = useTheme();

  return (
    <Parallax speed={5} scale={[0.8, 1.2, "easeIn"]}>
      <img
        src={image.url}
        alt={image.title}
        title={image.title}
        className={`h-20 w-20 rounded-md bg-babyBlue p-4 shadow-spread`}
      />
    </Parallax>
  );
}
