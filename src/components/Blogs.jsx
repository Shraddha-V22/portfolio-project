import React from "react";

const blogsData = [
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
    <section
      id="blogs"
      className="scroll-mt-12 px-4 py-8 sm:h-auto lg:h-[60vh]"
    >
      <h1 className="mb-4 flex cursor-default justify-center gap-2 text-[48px]">
        <span className="duration-75 hover:scale-125">B</span>
        <span className="duration-75 hover:scale-125">L</span>
        <span className="duration-75 hover:scale-125">O</span>
        <span className="duration-75 hover:scale-125">G</span>
        <span className="duration-75 hover:scale-125">S</span>
      </h1>{" "}
      <section className="mx-auto mt-8 grid grid-cols-autoFill-250 gap-4 sm:w-[90vw] lg:w-[800px]">
        {blogsData.map((bl) => (
          <BlogCard key={bl.title} blog={bl} />
        ))}
      </section>
    </section>
  );
}

function BlogCard({ blog }) {
  return (
    <a
      href={blog.url}
      target="_blank"
      className="rounded-md bg-babyBlue p-4 text-navyBlue shadow-lg hover:bg-gradient-to-b hover:from-babyBlue hover:to-blueGreen hover:shadow-spread"
    >
      <h1 className="mb-4 text-xl">{blog.title}</h1>
      <p className="text-justify text-sm line-clamp-3">{blog.description}</p>
    </a>
  );
}
