import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useWindowWidth } from "./hooks/useWindowWidth";
import { DesktopNav } from "./components/nav/DesktopNav";
import { MobileNav } from "./components/nav/MobileNav";
import { Footer } from "./components/Footer";
// import { HomePage } from "./pages/HomePage";
// import { AboutPage } from "./pages/AboutPage";
// import { CareersPage } from "./pages/CareersPage";
// import { ContactPage } from "./pages/ContactPage";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Careers } from "./pages/Careers";
import { WhatWeDo } from "./pages/WhatWeDo";

const DESKTOP_BREAKPOINT = 1024;

export default function App() {
  const location = useLocation();
  const w = useWindowWidth();
  const isDesktop = w >= DESKTOP_BREAKPOINT;

  return (
    <>
      {isDesktop ? (
        <>
          <DesktopNav />
          {/* ml-7 = left brand strip width, mr-[220px] = right nav width */}
          <div className="ml-7 mr-55">
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
              >
                <Routes location={location}>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/what-we-do" element={<WhatWeDo />} />
                </Routes>
                <Footer />
              </motion.div>
            </AnimatePresence>
          </div>
        </>
      ) : (
        <>
          <MobileNav />
          {/* mt-14 = top bar height (56px) */}
          <div className="mt-14">
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
              >
                <Routes location={location}>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/what-we-do" element={<WhatWeDo />} />
                </Routes>
                <Footer />
              </motion.div>
            </AnimatePresence>
          </div>
        </>
      )}
    </>
  );
}
