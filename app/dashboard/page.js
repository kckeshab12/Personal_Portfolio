"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import Block from "./Block";
import Stories from "./Stories";
import Resume from "./Resume";
import Image from "next/image";

export default function Dashboard() {
  const [expanded, setExpanded] = useState({});
  const [highlightedCard, setHighlightedCard] = useState(null);

  const toggleExpand = (id) => {
    setExpanded((prev) => {
      const isExpanding = !prev[id];
      setHighlightedCard(isExpanding ? id : null);
      return { [id]: isExpanding };
    });
  };

  const projects = [
    {
      id: "electromart",
      title: "ElectroMart",
      category: "Ecommerce",
      short: "An ecommerce web app for shopping electronic gadgets online.",
      full: "ElectroMart provides separate user and admin workflows for device listings, management, and practical checkout options.",
      stack: "Next.js, Payments, Admin Panel",
      link: "https://github.com/kckeshab12/electromart",
    },
    {
      id: "servx",
      title: "ServX",
      category: "Service Booking",
      short: "A home service booking app with map integration.",
      full: "ServX helps customers find skilled workers with location-aware service discovery and booking flows.",
      stack: "React, Maps API, Location Logic",
      link: "https://github.com/kckeshab12",
    },
    {
      id: "service-portal",
      title: "Service Portal",
      category: "Ecosystem Platform",
      short:
        "A complete ecosystem for job placement, training services, and digital services with role-based access levels.",
      full:
        "Service Portal integrates job placement workflows, training service modules, and additional digital services in one platform, with different access levels for admins, partners, trainers, and users.",
      stack: "Role-Based Access, Workflow Modules, Service Platform",
      link: "https://github.com/kckeshab12",
    },
    {
      id: "portfolio",
      title: "Personal Portfolio",
      category: "Personal Brand",
      short: "A portfolio site focused on projects and storytelling.",
      full: "This project showcases technical experience, practical UI work, and professional highlights in a modern layout.",
      stack: "Next.js, Tailwind CSS, Framer Motion",
      link: "https://github.com/kckeshab12/Personal_Portfolio",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-amber-50">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 px-8 py-4 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full"
            />
            <h1 className="text-2xl font-extrabold text-slate-900">Dashboard</h1>
          </div>
          <nav className="hidden gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#projects" className="hover:text-cyan-700">
              Projects
            </a>
            <a href="#stories" className="hover:text-cyan-700">
              Stories
            </a>
            <a href="#blocks" className="hover:text-cyan-700">
              Blocks
            </a>
            <a href="#resume" className="hover:text-cyan-700">
              CV
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 py-10">
        <div className="mb-8 rounded-2xl bg-slate-900 p-6 text-center text-white">
          <h2 className="text-3xl font-bold">Welcome to the Project Dashboard</h2>
          <p className="mt-2 text-slate-200">
            Explore detailed project highlights, technical stories, and resume.
          </p>
        </div>

        <section id="projects" className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur-md sm:p-8">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-cyan-700">
                Portfolio Highlights
              </p>
              <h3 className="mt-1 text-2xl font-bold text-slate-900">
                Featured Projects
              </h3>
            </div>
            <p className="rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-xs font-medium text-slate-600">
              {projects.length} Active Projects
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border bg-white p-6 shadow-sm transition duration-300 ${
                  highlightedCard === project.id
                    ? "scale-[1.02] border-cyan-300 ring-2 ring-cyan-300"
                    : "border-slate-200 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl"
                }`}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500" />
                <p className="mb-3 inline-flex w-fit rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-cyan-700">
                  {project.category}
                </p>
                <h4 className="mb-2 text-xl font-semibold text-slate-800">
                  {project.title}
                </h4>
                <p className="mb-3 text-slate-600">
                  {expanded[project.id] ? project.full : project.short}
                </p>
                <p className="mb-4 text-xs font-medium text-indigo-700">
                  {project.stack}
                </p>
                <div className="mt-auto">
                  <button
                    onClick={() => toggleExpand(project.id)}
                    className="text-sm font-semibold text-cyan-700 transition hover:text-cyan-900"
                  >
                    {expanded[project.id] ? "Show Less" : "Show More"}
                  </button>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 inline-flex items-center text-sm font-semibold text-cyan-700 transition group-hover:gap-2 hover:text-cyan-900"
                  >
                    View Repo
                    <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <section id="stories">
        <Stories />
      </section>
      <section id="blocks">
        <Block />
      </section>
      <section id="resume">
        <Resume />
      </section>

      <footer className="py-4 text-center text-slate-600">
        {new Date().getFullYear()} Keshab Dashboard. All rights reserved.
      </footer>
    </div>
  );
}
