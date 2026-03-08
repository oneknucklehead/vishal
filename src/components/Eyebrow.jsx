export function Eyebrow({ children, light = false }) {
  return (
    <p
      className={`text-[11px] tracking-[0.26em] uppercase text-stone-400 font-medium font-jost
         `}
    >
      {children}
    </p>
  );
}
