import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

/**
 * ImageCarousel — image-only carousel, D.S. Capital theme
 *
 * Shows 3 images on desktop (>=1024px), 2 on tablet (>=640px), 1 on mobile.
 * Safe to use inside Reveal / AnimatePresence wrappers.
 *
 * Props:
 *   images       {Array}   Array of { src, alt? } objects
 *   autoPlay     {boolean} Auto-advance (default: false)
 *   interval     {number}  ms between advances (default: 4000)
 *   aspectRatio  {string}  CSS aspect-ratio per image (default: "3/2")
 */

const GAP_PX = 16;

function getVisibleCount(winW) {
  if (winW >= 1024) return 3;
  if (winW >= 640) return 2;
  return 1;
}

// ─── Single image tile ────────────────────────────────────────────────────────
function ImageTile({ img, cardWidth, aspectRatio }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="shrink-0 overflow-hidden"
      style={{ width: cardWidth, aspectRatio }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.img
        src={img.src}
        alt={img.alt ?? ""}
        animate={{ scale: hovered ? 1.05 : 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-full object-cover"
        draggable={false}
      />
    </div>
  );
}

// ─── ImageCarousel ────────────────────────────────────────────────────────────
export function ImageCarousel({
  images = [],
  autoPlay = false,
  interval = 4000,
  aspectRatio = "3/2",
}) {
  // Window width for breakpoint
  const [winW, setWinW] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1280,
  );
  useEffect(() => {
    const fn = () => setWinW(window.innerWidth);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  const visibleCount = getVisibleCount(winW);

  // Measure the clipping wrapper — use getBoundingClientRect so we get the
  // rendered width even if a parent has opacity:0 at mount time.
  const wrapperRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const measure = () => {
      const w = wrapperRef.current?.getBoundingClientRect().width ?? 0;
      if (w > 0) {
        setCardWidth((w - GAP_PX * (visibleCount - 1)) / visibleCount);
      }
    };

    // 1. Measure immediately (works when already visible)
    measure();

    // 2. ResizeObserver catches layout changes
    const ro = new ResizeObserver(measure);
    ro.observe(wrapperRef.current);

    // 3. Also poll briefly after mount to catch Reveal's fade-in
    //    (opacity:0 → 1 doesn't trigger ResizeObserver)
    const t1 = setTimeout(measure, 50);
    const t2 = setTimeout(measure, 150);
    const t3 = setTimeout(measure, 400);

    return () => {
      ro.disconnect();
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [visibleCount]);

  // Pagination
  const maxIndex = Math.max(0, images.length - visibleCount);
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    setIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const go = useCallback(
    (n) => setIndex(Math.max(0, Math.min(n, maxIndex))),
    [maxIndex],
  );

  const prev = () => go(index - 1);
  const next = useCallback(() => go(index + 1), [go, index]);

  // Auto-play
  useEffect(() => {
    if (!autoPlay || images.length <= visibleCount || isHovered) return;
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, interval);
    return () => clearInterval(timerRef.current);
  }, [autoPlay, interval, images.length, visibleCount, maxIndex, isHovered]);

  if (!images.length) return null;

  const totalPages = maxIndex + 1;
  const offsetX = cardWidth > 0 ? index * (cardWidth + GAP_PX) : 0;

  return (
    <div
      className="border-stone-200 p-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Clipping wrapper — this is what we measure */}
      <div ref={wrapperRef} className="overflow-hidden w-full">
        <motion.div
          className="flex"
          style={{ gap: `${GAP_PX}px` }}
          animate={{ x: -offsetX }}
          transition={{ duration: 0.52, ease: [0.16, 1, 0.3, 1] }}
        >
          {images.map((img, i) => (
            <ImageTile
              key={i}
              img={img}
              cardWidth={cardWidth > 0 ? cardWidth : undefined}
              aspectRatio={aspectRatio}
            />
          ))}
        </motion.div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-5">
        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`block border-none cursor-pointer transition-all duration-300 p-0 ${
                i === index
                  ? "w-5 h-[3px] bg-stone-800"
                  : "w-[3px] h-[3px] bg-stone-300 hover:bg-stone-500"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-4">
          <span className="font-jost text-[11px] tracking-[0.14em] text-stone-400 select-none tabular-nums">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(totalPages).padStart(2, "0")}
          </span>
          <div className="flex gap-1">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              disabled={index === 0}
              className="w-8 h-8 flex items-center justify-center border border-stone-200 text-stone-500 bg-transparent cursor-pointer transition-colors duration-200 hover:border-stone-800 hover:text-stone-800 disabled:opacity-25 disabled:cursor-default"
            >
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path
                  d="M9 2L4 7L9 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                />
              </svg>
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={next}
              disabled={index >= maxIndex}
              className="w-8 h-8 flex items-center justify-center border border-stone-200 text-stone-500 bg-transparent cursor-pointer transition-colors duration-200 hover:border-stone-800 hover:text-stone-800 disabled:opacity-25 disabled:cursor-default"
            >
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path
                  d="M5 2L10 7L5 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
