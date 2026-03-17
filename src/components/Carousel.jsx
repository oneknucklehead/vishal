import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useWindowWidth } from "../hooks/useWindowWidth";
import { Eyebrow } from "./Eyebrow";

/**
 * Carousel — D.S. Capital theme, multi-card sliding track
 *
 * Shows 3 cards on desktop (>=1024px), 2 on tablet (>=640px), 1 on mobile.
 * Each card has an image, title, description, and a "Learn More" link
 * that navigates to a configurable route (default: "/").
 *
 * Props:
 *   title        {string}   Section eyebrow label
 *   description  {string}   Section prose shown in the header
 *   items        {Array}    Array of card objects (see shape below)
 *   autoPlay     {boolean}  Auto-advance slides (default: false)
 *   interval     {number}   ms between auto-advances (default: 4500)
 *
 * Item shape:
 *   {
 *     image:        string   Image URL
 *     imageAlt?:   string   Alt text (defaults to title)
 *     eyebrow?:    string   Small all-caps label above the title
 *     title:       string   Card heading (required)
 *     description: string   Card body text (required)
 *     linkTo?:     string   Route path to navigate to (default: "/")
 *     linkLabel?:  string   Link text (default: "Learn More")
 *   }
 *
 * Usage:
 *   import { Carousel } from "../components/Carousel";
 *
 *   <Carousel
 *     title="What We Do"
 *     description="Explore the disciplines that define our work."
 *     items={[
 *       {
 *         image: "https://images.unsplash.com/photo-...",
 *         eyebrow: "Research",
 *         title: "Quantitative Strategies",
 *         description: "Building systematic models that operate across every major asset class.",
 *         linkTo: "/",
 *         linkLabel: "Learn More",
 *       },
 *     ]}
 *   />
 */

// ─── Card ─────────────────────────────────────────────────────────────────────
function Card({ item }) {
  const navigate = useNavigate();
  const [imgHover, setImgHover] = useState(false);

  const handleLink = () => {
    navigate(item.linkTo ?? "/");
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col bg-white border border-stone-200 h-full">
      {/* Image */}
      <div
        className="overflow-hidden relative"
        style={{ aspectRatio: "16/9" }}
        onMouseEnter={() => setImgHover(true)}
        onMouseLeave={() => setImgHover(false)}
      >
        <motion.img
          src={item.image}
          alt={item.imageAlt ?? item.title}
          animate={{ scale: imgHover ? 1.05 : 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-stone-900/20 to-transparent pointer-events-none" />
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        {item.eyebrow && (
          <Eyebrow>
            <span className="mb-2">{item.eyebrow}</span>
          </Eyebrow>
        )}

        <h3 className="font-baskerville text-[clamp(16px,1.5vw,19px)] font-normal text-stone-800 leading-snug mb-3">
          {item.title}
        </h3>

        <p className="font-jost text-sm leading-normal text-stone-400 font-light flex-1 mb-5">
          {item.description}
        </p>

        {/* Learn More */}
        <button
          onClick={handleLink}
          className="self-start flex items-center gap-2 bg-transparent border-none border-b border-stone-800 pb-px p-0 cursor-pointer font-jost text-[11px] tracking-[0.14em] uppercase font-medium text-stone-800 transition-all duration-200 hover:gap-3.5"
        >
          {item.linkLabel ?? "Learn More"}{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-move-right-icon lucide-move-right"
            >
              <path d="M18 8L22 12L18 16" />
              <path d="M2 12H22" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}

// ─── Carousel ─────────────────────────────────────────────────────────────────
export function Carousel({
  title,
  description,
  items = [],
  autoPlay = false,
  interval = 4500,
}) {
  const w = useWindowWidth();

  // How many cards are visible at once
  const visibleCount = w >= 1024 ? 3 : w >= 640 ? 2 : 1;

  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  // Furthest starting position so the last page is always full
  const maxIndex = Math.max(0, items.length - visibleCount);

  // Clamp when visibleCount changes on resize
  useEffect(() => {
    setIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const go = useCallback(
    (newIndex) => {
      setIndex(Math.max(0, Math.min(newIndex, maxIndex)));
    },
    [maxIndex],
  );

  const prev = () => go(index - 1);
  const next = useCallback(() => go(index + 1), [go, index]);

  // Auto-play — wraps around, pauses on hover
  useEffect(() => {
    if (!autoPlay || items.length <= visibleCount || isHovered) return;
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, interval);
    return () => clearInterval(timerRef.current);
  }, [autoPlay, interval, items.length, visibleCount, maxIndex, isHovered]);

  if (!items.length) return null;

  const GAP_PX = 24; // px gap between cards, must match style below
  const totalPages = maxIndex + 1;

  // translateX: each step moves one card width + one gap
  // card width = (100% - gaps * (visibleCount-1)) / visibleCount
  // so one step = (100% / visibleCount) + (GAP_PX * (visibleCount-1) / visibleCount)
  // Simpler: use a CSS variable approach via inline calc
  const translateX =
    index === 0
      ? "0px"
      : `calc(-${index} * (${100 / visibleCount}% + ${(GAP_PX * (visibleCount - 1)) / visibleCount}px - ${GAP_PX / visibleCount}px) - ${(index * GAP_PX) / visibleCount}px + ${(index * GAP_PX * (visibleCount - 1)) / visibleCount / visibleCount}px)`;

  // Cleaner direct calculation
  // Each card takes: (containerWidth - (visibleCount-1)*GAP) / visibleCount
  // Moving by index cards = index * (cardWidth + GAP)
  // In percent terms with gap: each card = (100% - (vc-1)*gap) / vc
  // shift per step = cardWidth + gap = (100% - (vc-1)*gap)/vc + gap = 100%/vc + gap*(vc-1)/vc + gap - gap*(vc-1)/vc...
  // Simplest: shift = index * (100/vc %) + index * gap * correction... just use pixel offset via useRef

  return (
    <div
    // className="max-w-7xl"
    >
      {/* ── Section header ── */}
      <div className="px-6 sm:px-10 lg:px-16 pt-14 pb-10 grid grid-cols-1 md:grid-cols-[140px_1fr] gap-8 md:gap-16 items-start">
        <div>
          <p className="text-[10px] tracking-[0.26em] uppercase font-medium font-jost text-stone-400">
            {title}
          </p>
          <div className="w-6 h-px bg-stone-800 mt-3.5" />
        </div>
        <p className="font-baskerville text-[clamp(15px,1.6vw,20px)] font-normal leading-relaxed text-stone-800">
          {description}
        </p>
      </div>

      {/* ── Track ── */}
      <div
        className="border-b border-stone-200"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <TrackInner
          items={items}
          index={index}
          visibleCount={visibleCount}
          gapPx={GAP_PX}
        />

        {/* ── Controls ── */}
        <div className="flex items-center justify-between px-6 sm:px-10 lg:px-16 py-5 border-t border-stone-200">
          {/* Pill dots */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className={`block border-none cursor-pointer transition-all duration-300 p-0 ${
                  i === index
                    ? "w-5 h-0.75 bg-stone-800"
                    : "w-0.75 h-0.75 rounded-full bg-stone-300 hover:bg-stone-500"
                }`}
              />
            ))}
          </div>

          {/* Counter + arrows */}
          <div className="flex items-center gap-5">
            <span className="font-jost text-[11px] tracking-[0.14em] text-stone-400 select-none tabular-nums">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(totalPages).padStart(2, "0")}
            </span>
            <div className="flex gap-1">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={prev}
                disabled={index === 0}
                className="w-9 h-9 flex items-center justify-center border border-stone-200 text-stone-500 bg-transparent cursor-pointer transition-colors duration-200 hover:border-stone-800 hover:text-stone-800 disabled:opacity-25 disabled:cursor-default"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
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
                className="w-9 h-9 flex items-center justify-center border border-stone-200 text-stone-500 bg-transparent cursor-pointer transition-colors duration-200 hover:border-stone-800 hover:text-stone-800 disabled:opacity-25 disabled:cursor-default"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
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
    </div>
  );
}

// ─── TrackInner — measures its own width to compute pixel-accurate offset ──────
function TrackInner({ items, index, visibleCount, gapPx }) {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;
    const ro = new ResizeObserver(([entry]) => {
      setContainerWidth(entry.contentRect.width);
    });
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  // Card width in px
  const cardWidth = containerWidth
    ? (containerWidth - gapPx * (visibleCount - 1)) / visibleCount
    : 0;

  const offsetX = index * (cardWidth + gapPx);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden px-6 sm:px-10 lg:px-16 pt-8 pb-8"
    >
      <motion.div
        animate={{ x: containerWidth ? -offsetX : 0 }}
        transition={{ duration: 0.52, ease: [0.16, 1, 0.3, 1] }}
        className="flex"
        style={{ gap: `${gapPx}px` }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="shrink-0"
            style={{ width: cardWidth || `${100 / visibleCount}%` }}
          >
            <Card item={item} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
