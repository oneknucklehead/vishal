import { Reveal } from "../components/Reveal";
import { Eyebrow } from "../components/Eyebrow";
import { Link } from "react-router-dom";

const CORE_VALUES = [
  {
    num: "01",
    title: "Dynamic & Innovative",
    body: "We are constantly reinventing for the future — for our clients, employees and community. As industries evolve, so do the requirements of our clients. We curate solutions that go above and beyond your expectations to ensure sustainable, innovative growth for the future.",
  },
  {
    num: "02",
    title: "Ethical & Trusted",
    body: "We leave no room for error as we value the trust you place in us. We have safeguarded the trust of our clients, regulators, and the public with integrity for over 71 years, and will continue to do so until the foreseeable future.",
  },
  {
    num: "03",
    title: "Client-Centric & Value Focused",
    body: "We position ourselves as your business partners to curate solutions that ensure your sustainable growth. We approach our work with a collaborative mindset, teaming across businesses, geographies, and skill sets to deliver tangible, measurable, attributable impact.",
  },
];

const WHY_US = [
  {
    label: "Experience",
    body: "We are a full service organisation backed by over 71 years of experience.",
  },
  {
    label: "Tailor-Made",
    body: "Our solutions are not a 'one size fits all'. We specialise in personalised solutions. You grow, we grow.",
  },
  {
    label: "Growth",
    body: "We aspire to provide services that go beyond the international benchmark.",
  },
  {
    label: "Collaboration",
    body: "We work with you to create a support system that works for you and your goals.",
  },
];

export function HomeMissionSection() {
  return (
    <>
      {/* ── Core Values ── */}
      <section id="home-values" className="border-b border-stone-200">
        <div className="max-w-7xl">
          <div className="px-6 sm:px-10 lg:px-16 py-14 grid grid-cols-1 md:grid-cols-[140px_1fr] gap-10 md:gap-16 items-start">
            {/* Left label */}
            <Reveal>
              <Eyebrow>Our Core Values</Eyebrow>
              <div className="w-7 h-px bg-stone-800 mt-4" />
            </Reveal>

            {/* Right: value rows */}
            <div>
              {CORE_VALUES.map((v, i) => (
                <Reveal key={v.num} delay={i * 0.08}>
                  <div
                    className={`grid grid-cols-1  gap-3 sm:gap-6 py-7 items-start ${
                      i > 0 ? "border-t border-stone-200" : ""
                    }`}
                  >
                    <Eyebrow>{v.num}</Eyebrow>
                    <div>
                      <h3 className="font-baskerville text-[clamp(16px,1.6vw,20px)] font-normal text-stone-800 mb-2">
                        {v.title}
                      </h3>
                      <p className="font-jost text-[clamp(14px,1.6vw,16px)] leading-loose text-stone-400 font-light">
                        {v.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Us ── */}
      <section id="home-why" className="border-b border-stone-200">
        <div className="max-w-7xl">
          <div className="px-6 sm:px-10 lg:px-16 py-14 grid grid-cols-1 md:grid-cols-[140px_1fr] gap-10 md:gap-16 items-start">
            {/* Left label */}
            <Reveal>
              <Eyebrow>Why Us</Eyebrow>
              <div className="w-7 h-px bg-stone-800 mt-4" />
            </Reveal>

            {/* Right: intro + point grid */}
            <div>
              <Reveal delay={0.08}>
                <p className="font-baskerville text-[clamp(15px,1.5vw,20px)] font-normal italic text-stone-500 leading-relaxed mb-2">
                  Rooted in Progress.
                </p>
                <p className="font-jost text-[13px] tracking-widest uppercase text-stone-400 font-medium mb-6">
                  Procedural robustness.&nbsp; Operational consistency.&nbsp;
                  Constant dependability.
                </p>
                <p className="font-jost text-[clamp(14px,1.6vw,16px)] leading-loose text-stone-400 font-light max-w-2xl mb-10">
                  We extend beyond the conventional standards of client service
                  to support the growth of your business and goals. We at DHC
                  have successfully emerged as one of India's leading accounting
                  and consulting firms because of our remarkable client service
                  that has now become an inherent part of our value system.
                  Today, we are among the most trusted names in this profession.
                </p>
              </Reveal>

              {/* 2×2 points grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 border border-stone-200 divide-y divide-stone-200">
                {WHY_US.map((w, i) => (
                  <Reveal key={w.label} delay={i * 0.07}>
                    <div
                      className={`p-6 sm:p-7 ${
                        i % 2 === 0 ? "sm:border-r border-stone-200" : ""
                      }`}
                    >
                      <p className="text-sm tracking-[0.26em] uppercase font-medium font-jost text-stone-500 mb-2">
                        {w.label}
                      </p>
                      <p className="font-jost text-[clamp(14px,1.6vw,16px)] leading-loose text-stone-400 font-light">
                        {w.body}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.2}>
                <Link
                  to="/about"
                  className="mt-8 inline-flex items-center gap-2 bg-transparent border-none border-b border-stone-800 pb-0.5 text-[11px] tracking-[0.14em] uppercase font-medium text-stone-800 cursor-pointer transition-all duration-200 hover:gap-3.5"
                >
                  Learn More About Us{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-move-right-icon lucide-move-right"
                  >
                    <path d="M18 8L22 12L18 16" />
                    <path d="M2 12H22" />
                  </svg>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
