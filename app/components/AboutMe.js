"use client";

import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <motion.section
      id="AboutMe"
      className="px-6 py-20 sm:px-10"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto grid w-full max-w-6xl gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[1.15fr_0.85fr] lg:p-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
            About Me
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Blending technical execution with operational excellence.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-700 sm:text-lg">
            I am a results-driven professional with 4+ years of experience in
            the Technical Trainer and Operational Supervisor field. I am
            currently working as a Training and Development Officer, focused on
            team capability growth, service quality, and operational standards.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
            Alongside my technical and leadership work, I also serve as the
            Director of V.K. Global Services. My approach combines practical
            execution, clear documentation, and consistent delivery.
          </p>
        </div>

        <div className="rounded-2xl bg-slate-900 p-6 text-slate-100">
          <h3 className="text-xl font-bold">Quick Snapshot</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-200">
            <li>Team supervision and service quality management</li>
            <li>Web and app development using React + Next.js</li>
            <li>Network troubleshooting and technical training</li>
            <li>Documentation and process improvement mindset</li>
            <li>Director of V.K. Global Services</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
