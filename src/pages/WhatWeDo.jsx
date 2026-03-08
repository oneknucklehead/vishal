import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { Eyebrow } from "../components/Eyebrow";

// ─── Data ─────────────────────────────────────────────────────────────────────

const DISCIPLINES = [
  {
    id: "whatwedo-investment",
    num: "01",
    title: "Investment Management",
    eyebrow: "What We Do",
    summary:
      "Systematic, data-driven strategies across equities, fixed income, commodities, and currencies — applied at global scale.",
    body: [
      "Our investment management practice is built on decades of quantitative research and the relentless pursuit of alpha through rigorous model-building. We do not rely on intuition or conventional wisdom — every position is rooted in evidence.",
      "We deploy capital across liquid markets worldwide, using proprietary signals derived from vast datasets and advanced statistical techniques. Our teams continuously research, develop, and refine strategies that adapt to evolving market conditions.",
    ],
    stats: [
      { n: "₹2T+", l: "Assets Under Management" },
      { n: "30+", l: "Years of Track Record" },
      { n: "6", l: "Continents" },
    ],
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80",
  },
  {
    id: "whatwedo-technology",
    num: "02",
    title: "Technology & Engineering",
    eyebrow: "What We Do",
    summary:
      "High-performance systems and infrastructure purpose-built for the most computationally demanding workloads in quantitative finance.",
    body: [
      "Technology is not a support function at D.S. Capital — it is the foundation on which every strategy is built. Our engineers work at the frontier of distributed systems, low-latency networking, and large-scale data pipelines.",
      "From real-time market data ingestion to backtesting frameworks that replay years of market history in minutes, we build tools that give our researchers an unfair advantage. Engineers here are researchers, and researchers are engineers.",
    ],
    stats: [
      { n: "500+", l: "Engineers Globally" },
      { n: "<1ms", l: "Execution Latency" },
      { n: "PB", l: "Data Processed Daily" },
    ],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
  },
  {
    id: "whatwedo-research",
    num: "03",
    title: "Financial Research",
    eyebrow: "What We Do",
    summary:
      "Deep quantitative research that drives every investment decision — from signal discovery to portfolio construction and risk management.",
    body: [
      "Our research teams include mathematicians, physicists, statisticians, and computer scientists who apply the scientific method to financial markets. They work across short-term and long-term horizons, across asset classes, and across geographies.",
      "Research at D.S. Capital is collaborative and open-ended. We invest heavily in infrastructure that lets researchers iterate quickly, test ideas rigorously, and move from hypothesis to live strategy with confidence.",
    ],
    stats: [
      { n: "400+", l: "Researchers Worldwide" },
      { n: "100s", l: "Active Strategies" },
      { n: "∞", l: "Questions Worth Asking" },
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
  },
  {
    id: "whatwedo-operations",
    num: "04",
    title: "Financial Operations",
    eyebrow: "What We Do",
    summary:
      "Disciplined operational frameworks ensuring precision, compliance, and resilience across every function of the firm.",
    body: [
      "Great investment performance requires flawless operational execution. Our operations teams build and maintain the systems and processes that ensure every trade settles correctly, every risk limit is observed, and every regulatory obligation is met.",
      "From trade reconciliation to treasury management, compliance monitoring to fund administration — our operations professionals are the backbone of everything we do. They bring the same rigour and intellectual curiosity that defines the rest of the firm.",
    ],
    stats: [
      { n: "99.99%", l: "Operational Uptime" },
      { n: "Zero", l: "Tolerance for Error" },
      { n: "24/7", l: "Global Coverage" },
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
  },
];

// ─── Discipline Section ───────────────────────────────────────────────────────
function DisciplineSection({ d, reverse }) {
  return (
    <section id={d.id} className="border-b border-stone-200">
      <div className="max-w-7xl">
        {/* Image strip — full bleed within the content column */}
        <Reveal y={16}>
          <div className="overflow-hidden" style={{ aspectRatio: "21/7" }}>
            <motion.img
              src={d.image}
              alt={d.title}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>

        {/* Text + stats grid */}
        <div className="px-6 sm:px-10 lg:px-16 py-12 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10 lg:gap-16 items-start">
          {/* Left: text */}
          <div>
            <Reveal>
              <div className="flex items-baseline gap-4 mb-4">
                <Eyebrow>{d.num}</Eyebrow>
                <div className="flex-1 h-px bg-stone-200" />
              </div>
              <h2 className="font-baskerville text-[clamp(24px,3vw,40px)] font-normal text-stone-800 leading-tight tracking-tight">
                {d.title}
              </h2>
              <p className="font-baskerville text-[clamp(15px,1.5vw,18px)] font-normal italic text-stone-500 leading-relaxed mt-4 max-w-2xl">
                {d.summary}
              </p>
            </Reveal>

            <div className="mt-6 space-y-4">
              {d.body.map((para, i) => (
                <Reveal key={i} delay={0.06 * (i + 1)}>
                  <p className="text-[14px] leading-loose text-stone-400 font-light font-jost max-w-2xl">
                    {para}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right: stats */}
          <Reveal delay={0.1}>
            <div className="border border-stone-200 divide-y divide-stone-200">
              {d.stats.map((s) => (
                <div key={s.l} className="px-6 py-5">
                  <div className="font-baskerville text-[clamp(26px,3vw,36px)] font-normal text-stone-800 leading-none">
                    {s.n}
                  </div>
                  <Eyebrow>{s.l}</Eyebrow>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export function WhatWeDo() {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      {/* ── Hero ── */}
      <section
        id="whatwedo-header"
        className="bg-stone-50 border-b border-stone-200"
      >
        <div className="px-6 sm:px-10 lg:px-16 pt-16 pb-14 max-w-7xl">
          <Reveal>
            <Eyebrow>What We Do</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-baskerville text-[clamp(30px,4.5vw,64px)] font-normal text-stone-800 leading-[1.1] mt-4 tracking-tight max-w-4xl">
              Finance and technology,
              <br />
              <em className="italic">inseparably intertwined.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="text-[clamp(14px,1.5vw,16px)] leading-loose text-stone-400 max-w-lg mt-5 font-light font-jost">
              We operate across four interlocking disciplines — each essential,
              each world-class, and each united by the same commitment to rigour
              and intellectual honesty.
            </p>
          </Reveal>

          {/* Quick-jump links */}
          <Reveal delay={0.26}>
            <div className="flex flex-wrap gap-3 mt-10">
              {DISCIPLINES.map((d) => (
                <a
                  key={d.id}
                  href={`#${d.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById(d.id)
                      ?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="font-jost text-[11px] tracking-[0.16em] uppercase font-medium text-stone-500 border border-stone-200 px-5 py-2.5 transition-all duration-200 hover:border-stone-800 hover:text-stone-800 cursor-pointer"
                >
                  {d.title}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Discipline sections ── */}
      {DISCIPLINES.map((d, i) => (
        <DisciplineSection key={d.id} d={d} reverse={i % 2 !== 0} />
      ))}

      {/* ── CTA ── */}
      <section className="bg-stone-800">
        <div className="px-6 sm:px-10 lg:px-16 py-14 max-w-7xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <Reveal>
            <h2 className="font-baskerville text-[clamp(18px,2.2vw,30px)] font-normal text-white">
              Want to build the systems behind the strategies?
            </h2>
            <p className="text-base text-white/40 mt-2 font-light font-jost">
              We're hiring across all disciplines.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <Link
              to={"/careers"}
              className="shrink-0 bg-white text-stone-800 text-[11px] tracking-[0.18em] uppercase font-semibold px-7 py-3 border-none cursor-pointer transition-colors duration-200 hover:bg-stone-100 font-jost"
            >
              Explore Careers
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
