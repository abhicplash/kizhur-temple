
"use client";

import { useEffect, useRef, useState } from "react";
import "./Reveal.css";

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 750,
  className = "",
  once = true,
}) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={elementRef}
      className={[
        "temple-reveal",
        `temple-reveal-${direction}`,
        isVisible ? "temple-reveal-visible" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        "--reveal-delay": `${delay}ms`,
        "--reveal-duration": `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
}
