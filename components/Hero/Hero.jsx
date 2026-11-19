
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import "./Hero.css";

export default function Hero() {
  return (
    <section
      className="temple-hero"
      id="home"
      aria-labelledby="temple-hero-title"
    >
      {/* Cinematic background */}
      <div
        className="hero-background"
        aria-hidden="true"
      />

      {/* Main hero content */}
      <div className="hero-content">

        <div className="hero-intro-wrap">
          <p className="hero-intro">
            ശ്രീ മഹാഗണപതി-ഭഗവതി
            <br />
            ക്ഷേത്രത്തിലേക്ക്
          </p>
        </div>

        <div className="hero-title-wrap">
          <h1
            className="hero-title"
            id="temple-hero-title"
          >
            സ്വാഗതം...
          </h1>
        </div>

        {/* Gold decorative divider */}
        <div
          className="hero-divider"
          aria-hidden="true"
        >
          <span className="hero-divider-line" />

          <span className="hero-divider-symbol">
            ✦
          </span>

          <span className="hero-divider-line" />
        </div>

        {/* CTA button */}
        <div className="hero-action">
          <Link
            href="/about"
            className="hero-button"
          >
            <span className="hero-button-text">
              ക്ഷേത്രത്തെ കുറിച്ച് അറിയാം
            </span>

            <span
              className="hero-button-icon"
              aria-hidden="true"
            >
              <ArrowRight
                size={19}
                strokeWidth={1.8}
              />
            </span>
          </Link>
        </div>

      </div>

      {/* Subtle bottom decorative line */}
      <div
        className="hero-bottom-accent"
        aria-hidden="true"
      />
    </section>
  );
}
