import React from "react";
import { motion } from "framer-motion";
import { componentVarient } from "./varients/varients";

const blogsData = [
  {
    title: 'When does a function returns "undefined"?',
    description:
      "Functions are a huge part of almost every programming language. They are used to perform a specific task or calculation and return the value. Functions help in simplifying and organizing the code by breaking down the complex tasks into smaller, reusable units.",
    url: "https://shraddha-v.hashnode.dev/when-does-a-function-returns-undefined",
  },
  {
    title: "Primitive vs Reference Values in JavaScript",
    description:
      "If you are familiar with JavaScript, You might know that JavaScript has these data types - Boolean, Null, Undefined, Number, BigInt, String, Symbol, and object. While this is true, JavaScript has mainly two types of values: Primitive values and Reference values",
    url: "https://shraddha-v.hashnode.dev/primitive-vs-reference-values-in-javascript",
  },
  {
    title: "A Beginner's Guide to SASS",
    description:
      "SASS is a CSS extension language. It includes functionality that aren't available in standard CSS, making it easier to simplify and maintain your projects' style sheets.",
    url: "https://shraddha-v.hashnode.dev/a-beginners-guide-to-sass",
  },
  {
    title: "What is foobar?",
    description:
      "While asking coding doubts or in a coding tutorial, We often come across the terms foobar, foo and bar. So, what is foobar? how it is used? I did not know. So, I searched it up a bit.",
    url: "https://shraddha-v.hashnode.dev/what-is-foobar",
  },
];

export default function Blogs() {
  return (
    <motion.section className="mx-auto grid h-full w-full place-items-center overflow-y-auto overflow-x-hidden p-4">
      <section className="flex h-[fit-content] flex-wrap items-stretch justify-center gap-4">
        {blogsData.map((bl) => (
          <BlogCard key={bl.title} blog={bl} />
        ))}
      </section>
    </motion.section>
  );
}

function BlogCard({ blog }) {
  return (
    <motion.section
      variants={componentVarient}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="flex h-full w-[250px] flex-col justify-between rounded-md border-[1px] border-black/50 bg-black/90 p-4 text-white max-[600px]:w-[200px]">
        <a href={blog.url} target="_blank">
          <h1 className="mb-4 font-aboreto text-xl line-clamp-2">
            {blog.title}
          </h1>
          <p className="text-justify font-newCycle text-sm line-clamp-3">
            {blog.description}
          </p>
        </a>
      </div>
    </motion.section>
  );
}
