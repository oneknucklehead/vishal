import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "../components/Reveal";
import { Eyebrow } from "../components/Eyebrow";

const CATS = ["All", "Research", "Engineering", "Finance", "Operations"];

const JOBS = [
  {
    id: 1,
    title: "Quantitative Researcher",
    dept: "Research",
    loc: "Hyderabad",
    level: "Senior",
  },
  {
    id: 2,
    title: "Software Engineer — Core Infra",
    dept: "Engineering",
    loc: "Hyderabad",
    level: "Mid",
  },
  {
    id: 3,
    title: "ML Research Engineer",
    dept: "Engineering",
    loc: "Hyderabad",
    level: "Senior",
  },
  {
    id: 4,
    title: "Statistical Modeller",
    dept: "Research",
    loc: "Hyderabad",
    level: "Mid",
  },
  {
    id: 5,
    title: "Systems Architect",
    dept: "Engineering",
    loc: "Hyderabad",
    level: "Senior",
  },
  {
    id: 6,
    title: "Risk Analyst",
    dept: "Finance",
    loc: "Hyderabad",
    level: "Junior",
  },
  {
    id: 7,
    title: "Portfolio Analytics",
    dept: "Finance",
    loc: "Hyderabad",
    level: "Mid",
  },
  {
    id: 8,
    title: "Business Operations Lead",
    dept: "Operations",
    loc: "Hyderabad",
    level: "Senior",
  },
  {
    id: 9,
    title: "Data Infrastructure Engineer",
    dept: "Engineering",
    loc: "Hyderabad",
    level: "Mid",
  },
];

const PERKS = [
  {
    label: "Compensation",
    body: "Top-of-market salary, performance bonus, and meaningful equity.",
  },
  {
    label: "Learning",
    body: "Dedicated budgets, mentorship, and access to world-class researchers.",
  },
  {
    label: "Global Reach",
    body: "Collaborate with elite teams across Hyderabad, New York, and London.",
  },
  {
    label: "Flexibility",
    body: "Hybrid working designed around outcomes — not office hours.",
  },
];

export function Careers() {
  const [cat, setCat] = useState("All");
  const [hover, setHover] = useState(null);

  const filtered = cat === "All" ? JOBS : JOBS.filter((j) => j.dept === cat);

  return (
    <div className="bg-white">
      {/* ── Header ── */}
      <section
        id="careers-header"
        className="bg-stone-50 border-b border-stone-200"
      >
        <div className="px-6 sm:px-10 lg:px-16 pt-16 pb-14 max-w-7xl">
          <Reveal>
            <Eyebrow>How To Join</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-baskerville text-[clamp(30px,4.5vw,60px)] font-normal text-stone-800 leading-[1.12] mt-4 tracking-tight max-w-5xl">
              Work at the edge of what's possible.
            </h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="text-[clamp(14px,1.6vw,16px)] leading-loose text-stone-400 max-w-md mt-5">
              We hire people who are relentlessly curious, technically
              exceptional, and excited to solve problems nobody has solved
              before.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Perks ── */}
      <section id="careers-perks" className="border-b border-stone-200">
        <div className="px-6 sm:px-10 lg:px-16 max-w-3xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {PERKS.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.07}>
              <div
                className={`py-8 ${i > 0 ? "sm:pl-5" : ""} ${i < 3 ? "lg:border-r border-stone-200" : ""}`}
              >
                <Eyebrow>{p.label}</Eyebrow>
                <p className="text-[13px] leading-relaxed text-stone-500 mt-2.5 font-light">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Job listings ── */}
      <section id="careers-positions" className="max-w-3xl">
        <div className="px-6 sm:px-10 lg:px-16 py-12">
          <Reveal>
            <h2 className="font-baskerville text-[clamp(22px,2.5vw,30px)] font-normal text-stone-800">
              Open Positions
            </h2>
          </Reveal>

          {/* Filter tabs */}
          <div className="flex mt-5 border-b border-stone-200 overflow-x-auto">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`shrink-0 px-4 py-2.5 text-[11px] tracking-[0.13em] uppercase border-b-2 -mb-px transition-all duration-200 bg-transparent border-t-0 border-l-0 border-r-0 cursor-pointer font-jost ${
                  cat === c
                    ? "text-stone-800 font-medium border-stone-800"
                    : "text-stone-400 font-light border-transparent hover:text-stone-600"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={cat}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
            >
              {filtered.map((job, i) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onMouseEnter={() => setHover(job.id)}
                  onMouseLeave={() => setHover(null)}
                  className={`flex items-center justify-between -mx-3 px-3 py-5 border-b border-stone-200 cursor-pointer gap-3 transition-colors duration-200 ${
                    hover === job.id ? "bg-stone-50" : "bg-transparent"
                  }`}
                >
                  <div className="min-w-0">
                    <div className="font-baskerville text-[clamp(15px,1.6vw,17px)] font-normal text-stone-800">
                      {job.title}
                    </div>
                    <div className="flex gap-2.5 mt-1 flex-wrap">
                      <span className="text-[11px] text-stone-400 font-jost">
                        {job.dept}
                      </span>
                      <span className="text-stone-300">·</span>
                      <span className="text-[11px] text-stone-400 font-jost">
                        {job.loc}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-[10px] tracking-[0.13em] uppercase text-stone-400 border border-stone-200 px-2 py-0.5 whitespace-nowrap font-jost">
                      {job.level}
                    </span>
                    <motion.span
                      animate={{ x: hover === job.id ? 4 : 0 }}
                      className="text-stone-800 text-sm"
                    >
                      →
                    </motion.span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Speculative application */}
          <Reveal delay={0.1}>
            <div
              id="careers-open"
              className="mt-9 p-6 sm:p-8 bg-stone-50 border border-stone-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
            >
              <div>
                <p className="font-baskerville text-[clamp(15px,1.6vw,18px)] text-stone-800">
                  Don't see your role?
                </p>
                <p className="text-[13px] text-stone-400 mt-1.5 font-light">
                  Send us your résumé and we'll reach out when the right
                  opportunity arises.
                </p>
              </div>
              <button className="shrink-0 bg-stone-800 text-white text-[10px] tracking-[0.17em] uppercase font-medium px-6 py-2.5 border-none cursor-pointer transition-colors duration-200 hover:bg-stone-900 font-jost">
                Speculative Application
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
