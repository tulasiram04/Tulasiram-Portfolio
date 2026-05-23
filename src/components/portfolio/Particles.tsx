import { useEffect, useRef } from "react";

export function Particles({ count = 40 }: { count?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.innerHTML = "";
    for (let i = 0; i < count; i++) {
      const dot = document.createElement("span");
      const size = Math.random() * 3 + 1;
      dot.style.cssText = `
        position:absolute;
        width:${size}px;height:${size}px;
        left:${Math.random() * 100}%;top:${Math.random() * 100}%;
        border-radius:9999px;
        background: oklch(0.84 0.07 75 / ${0.3 + Math.random() * 0.5});
        box-shadow:0 0 ${size * 4}px oklch(0.84 0.07 75 / 0.6);
        animation: float-slow ${8 + Math.random() * 10}s ease-in-out ${Math.random() * 5}s infinite;
        pointer-events:none;
      `;
      el.appendChild(dot);
    }
  }, [count]);
  return <div ref={ref} className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden />;
}
