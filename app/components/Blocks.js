const blocks = [
  {
    title: "JavaScript / TypeScript",
    desc: "Building dependable frontend and backend logic.",
  },
  {
    title: "React + Next.js",
    desc: "Component-first web experiences with good performance.",
  },
  {
    title: "Tailwind CSS",
    desc: "Fast UI development with reusable utility patterns.",
  },
  {
    title: "Node.js APIs",
    desc: "Practical backend endpoints and integration workflows.",
  },
  {
    title: "SQL & Data Handling",
    desc: "Query design and structured data management.",
  },
  {
    title: "Operations Leadership",
    desc: "Documentation, process control, and team coaching.",
  },
];

const Blocks = () => {
  return (
    <section id="Blocks" className="px-6 py-20 sm:px-10">
      <div className="mx-auto w-full max-w-6xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
            Core Strengths
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Skills I use to deliver results.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {blocks.map((block) => (
            <div
              key={block.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-cyan-200 hover:bg-cyan-50/60"
            >
              <h3 className="text-lg font-semibold text-slate-900">{block.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{block.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blocks;
