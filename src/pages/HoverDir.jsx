import { useRef } from "react";

export default function HoverDir({ children, overlay }) {
  const containerRef = useRef(null);

  const enter = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const threshold = 20;
    const overlay = containerRef.current.querySelector(".hoverdir-overlay");
    if (x <= threshold) overlay.className = `hoverdir-overlay in from-left`;
    else if (x >= rect.width - threshold) overlay.className = `hoverdir-overlay in from-right`;
    else if (y <= threshold) overlay.className = `hoverdir-overlay in from-top`;
    else overlay.className = `hoverdir-overlay in from-bottom`;
  };

  const leave = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const threshold = 20;
    const overlay = containerRef.current.querySelector(".hoverdir-overlay");
    if (x <= threshold) overlay.className = `hoverdir-overlay out to-left`;
    else if (x >= rect.width - threshold) overlay.className = `hoverdir-overlay out to-right`;
    else if (y <= threshold) overlay.className = `hoverdir-overlay out to-top`;
    else overlay.className = `hoverdir-overlay out to-bottom`;
  };

  return (
    <div className="hoverdir-container" ref={containerRef} onMouseEnter={enter} onMouseLeave={leave}>
      {children}
      <div className="hoverdir-overlay">{overlay}</div>
    </div>
  );
}