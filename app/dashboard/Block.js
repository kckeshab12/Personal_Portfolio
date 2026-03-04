"use client";

import React, { useState } from "react";
import {
  Code,
  Cpu,
  BarChart,
  Globe,
  Database,
  Smartphone,
  Network,
  FolderKanban,
  Users,
  BookOpen,
  Server,
} from "lucide-react";

const techBlocks = [
  {
    icon: <BookOpen className="w-8 h-8 text-blue-500" />,
    title: "Data Structures & Algorithms",
    description:
      "Solid understanding of DSA concepts, enabling the design of optimized and efficient solutions for complex computational problems.",
  },
  {
    icon: <Cpu className="w-8 h-8 text-green-500" />,
    title: "Digital Logic & Microprocessor",
    description:
      "Hands-on knowledge of digital circuit design and microprocessor architecture, focusing on hardware-software integration.",
  },
  {
    icon: <BarChart className="w-8 h-8 text-purple-500" />,
    title: "Probability & Statistics",
    description:
      "Practical application of probability and statistical methods for data analysis, forecasting, and decision-making.",
  },
  {
    icon: <Code className="w-8 h-8 text-orange-500" />,
    title: "Java Programming",
    description:
      "Strong foundation in Java for building desktop, web, and network-based applications with object-oriented design principles.",
  },
  {
    icon: <Globe className="w-8 h-8 text-teal-500" />,
    title: "Web Technology",
    description:
      "Proficient in front-end and back-end web development, delivering responsive, user-friendly, and scalable web solutions.",
  },
  {
    icon: <Database className="w-8 h-8 text-yellow-500" />,
    title: "Database Management (MySQL)",
    description:
      "Skilled in designing, querying, and optimizing relational databases using MySQL for robust data management.",
  },
  {
    icon: <Smartphone className="w-8 h-8 text-pink-500" />,
    title: "Mobile Programming (Android - Java)",
    description:
      "Capable of building Android applications in Java, integrating location services, APIs, and modern UI/UX design.",
  },
  {
    icon: <Network className="w-8 h-8 text-indigo-500" />,
    title: "Networking & Network Programming",
    description:
      "Experience in Java-based network programming, troubleshooting, and managing network infrastructure.",
  },
  {
    icon: <FolderKanban className="w-8 h-8 text-rose-500" />,
    title: "Project Management",
    description:
      "Ability to plan, execute, and monitor projects effectively while ensuring timely delivery and quality outcomes.",
  },
  {
    icon: <Users className="w-8 h-8 text-cyan-500" />,
    title: "Team Supervision & Operations",
    description:
      "Experienced in supervising teams and streamlining operational workflows to improve productivity and performance.",
  },
  {
    icon: <Server className="w-8 h-8 text-lime-500" />,
    title: "Technical Training (ISP)",
    description:
      "Providing training and technical guidance in Internet Service Provider (ISP) operations, tools, and troubleshooting.",
  },
];

export default function Block() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Technical Strengths
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {techBlocks.map((block, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`bg-white rounded-2xl shadow-md p-6 transition-all duration-300 cursor-pointer ${
                hoveredIndex === index
                  ? "scale-105 shadow-2xl z-10"
                  : hoveredIndex !== null
                  ? "blur-[2px] opacity-70"
                  : ""
              }`}
            >
              <div className="flex items-center mb-4">{block.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{block.title}</h3>
              <p className="text-gray-600 text-sm">{block.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
