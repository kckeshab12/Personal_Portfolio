import Image from "next/image";

const stories = [
  {
    id: 1,
    title: "How My Tech Journey Started",
    author: "Keshab",
    date: "2025-07-01",
    excerpt:
      "My interest in technology started with building a simple school website, which became the start of a long-term focus on practical software development.",
    imageUrl: "/images/journey.jpeg",
  },
  {
    id: 2,
    title: "From Networking Support to Team Training",
    author: "Keshab",
    date: "2025-07-15",
    excerpt:
      "Working in ISP support sharpened my troubleshooting and communication skills, eventually leading to a training supervisor role.",
    imageUrl: "/images/networking.jpg",
  },
  {
    id: 3,
    title: "Why Continuous Learning Matters",
    author: "Keshab",
    date: "2025-08-01",
    excerpt:
      "Technology changes quickly. Staying current through projects and study helps me design better systems and solve harder problems over time.",
    imageUrl: "/images/knowledge.jpeg",
  },
];

const Stories = () => {
  return (
    <section id="stories" className="px-6 py-20 sm:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
            Stories
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Notes from my learning and work experience.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stories.map(({ id, title, author, date, excerpt, imageUrl }) => (
            <article
              key={id}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <Image
                src={imageUrl}
                alt={title}
                width={600}
                height={320}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                  <span>By {author}</span>
                  <time dateTime={date}>
                    {new Date(date).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stories;
