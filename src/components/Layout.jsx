import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { AnimatePresence } from "framer-motion";
import Socials from "./Socials";

export default function Layout() {
  return (
    <AnimatePresence>
      <div
        className={`grid h-screen w-screen overflow-hidden bg-[url('https://img.freepik.com/free-photo/starry-night-sky_1048-11828.jpg')] text-black`}
      >
        <Header />
        <section className="mx-auto h-[70vh] w-[80vw] rounded-md bg-white bg-[url('https://github.com/Shraddha-V22/images-for-projects/blob/main/bnw-bg.png?raw=true')] bg-cover shadow-spread">
          <Outlet />
        </section>
        <Socials />
      </div>
    </AnimatePresence>
  );
}
