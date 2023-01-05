import React from "react";
import { useTheme } from "../App";

export default function Connect() {
  const modeToggled = useTheme();

  return (
    <section id="connect" className="mt-8 flex flex-col items-center">
      <h1 className="mb-4 flex cursor-default justify-center gap-2 text-[48px]">
        <span className="duration-75 hover:scale-125">C</span>
        <span className="duration-75 hover:scale-125">O</span>
        <span className="duration-75 hover:scale-125">N</span>
        <span className="duration-75 hover:scale-125">N</span>
        <span className="duration-75 hover:scale-125">E</span>
        <span className="duration-75 hover:scale-125">C</span>
        <span className="duration-75 hover:scale-125">T</span>
      </h1>{" "}
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
            className={`w-[350px] rounded-md bg-blueGrotto/50 py-2 px-4 text-sm ${
              modeToggled
                ? "text-gray-300"
                : "text-gray-700 placeholder:text-gray-600"
            } focus:outline-none`}
          />
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            className={`w-[350px] rounded-md bg-blueGrotto/50 py-2 px-4 text-sm ${
              modeToggled
                ? "text-gray-300"
                : "text-gray-700 placeholder:text-gray-600"
            } focus:outline-none`}
          />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="5"
            placeholder="any message or suggestion for me?"
            className={`w-[350px] rounded-md bg-blueGrotto/50 py-2 px-4 text-sm ${
              modeToggled
                ? "text-gray-300"
                : "text-gray-700 placeholder:text-gray-600"
            } focus:outline-none`}
          ></textarea>
        </section>
        <button
          type="submit"
          className="m-2 w-full rounded-md bg-gradient-to-bl from-blueGrotto to-blueGreen py-2 px-4 text-sm font-semibold uppercase text-navyBlue hover:shadow-sm hover:shadow-blueGreen"
        >
          connect
        </button>
      </form>
      <small className="mt-8 w-full border-t border-blueGrotto py-2 text-center">
        ©️2023
      </small>
    </section>
  );
}
