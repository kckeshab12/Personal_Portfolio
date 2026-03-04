"use client";

import React from "react";

const Resume = () => {
  return (
    <section className="bg-gray-50 px-6 py-16 md:px-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-4 text-4xl font-bold text-gray-800">My Profile</h2>
        <p className="mb-8 text-gray-600">
          Hello! I am Keshab, a dedicated IT professional with experience in
          technical training, operational supervision, and modern web systems.
          Here is a brief overview of my skills, experience, and achievements.
        </p>

        <div className="rounded-xl border-t-4 border-blue-500 bg-white p-8 text-left shadow-lg">
          <h3 className="mb-2 text-2xl font-semibold">Keshab KC</h3>
          <p className="mb-4 text-gray-700">
            Training and Development Officer | Technical Trainer | Operational
            Supervisor | Director, V.K. Global Services
          </p>
          <p className="text-gray-600">
            I specialize in process-driven team development, service quality
            improvement, and scalable digital solutions with clean,
            maintainable implementation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Resume;
