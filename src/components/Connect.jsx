import React from "react";
import { motion } from "framer-motion";
import { componentVarient } from "./varients/varients";

export default function Connect() {
  const inputStyle =
    "w-[350px] rounded-md bg-black/90 text-white py-2 px-4 text-sm focus:outline-none max-[500px]:w-[220px] ";

  return (
    <motion.section
      variants={componentVarient}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="mx-auto flex h-[65vh] w-[65vw] flex-col items-center justify-center font-newCycle"
    >
      <form
        name="contact"
        method="POST"
        action="/contact"
        className="flex flex-col items-center justify-center gap-2"
      >
        <section className="flex flex-col gap-2">
          <input type="hidden" name="form-name" value="contact" />
          <input
            type="text"
            placeholder="Name"
            name="name"
            className={`${inputStyle}`}
          />
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            className={`${inputStyle}`}
          />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="5"
            placeholder="any message or suggestion for me?"
            className={`${inputStyle}`}
          ></textarea>
        </section>
        <motion.button
          type="submit"
          className="m-2 w-full rounded-md bg-black/90 py-2 px-4 font-aboreto text-sm font-semibold text-white hover:shadow-sm"
          whileHover={{ scale: 1.05 }}
        >
          connect
        </motion.button>
      </form>
    </motion.section>
  );
}
