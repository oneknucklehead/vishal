import { motion } from "framer-motion";
import { Reveal } from "../components/Reveal";
import { Eyebrow } from "../components/Eyebrow";

const VALUES = [
  {
    n: "01",
    title: "Intellectual Rigour",
    body: "We question assumptions and seek truth through data and evidence — not intuition alone.",
  },
  {
    n: "02",
    title: "Collaborative Spirit",
    body: "Complex problems dissolve at the intersection of diverse expertise and open dialogue.",
  },
  {
    n: "03",
    title: "Long-Term Thinking",
    body: "Our strategies, partnerships, and people are built with decades in mind — not quarters.",
  },
  {
    n: "04",
    title: "Ethical Integrity",
    body: "Transparency and fairness are non-negotiable — every trade, every decision, every day.",
  },
  {
    n: "05",
    title: "Innovation Culture",
    body: "We give people the freedom and tools to pursue ideas that don't yet have a roadmap.",
  },
  {
    n: "06",
    title: "Craft & Excellence",
    body: "Whether writing code or building models, every output is held to the highest standard.",
  },
];

const MILESTONES = [
  {
    year: "1988",
    text: "Founded in New York by David E. Shaw, applying computational science to global financial markets.",
  },
  {
    year: "1995",
    text: "Pioneered systematic and algorithmic trading strategies well ahead of the broader industry.",
  },
  {
    year: "2006",
    text: "India operations established — a global hub for quantitative research and technology.",
  },
  {
    year: "2016",
    text: "Next-generation infrastructure launched, supporting strategies across all major asset classes.",
  },
  {
    year: "2024",
    text: "Over 2,000 professionals across six continents, managing assets exceeding ₹2 trillion.",
  },
];

export function About() {
  return (
    <div className="bg-white">
      {/* ── Header ── */}
      <section
        id="about-header"
        className="bg-stone-50 border-b border-stone-200"
      >
        <div className="px-6 sm:px-10 lg:px-16 pt-16 pb-14 max-w-7xl">
          <Reveal>
            <Eyebrow>Who We Are</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-baskerville text-[clamp(30px,4.5vw,60px)] font-normal text-stone-800 leading-[1.12] mt-4 tracking-tight max-w-xl">
              Three decades of systematic excellence.
            </h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="text-[clamp(14px,1.5vw,15px)] leading-loose text-stone-400 max-w-md mt-5 font-light">
              D.S. Capital applies the scientific method to the world's most
              complex financial markets — with rigour, humility, and relentless
              curiosity.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Mission ── */}
      <section
        id="about-mission"
        className="max-w-3xl border-b border-stone-200"
      >
        <div className="px-6 sm:px-10 lg:px-16 py-14 grid grid-cols-1 md:grid-cols-[140px_1fr] gap-8 md:gap-14 items-start">
          <Reveal>
            <Eyebrow>Our Mission</Eyebrow>
            <div className="w-6 h-px bg-stone-800 mt-3.5" />
          </Reveal>
          <Reveal delay={0.1}>
            <blockquote className="font-baskerville text-[clamp(15px,1.8vw,24px)] font-normal italic text-stone-800 leading-relaxed">
              "To apply the scientific method to financial markets — rigorously,
              humbly, and without compromise — in the pursuit of exceptional
              outcomes."
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ── Values ── */}
      <section
        id="about-values"
        className="max-w-3xl border-b border-stone-200"
      >
        <div className="px-6 sm:px-10 lg:px-16 py-14">
          <Reveal>
            <Eyebrow>Core Principles</Eyebrow>
            <h2 className="font-baskerville text-[clamp(24px,2.5vw,32px)] font-normal text-stone-800 mt-3">
              What We Stand For
            </h2>
          </Reveal>
          <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-stone-200 divide-x divide-y divide-stone-200">
            {VALUES.map((v, i) => (
              <Reveal key={v.n} delay={i * 0.06}>
                <motion.div
                  whileHover={{ backgroundColor: "#f5f5f4" }}
                  transition={{ duration: 0.2 }}
                  className="p-7 bg-white"
                >
                  <Eyebrow>{v.n}</Eyebrow>
                  <h3 className="font-baskerville text-[17px] font-normal text-stone-800 mt-3 mb-2.5">
                    {v.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-stone-400 font-light">
                    {v.body}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Milestones ── */}
      <section id="about-milestones" className="max-w-3xl">
        <div className="px-6 sm:px-10 lg:px-16 py-14">
          <Reveal>
            <Eyebrow>Our History</Eyebrow>
            <h2 className="font-baskerville text-[clamp(24px,2.5vw,32px)] font-normal text-stone-800 mt-3">
              Milestones
            </h2>
          </Reveal>
          <div className="mt-10 relative">
            <div className="absolute left-[68px] top-0 bottom-0 w-px bg-stone-200" />
            {MILESTONES.map((m, i) => (
              <Reveal key={m.year} delay={i * 0.08} y={16}>
                <div className="flex mb-8">
                  <div className="w-[68px] shrink-0 font-baskerville text-sm text-stone-400 pt-0.5">
                    {m.year}
                  </div>
                  <div className="pl-8 relative">
                    <div className="absolute -left-[4.5px] top-[7px] w-2 h-2 rounded-full bg-white border-[1.5px] border-stone-800" />
                    <p className="text-sm leading-relaxed text-stone-500 font-light">
                      {m.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
