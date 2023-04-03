import React from "react";
import logoImageData from "../ImgData";
import { motion } from "framer-motion";
import { componentVarient } from "./varients/varients";

export default function Skills() {
  return (
    <motion.section className="relative m-8 mx-auto grid h-full w-full items-start justify-center">
      <section className="flex max-w-[600px] flex-wrap items-center justify-center gap-4 p-8">
        {logoImageData.map((logo) => (
          <SkillCard key={logo.title} image={logo} position={``} />
        ))}
      </section>
    </motion.section>
  );
}

function SkillCard({ image, position }) {
  return (
    <motion.img
      variants={componentVarient}
      initial="hidden"
      animate="visible"
      exit="exit"
      src={image.url}
      alt={image.title}
      title={image.title}
      whileHover={{ scale: 1.03 }}
      className={`h-20 w-20 justify-self-center rounded-md border-[1px] border-black/50 bg-black/90 p-4 max-[600px]:h-12 max-[600px]:w-12 max-[600px]:p-2 ${position}`}
    />
  );
}
