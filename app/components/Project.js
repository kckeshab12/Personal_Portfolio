"use client";

import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "ElectroMart",
    description:
      "An ecommerce platform for electronic gadgets with separate admin and user workflows.",
    stack: "Next.js, API routes, payments",
    link: "https://github.com/kckeshab12/electromart",
  },
  {
    title: "ServX",
    description:
      "A home-service booking experience with location-based discovery and route-driven matching.",
    stack: "React, Maps integration, UX flows",
    link: "https://github.com/kckeshab12",
  },
  {
    title: "Personal Portfolio",
    description:
      "A personal web experience focused on storytelling, projects, and practical skills.",
    stack: "Next.js, Tailwind CSS, Framer Motion",
    link: "https://github.com/kckeshab12/Personal_Portfolio",
  },
];

export default function Project() {
  return (
    <section className="px-6 py-20 sm:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
            Featured Projects
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Built for real-world utility and smooth user experience.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {project.description}
              </p>
              <p className="mt-4 text-sm font-medium text-cyan-700">{project.stack}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition group-hover:text-cyan-700"
              >
                View Project
                <ArrowUpRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
