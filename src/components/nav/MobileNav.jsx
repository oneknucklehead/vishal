import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { NavItems } from "./NavItems";
import { useNavLogic } from "./useNavLogic";
import logo from "../../assets/logo.png";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const navigate = useNavigate();
  const location = useLocation();

  const { currentPage, openId, toggle, goTo, scrollTo } = useNavLogic(close);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close drawer on route change
  useEffect(() => {
    close();
  }, [location.pathname]);

  return (
    <>
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-fit py-3 bg-white border-b border-stone-200 flex items-center justify-between px-5">
        <button
          onClick={() => {
            navigate("/");
            window.scrollTo(0, 0);
          }}
          className="flex items-center gap-2.5 bg-transparent border-none cursor-pointer p-0"
        >
          {/* <div className="w-7 h-7 bg-stone-800 flex items-center justify-center text-[10px] font-bold text-white tracking-wider font-jost">
            DS
          </div>
          <span className="font-baskerville text-sm text-stone-800">
            D.S. Capital
          </span> */}
          <img src={logo} alt="brand logo" className="max-w-36 object-cover" />
        </button>

        {/* Animated hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-1.25 p-2 bg-transparent border-none cursor-pointer z-60"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.28 }}
            className="block w-5.5 h-0.5 bg-stone-800 origin-center"
          />
          <motion.span
            animate={
              open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }
            }
            transition={{ duration: 0.18 }}
            className="block w-5.5 h-0.5 bg-stone-800"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.28 }}
            className="block w-5.5 h-0.5 bg-stone-800 origin-center"
          />
        </button>
      </div>

      {/* Backdrop + slide-in drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={close}
              className="fixed inset-0 bg-stone-900/40 z-49"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 w-[min(300px,82vw)] bg-white border-l border-stone-200 z-[50] overflow-y-auto flex flex-col pt-16 pb-8"
            >
              <NavItems
                currentPage={currentPage}
                openId={openId}
                toggle={toggle}
                goTo={goTo}
                scrollTo={scrollTo}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
