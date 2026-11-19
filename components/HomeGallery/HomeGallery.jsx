
import Link from "next/link";
import Image from "next/image";

import {
  ArrowRight,
  ArrowUpRight,
  Bell,
  MapPin,
} from "lucide-react";

import Reveal from "@/components/animations/Reveal";

import "./HomeGallery.css";

/* =========================================
   GALLERY IMAGES
========================================= */

const galleryImages = [
  {
    src: "/images/temple-hero.webp",
    alt: "കേരളീയ ക്ഷേത്ര വാസ്തുവിദ്യ",
  },
  {
    src: "/images/festival-2.webp",
    alt: "ക്ഷേത്രത്തിലെ ദീപാലങ്കാരം",
  },
  {
    src: "/images/festival-1.webp",
    alt: "ക്ഷേത്രോത്സവ കാഴ്ചകൾ",
  },
];

/* =========================================
   HOME GALLERY COMPONENT
========================================= */

export default function HomeGallery() {
  return (
    <section
      className="home-gallery"
      aria-labelledby="home-gallery-heading"
    >
      <div className="home-gallery-container">

        {/* =====================================
            LEFT — GALLERY INTRODUCTION
        ===================================== */}

        <Reveal
          direction="left"
          duration={900}
          className="home-gallery-intro-reveal"
        >
          <div className="home-gallery-intro">

            <p className="home-gallery-label">
              <span
                className="home-gallery-label-line"
                aria-hidden="true"
              />
              ക്ഷേത്ര ദൃശ്യങ്ങൾ
            </p>

            <h2 id="home-gallery-heading">
              ക്ഷേത്ര ദൃശ്യങ്ങൾ
            </h2>

            <div
              className="home-gallery-gold-divider"
              aria-hidden="true"
            >
              <span />
              <span className="home-gallery-divider-symbol">
                ✦
              </span>
            </div>

            <p>
              ക്ഷേത്രത്തിന്റെ മനോഹരമായ
              കാഴ്ചകളും ആഘോഷങ്ങളും കാണാം.
            </p>

            <Link
              href="/gallery"
              className="home-gallery-button"
            >
              <span>ഗാലറി കാണാം</span>

              <ArrowRight
                size={18}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </Link>

          </div>
        </Reveal>

        {/* =====================================
            CENTER — IMAGE GALLERY
        ===================================== */}

        <div className="home-gallery-images">

          {galleryImages.map((image, index) => (
            <Reveal
              key={image.src}
              direction="up"
              delay={index * 120}
              duration={850}
              className="home-gallery-image-reveal"
            >
              <Link
                href="/gallery"
                className="home-gallery-image"
                aria-label="ചിത്രശാല കാണാം"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 650px) 30vw, (max-width: 1050px) 18vw, 15vw"
                  className="home-gallery-photo"
                />

                {/* Subtle hover shading */}
                <span
                  className="home-gallery-image-overlay"
                  aria-hidden="true"
                />

                {/* Small gold corner icon */}
                <span
                  className="home-gallery-image-arrow"
                  aria-hidden="true"
                >
                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.7}
                  />
                </span>

              </Link>
            </Reveal>
          ))}

        </div>

        {/* =====================================
            RIGHT — CONTACT INFORMATION
        ===================================== */}

        <Reveal
          direction="right"
          delay={170}
          duration={900}
          className="home-gallery-contact-reveal"
        >
          <div className="home-gallery-contact">

            <Bell
              size={24}
              strokeWidth={1.6}
              className="home-gallery-bell"
              aria-hidden="true"
            />

            <p className="home-gallery-label">
              <span
                className="home-gallery-label-line"
                aria-hidden="true"
              />
              ബന്ധപ്പെടുക
            </p>

            <h2>ഞങ്ങളെ സമീപിക്കുക</h2>

            <div
              className="home-gallery-gold-divider"
              aria-hidden="true"
            >
              <span />
              <span className="home-gallery-divider-symbol">
                ✦
              </span>
            </div>

            <p>
              ക്ഷേത്രവുമായി ബന്ധപ്പെട്ട
              വിവരങ്ങൾക്കായി ഞങ്ങളെ ബന്ധപ്പെടാം.
            </p>

            <Link
              href="/contact"
              className="home-gallery-button"
            >
              <span>ബന്ധപ്പെടാം</span>

              <ArrowRight
                size={18}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </Link>

            <div className="home-gallery-location">
              <MapPin
                size={15}
                strokeWidth={1.7}
                aria-hidden="true"
              />
              <span>കിഴുർ, പയ്യോളി</span>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
