import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Reveal } from "../components/Reveal";
import { Eyebrow } from "../components/Eyebrow";
import { Carousel } from "../components/Carousel";
import { useEffect } from "react";
import { HomeMissionSection } from "../components/Homesection";
const STATS = [
  { n: "5+", l: "Cities Across India" },
  { n: "1100+", l: "Team of Professionals" },
  { n: "5+", l: "Offices Across India" },
  { n: "10+", l: "Industries" },
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
  useEffect(() => {
    const canvas = document.getElementById("hero-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W, H, animId;
    let mouse = { x: -9999, y: -9999 };
    const GRID = 60;

    function resize() {
      const section = document.getElementById("home-hero");
      W = canvas.width = section.offsetWidth;
      H = canvas.height = section.offsetHeight;
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);

      const cols = Math.ceil(W / GRID);
      const rows = Math.ceil(H / GRID);
      const mouseCol = Math.floor(mouse.x / GRID);
      const mouseRow = Math.floor(mouse.y / GRID);

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const dc = col - mouseCol;
          const dr = row - mouseRow;
          const dist = Math.sqrt(dc * dc + dr * dr);
          const maxDist = 1;

          if (dist < maxDist) {
            const intensity = (1 - dist / maxDist) * 0.05;
            ctx.fillStyle = `rgba(68,65,60,${intensity})`;
            ctx.fillRect(
              col * GRID + 0.5,
              row * GRID + 0.5,
              GRID - 1,
              GRID - 1,
            );
          }
        }
      }

      // Grid lines
      ctx.strokeStyle = "rgba(120,113,108,0.2)";
      ctx.lineWidth = 0.5;
      for (let x = 0; x <= W; x += GRID) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, H);
        ctx.stroke();
      }
      for (let y = 0; y <= H; y += GRID) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.stroke();
      }
    }

    function loop() {
      draw();
      animId = requestAnimationFrame(loop);
    }

    function onMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }

    function onMouseLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    resize();
    loop();

    const section = document.getElementById("home-hero");
    section.addEventListener("mousemove", onMouseMove);
    section.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animId);
      section.removeEventListener("mousemove", onMouseMove);
      section.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return (
    <div className="bg-white">
      {/* ── Hero ── */}
      <section
        id="home-hero"
        className="relative min-h-[88vh] flex items-center border-b border-stone-200 overflow-hidden bg-white"
      >
        <canvas
          id="hero-canvas"
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ opacity: 0.6 }}
        />

        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_70%_at_60%_50%,#f5f5f4,transparent_70%)]" />
        <div
          className="absolute right-[3%] bottom-[3%] font-baskerville font-bold text-stone-200 select-none pointer-events-none leading-none tracking-tighter text-right"
          style={{
            fontSize: "clamp(32px, 5vw, 90px)",
            maxWidth: "90vw",
            wordBreak: "break-word",
          }}
        >
          P.K. Sah & Associates
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
              key={i}
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
      <HomeMissionSection />

      {/* ── Carousel ── */}
      <section>
        <Carousel
          title="What We Do"
          descriptionHeading="Wider Choice, Seamless Delivery."
          description="At DHC, we believe there's a thin line between 'delivering a service' and 'delivering value'.
As the global business realities change, corporations are finding ways to adapt to the new working world. We at DHC, are focused on providing our clients with future-proof solutions to achieve a seamless adaptation to the changes in their individual industries. With a focus on quality, we provide accounting and consultancy services in assurance, risk advisory, tax and regulatory, corporate finance advisory and global knowledge services."
          items={[
            {
              image:
                "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800",
              title: "Tax & Regulatory Services",
              description:
                "Proactive, data-driven tax strategies designed to navigate evolving global regulations, ensuring structural efficiency and long-term financial resilience.",
              linkTo: "/what-we-do#whatwedo-tax",
              linkLabel: "Learn More",
            },
            {
              image:
                "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
              // eyebrow: "Engineering",
              title: "Corporate Finance Advisory Services",
              description:
                "Strategic financial guidance for complex transactions, from capital raising to cross-border M&A, delivered with deep industry expertise and a global perspective.",
              linkTo: "/what-we-do#whatwedo-corporate",
            },
            {
              image:
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
              // eyebrow: "Finance",
              title: "Risk & Advisory Services",
              description:
                "Comprehensive risk management frameworks and strategic assurance services designed to identify vulnerabilities and build long-term business resilience.",
              linkTo: "/what-we-do#whatwedo-risk",
            },
            {
              image:
                "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
              // eyebrow: "Operations",
              title: "Assurance Services",
              description:
                "Leveraging seven decades of experience to provide credible financial reporting and global assurance solutions that meet the highest standards of stakeholder transparency.",
              linkTo: "/what-we-do#whatwedo-assurance",
            },
            {
              image:
                "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
              // eyebrow: "Operations",
              title: "Global Knowledge Services",
              description:
                "Strategic outsourcing and Virtual CFO solutions that streamline non-core functions, allowing businesses to focus on growth while driving day-to-day operational efficiencies.",
              linkTo: "/what-we-do#whatwedo-gks",
            },
            {
              image:
                "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
              // eyebrow: "Operations",
              title: "ESG Advisory Services",
              description:
                "Strategic guidance on sustainability metrics and ethical operations, helping organizations balance short-term regulatory compliance with long-term stakeholder value.",
              linkTo: "/what-we-do#whatwedo-esg",
            },
          ]}
        />
      </section>

      {/* ── CTA ── */}
      <section className="bg-stone-800">
        <div className="px-6 sm:px-10 lg:px-16 py-14 flex flex-wrap flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
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
