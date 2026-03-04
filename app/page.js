import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import Blocks from "./components/Blocks";
import Stories from "./components/Stories";
import Contact from "./components/ContactForm";
import Footer from "./components/Footer";
import Image from "next/image";
import { ArrowUpRight, FolderKanban, BookOpenText, BlocksIcon, FileText } from "lucide-react";

const heroImages = ["/pic44.jpg", "/pic37.jpg", "/pic43.jpg", "/pic27.jpg"];

export default function Home() {
  return (
    <>
      <div className="fixed top-0 left-0 z-50 w-full">
        <NavBar />
      </div>

      <main id="top">
        <section className="relative min-h-[92vh] overflow-hidden px-6 pt-32 pb-14 sm:px-10">
          <div className="absolute inset-0">
            {heroImages.map((src, index) => (
              <div
                key={src}
                className="hero-photo-layer"
                style={{ animationDelay: `${index * 6}s` }}
              >
                <Image
                  src={src}
                  alt={`Hero background ${index + 1}`}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-slate-950/55" />
          <div className="hero-grid absolute inset-0 opacity-70" />

          <div className="relative mx-auto flex h-full w-full max-w-6xl items-center">
            <div className="hero-glass w-full rounded-3xl p-6 sm:p-10">
              <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="space-y-6 text-white">
                  <p className="inline-flex rounded-full border border-cyan-200/50 bg-cyan-300/15 px-4 py-1 text-sm font-medium text-cyan-100">
                    Technical Leadership + Operations Excellence
                  </p>
                  <h1 className="hero-quote text-4xl font-black tracking-tight sm:text-6xl">
                    &quot;Discipline turns vision into results,
                    <br />
                    and learning keeps that vision alive.&quot;
                  </h1>
                  <p className="max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
                    4+ years of experience in Technical Trainer and Operational
                    Supervisor roles, currently working as a Training and
                    Development Officer and serving as Director of V.K. Global
                    Services.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="#Project"
                      className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
                    >
                      View Projects
                    </a>
                    <a
                      href="#learn-more"
                      className="rounded-full border border-white/50 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                    >
                      Learn More
                    </a>
                    <a
                      href="#contact"
                      className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                    >
                      Contact Me
                    </a>
                  </div>
                </div>

                <div className="hero-float rounded-2xl border border-white/25 bg-white/10 p-6 backdrop-blur-md">
                  <div className="flex items-center gap-4">
                    <Image
                      src="/pic44.jpg"
                      alt="Keshab portrait"
                      width={84}
                      height={84}
                      className="h-20 w-20 rounded-2xl object-cover"
                    />
                    <div className="text-white">
                      <p className="text-xs uppercase tracking-wider text-cyan-200">
                        Profile Highlight
                      </p>
                      <p className="text-lg font-bold">Keshab KC</p>
                      <p className="text-sm text-slate-200">
                        Training and Development Officer
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white">
                      <p className="text-[11px] uppercase tracking-wider text-cyan-200">
                        Experience
                      </p>
                      <p className="mt-1 text-sm font-semibold">4+ Years</p>
                    </div>
                    <div className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white">
                      <p className="text-[11px] uppercase tracking-wider text-cyan-200">
                        Position
                      </p>
                      <p className="mt-1 text-sm font-semibold">Operational Supervisor</p>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-3 text-sm text-white/95">
                    <div className="rounded-xl border border-white/20 bg-white/10 px-3 py-2">
                      4+ years in technical training and operations supervision
                    </div>
                    <div className="rounded-xl border border-white/20 bg-white/10 px-3 py-2">
                      Director of V.K. Global Services
                    </div>
                    <div className="rounded-xl border border-white/20 bg-white/10 px-3 py-2">
                      Strong focus on team capability and process quality
                    </div>
                  </div>

                  <div className="mt-5 rounded-xl border border-cyan-200/30 bg-cyan-300/10 px-3 py-3 text-sm text-cyan-100">
                    &quot;Lead with clarity, train with intention, and deliver with
                    consistency.&quot;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20 sm:px-10">
          <div className="mx-auto grid w-full max-w-6xl gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-3 sm:p-8">
            {[
              { title: "5+ Years", desc: "Operations and customer support leadership" },
              { title: "20+ Projects", desc: "Web and workflow-oriented products built" },
              { title: "Cross-functional", desc: "Engineering, documentation, and training" },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-slate-50 p-5">
                <h2 className="text-2xl font-bold text-slate-900">{item.title}</h2>
                <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="learn-more" className="px-6 pb-20 sm:px-10">
          <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-cyan-100 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-amber-100 blur-3xl" />

            <div className="relative mb-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
                Dashboard Access
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Explore extended portfolio modules in one place.
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
                Open dedicated dashboard sections for deeper project details,
                interactive stories, technical capabilities, and resume highlights.
              </p>
            </div>

            <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Dashboard Projects",
                  desc: "Detailed project cards and expanded descriptions.",
                  href: "/dashboard#projects",
                  icon: <FolderKanban size={18} />,
                  accent: "from-cyan-500 to-blue-500",
                },
                {
                  title: "Journey Stories",
                  desc: "Story gallery and milestone highlights.",
                  href: "/dashboard#stories",
                  icon: <BookOpenText size={18} />,
                  accent: "from-emerald-500 to-teal-500",
                },
                {
                  title: "Technical Blocks",
                  desc: "Core technical strengths and experience areas.",
                  href: "/dashboard#blocks",
                  icon: <BlocksIcon size={18} />,
                  accent: "from-amber-500 to-orange-500",
                },
                {
                  title: "Profile Section",
                  desc: "Professional summary and career overview.",
                  href: "/dashboard#resume",
                  icon: <FileText size={18} />,
                  accent: "from-violet-500 to-fuchsia-500",
                },
              ].map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"
                >
                  <div className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${item.accent} px-3 py-1 text-xs font-semibold text-white`}>
                    {item.icon}
                    Section
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 transition group-hover:gap-3">
                    Open Section
                    <ArrowUpRight size={16} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="AboutMe">
          <AboutMe />
        </section>

        <section id="Project">
          <Project />
        </section>

        <section id="Blocks">
          <Blocks />
        </section>

        <section id="stories">
          <Stories />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <section id="footer">
          <Footer />
        </section>
      </main>
    </>
  );
}
