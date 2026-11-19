
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import Reveal from "@/components/animations/Reveal";

import "./AboutTemple.css";

export default function AboutTemple() {
  return (
    <section
      className="about-temple"
      id="about"
      aria-labelledby="home-about-heading"
    >
      <div className="about-temple-container">

        {/* LEFT — TEMPLE IMAGE */}
        <Reveal
          direction="left"
          duration={1000}
          className="home-about-image-reveal"
        >
          <div className="about-temple-image">
            <div
              className="about-image-outer-frame"
            >
              <div className="about-image-frame">
                <Image
                  src="/images/temple-deity.jpg"
                  alt="ക്ഷേത്രത്തിലെ ദേവത"
                  fill
                  sizes="(max-width: 650px) 90vw, 43vw"
                  className="about-deity-photo"
                />
              </div>
            </div>

            {/* Decorative frame corners */}
            <span
              className="about-frame-accent about-frame-accent-top"
              aria-hidden="true"
            />

            <span
              className="about-frame-accent about-frame-accent-bottom"
              aria-hidden="true"
            />

            {/* Small ornamental seal */}
            <div
              className="about-temple-seal"
              aria-hidden="true"
            >
              ✦
            </div>
          </div>
        </Reveal>

        {/* RIGHT — TEMPLE INFORMATION */}
        <Reveal
          direction="right"
          delay={150}
          duration={1000}
          className="home-about-content-reveal"
        >
          <div className="about-temple-content">

            <p className="about-temple-label">
              <span
                className="about-label-line"
                aria-hidden="true"
              />
              ക്ഷേത്രത്തെ കുറിച്ച്
            </p>

            <h2 id="home-about-heading">
              കിഴുർ തെരു ശ്രീ
              <br />
              <span>
                മഹാഗണപതി-ഭഗവതി ക്ഷേത്രം
              </span>
            </h2>

            {/* Elegant gold divider */}
            <div
              className="about-temple-divider"
              aria-hidden="true"
            >
              <span className="about-temple-divider-line" />
              <span className="about-temple-divider-symbol">
                ✦
              </span>
            </div>

            <p className="about-temple-description">
              കിഴുർ, പയ്യോളിയിൽ സ്ഥിതി ചെയ്യുന്ന
              ശ്രീ മഹാഗണപതി-ഭഗവതി
              ക്ഷേത്രത്തെക്കുറിച്ചുള്ള വിവരങ്ങളും
              ആചാരങ്ങളും വിശേഷങ്ങളും ഭക്തജനങ്ങളിലേക്ക്
              എത്തിക്കുന്നതിനുള്ള ഒരു ഡിജിറ്റൽ വേദിയാണിത്.
            </p>

            <Link
              href="/about"
              className="about-temple-button"
            >
              <span>കൂടുതൽ അറിയാം</span>

              <ArrowRight
                size={18}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </Link>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
