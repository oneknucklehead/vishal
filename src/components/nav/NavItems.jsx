import { motion, AnimatePresence } from "framer-motion";
import { NAV_SECTIONS } from "../../data/navSections";

// NavItems receives its state from DesktopNav / MobileNav via useNavLogic
export function NavItems({ currentPage, openId, toggle, goTo, scrollTo }) {
  return (
    <div className="flex flex-col">
      {NAV_SECTIONS.map((sec) => {
        const isActive = currentPage === sec.page;
        const isExpanded = openId === sec.id;
        const hasSub = sec.sub.length > 0;

        return (
          <div key={sec.id}>
            {sec.id === "explore" && (
              <div className="my-3 border-t border-stone-200" />
            )}

            <div className="flex items-center justify-between px-5">
              <button
                onClick={() => {
                  goTo(sec.page);
                  if (hasSub) toggle(sec.id);
                }}
                className={`flex-1 text-left py-2 text-sm font-jost tracking-wide bg-transparent border-none cursor-pointer transition-colors duration-200 ${
                  isActive
                    ? "font-medium text-emerald-700"
                    : "font-light text-stone-800 hover:text-emerald-700"
                }`}
              >
                {sec.label}
              </button>

              {hasSub && (
                <button
                  onClick={() => toggle(sec.id)}
                  className="pl-2 py-1 text-stone-400 text-xs bg-transparent border-none cursor-pointer"
                >
                  <motion.span
                    animate={{ rotate: isExpanded ? 90 : 0 }}
                    transition={{ duration: 0.22 }}
                    className="inline-block"
                  >
                    ›
                  </motion.span>
                </button>
              )}
            </div>

            <AnimatePresence initial={false}>
              {hasSub && isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  {sec.sub.map((s) => (
                    <button
                      key={s.label}
                      onClick={() => scrollTo(sec.page, s.sectionId)}
                      className="block w-full text-left px-8 py-1.5 text-[12.5px] font-light font-jost text-stone-400 hover:text-stone-800 transition-colors duration-150 bg-transparent border-none cursor-pointer"
                    >
                      {s.label}
                    </button>
                  ))}
                  <div className="h-2" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
