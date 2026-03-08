const COLS = [
  {
    title: "Who We Are",
    links: [
      "Leadership",
      "Our People",
      "Culture",
      "Core Principles",
      "Diversity",
    ],
  },
  {
    title: "How To Join",
    links: [
      "Career Development",
      "Work with Us",
      "Interviewing",
      "Campus",
      "Internships",
    ],
  },
  {
    title: "Company",
    links: ["Home", "About", "Careers", "Contact"],
  },
];

export function Footer() {
  return (
    <footer className="bg-stone-800 text-white">
      <div className="px-6 sm:px-10 lg:px-16 pt-12 pb-8 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_repeat(3,auto)] gap-8 lg:gap-16 mb-11">
          <div>
            <div className="font-baskerville text-lg text-white">
              D.S. Capital
            </div>
            <p className="text-sm leading-relaxed text-white/30 mt-2.5 max-w-55 font-light">
              Global leader in systematic investment management.
            </p>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <div className="text-sm tracking-[0.22em] uppercase text-white/30 mb-3.5 font-medium font-jost">
                {col.title}
              </div>
              {col.links.map((l) => (
                <div
                  key={l}
                  className="text-sm text-white/40 mb-2 cursor-pointer transition-colors duration-200 hover:text-white font-light font-jost"
                >
                  {l}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-5 flex flex-col sm:flex-row justify-between gap-3 flex-wrap">
          <p className="text-xs text-white/20 tracking-wide font-jost">
            COPYRIGHT © {new Date().getFullYear()} Vishal. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-4 flex-wrap">
            {["Privacy Policy", "Terms of Use", "Important Disclosures"].map(
              (l) => (
                <span
                  key={l}
                  className="text-xs text-white/20 cursor-pointer transition-colors duration-200 hover:text-white/60 font-jost"
                >
                  {l}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
