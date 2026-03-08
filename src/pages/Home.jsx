import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Reveal } from "../components/Reveal";
import { Eyebrow } from "../components/Eyebrow";
import { Carousel } from "../components/Carousel";
const STATS = [
  { n: "30+", l: "Years of Excellence" },
  { n: "₹2T+", l: "Assets Under Management" },
  { n: "2,000+", l: "Professionals Globally" },
  { n: "6", l: "Continents" },
];

const DISCIPLINES = [
  {
    num: "01",
    title: "Quantitative Research",
    body: "Proprietary mathematical models and data science driving systematic strategies across global markets.",
  },
  {
    num: "02",
    title: "Technology & Engineering",
    body: "High-performance infrastructure for the most demanding computational finance workloads on the planet.",
  },
  {
    num: "03",
    title: "Financial Operations",
    body: "Disciplined operational frameworks ensuring precision, compliance, and resilience across every function.",
  },
  {
    num: "04",
    title: "Risk Intelligence",
    body: "Rigorous risk architecture refined over three decades of navigating complex, volatile conditions.",
  },
];

export function Home() {
  const navigate = useNavigate();
  return (
    <div className="bg-white">
      {/* ── Hero ── */}
      <section
        id="home-hero"
        className="relative min-h-[88vh] flex items-center border-b border-stone-200 overflow-hidden bg-white"
      >
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_70%_at_60%_50%,#f5f5f4,transparent_70%)]" />
        <div className="absolute right-[4%] bottom-[4%] font-baskerville text-[clamp(80px,14vw,220px)] font-bold text-stone-200 select-none pointer-events-none leading-none tracking-tighter">
          VISHAL
        </div>
        <div className="relative z-10 w-full max-w-5xl px-6 sm:px-10 lg:px-16 py-20">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Eyebrow>Est. 1988 · Global Investment Management</Eyebrow>
            <h1 className="font-baskerville text-[clamp(36px,5.5vw,80px)] font-normal leading-[1.1] text-stone-800 mt-5 tracking-tight">
              At the intersection of
              {/* <br /> */}
              <em className="italic"> finance and technology.</em>
            </h1>
            <p className="text-[clamp(14px,1.6vw,16px)] leading-relaxed text-stone-400 max-w-md mt-5 font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <div className="flex flex-wrap gap-3 mt-10">
              <Link
                to={"/about"}
                className="bg-stone-800 text-white text-[11px] tracking-[0.18em] uppercase font-medium px-7 py-3 border-none cursor-pointer transition-colors duration-200 hover:bg-stone-900"
              >
                Who We Are
              </Link>

              <Link
                to={"/careers"}
                className="bg-transparent text-stone-500 text-[11px] tracking-[0.18em] uppercase px-7 py-3 border border-stone-300 cursor-pointer transition-all duration-200 hover:border-stone-800 hover:text-stone-800"
              >
                Explore Careers
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-stone-50 border-b border-stone-200">
        <div className="px-6 sm:px-10 lg:px-16 grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <div
              className={`border-stone-200
            ${i === 0 || i === 2 ? "border-r" : "border-r-0"}
            ${i < 3 ? "lg:border-r" : "lg:border-r-0"}
            ${i < 2 ? "border-b lg:border-b-0" : ""}
            `}
            >
              <Reveal key={stat.l} delay={i * 0.07}>
                <div
                  className={`py-9 ${i !== 0 ? "lg:px-6" : ""} ${i % 2 !== 0 ? "px-6 lg:px-0" : "pr-6"} `}
                >
                  <div className="font-baskerville text-[clamp(30px,4vw,40px)] font-normal text-stone-800 leading-none">
                    {stat.n}
                  </div>
                  <div className="mt-2">
                    <Eyebrow>{stat.l}</Eyebrow>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* ── Intro ── */}
      <section id="home-investment" className="border-b py-16 border-stone-200">
        <div
        // className="max-w-7xl"
        >
          <div className="px-6 sm:px-10 lg:px-16 pb-16 grid grid-cols-1 md:grid-cols-[140px_1fr] gap-10 md:gap-16 items-start">
            <Reveal>
              <Eyebrow>Our mission</Eyebrow>
              <div className="w-7 h-px bg-stone-800 mt-4" />
            </Reveal>
            <Reveal delay={0.12}>
              <p className="font-baskerville text-[clamp(16px,1.6vw,23px)] font-normal leading-relaxed text-stone-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-base text-stone-400 mt-4 font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <Link
                to={"/about"}
                className="mt-6 bg-transparent border-none border-b border-stone-800 pb-0.5 text-[11px] tracking-[0.14em] uppercase font-medium text-stone-800 inline-flex items-center gap-2 cursor-pointer transition-all duration-200 hover:gap-3.5"
              >
                Learn More{" "}
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-move-right-icon lucide-move-right"
                  >
                    <path d="M18 8L22 12L18 16" />
                    <path d="M2 12H22" />
                  </svg>
                </span>
              </Link>
            </Reveal>
          </div>
          <div className="px-6 sm:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-[140px_1fr] gap-10 md:gap-16 items-start">
            <Reveal>
              <Eyebrow>Our vision</Eyebrow>
              <div className="w-7 h-px bg-stone-800 mt-4" />
            </Reveal>
            <Reveal delay={0.12}>
              <p className="font-baskerville text-[clamp(16px,1.6vw,23px)] font-normal leading-relaxed text-stone-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-base text-stone-400 mt-4 font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <Link
                to={"/about"}
                className="mt-6 bg-transparent border-none border-b border-stone-800 pb-0.5 text-[11px] tracking-[0.14em] uppercase font-medium text-stone-800 inline-flex items-center gap-2 cursor-pointer transition-all duration-200 hover:gap-3.5"
              >
                Learn More{" "}
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-move-right-icon lucide-move-right"
                  >
                    <path d="M18 8L22 12L18 16" />
                    <path d="M2 12H22" />
                  </svg>
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Carousel ── */}
      <section>
        <Carousel
          title="What We Do"
          description="Explore the disciplines that define our work across research, technology, and operations."
          items={[
            {
              image:
                "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800",
              eyebrow: "Research",
              title: "Quantitative Strategies",
              description:
                "Proprietary models and data science driving systematic strategies across global markets.",
              linkTo: "/",
              linkLabel: "Learn More",
            },
            {
              image:
                "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
              eyebrow: "Engineering",
              title: "Technology & Infrastructure",
              description:
                "High-performance systems built for the most demanding computational workloads.",
              linkTo: "/",
            },
            {
              image:
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
              eyebrow: "Finance",
              title: "Risk Intelligence",
              description:
                "Rigorous risk architecture refined over three decades of navigating complex markets.",
              linkTo: "/",
            },
            {
              image:
                "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
              eyebrow: "Operations",
              title: "Financial Operations",
              description:
                "Disciplined frameworks ensuring precision and resilience across every function.",
              linkTo: "/careers",
            },
            {
              image:
                "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
              eyebrow: "Operations",
              title: "Financial Operations",
              description:
                "Disciplined frameworks ensuring precision and resilience across every function.",
              linkTo: "/careers",
            },
            {
              image:
                "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
              eyebrow: "Operations",
              title: "Financial Operations",
              description:
                "Disciplined frameworks ensuring precision and resilience across every function.",
              linkTo: "/careers",
            },
            {
              image:
                "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
              eyebrow: "Operations",
              title: "Financial Operations",
              description:
                "Disciplined frameworks ensuring precision and resilience across every function.",
              linkTo: "/careers",
            },
            {
              image:
                "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
              eyebrow: "Operations",
              title: "Financial Operations",
              description:
                "Disciplined frameworks ensuring precision and resilience across every function.",
              linkTo: "/careers",
            },
          ]}
        />
      </section>

      {/* ── Disciplines ── */}
      {/* <section
        id="home-disciplines"
        // className="max-w-5xl"
      >
        <div className="px-6 sm:px-10 lg:px-16 py-14">
          <Reveal>
            <Eyebrow>What We Do</Eyebrow>
            <h2 className="font-baskerville text-[clamp(22px,2.4vw,34px)] font-normal text-stone-800 mt-3 max-w-xs leading-snug">
              Our Core Disciplines
            </h2>
          </Reveal>
          <div className="mt-10">
            {DISCIPLINES.map((d, i) => (
              <Reveal key={d.num} delay={i * 0.07}>
                <div className="grid grid-cols-1 sm:grid-cols-[48px_1fr] lg:grid-cols-[48px_1fr_1.6fr] gap-2 border-t border-stone-200 py-6 items-start">
                  <Eyebrow>{d.num}</Eyebrow>
                  <h3 className="font-baskerville text-[clamp(15px,1.4vw,17px)] font-normal text-stone-800">
                    {d.title}
                  </h3>
                  <p className="text-[13.5px] leading-relaxed text-stone-400">
                    {d.body}
                  </p>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-stone-200" />
          </div>
        </div>
      </section> */}

      {/* ── CTA ── */}
      <section className="bg-stone-800">
        <div className="px-6 sm:px-10 lg:px-16 py-14 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <Reveal>
            <h2 className="font-baskerville text-[clamp(18px,2.2vw,30px)] font-normal text-white">
              Ready to do the most interesting work of your career?
            </h2>
            <p className="text-sm text-white/40 mt-2">
              Join exceptional researchers, engineers, and operators.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <Link
              to={"/careers"}
              className="shrink-0 bg-white text-stone-800 text-[11px] tracking-[0.18em] uppercase font-semibold px-7 py-3 border-none cursor-pointer transition-colors duration-200 hover:bg-stone-100"
            >
              View Open Positions
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
