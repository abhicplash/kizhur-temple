
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  X,
  Images,
  Flower2,
  MapPin,
  Maximize2,
} from "lucide-react";

import Reveal from "@/components/animations/Reveal";

import "./GalleryPage.css";

/* =========================================
   GALLERY DATA
========================================= */

const galleryImages = [
  {
    id: 1,
    src: "/images/temple-hero.webp",
    title: "ക്ഷേത്ര ദൃശ്യങ്ങൾ",
    category: "temple",
    alt: "കേരള ക്ഷേത്രത്തിന്റെ ദൃശ്യാവിഷ്കാരം",
  },
  {
    id: 2,
    src: "/images/festival-1.webp",
    title: "ഉത്സവ വിശേഷങ്ങൾ",
    category: "festivals",
    alt: "കേരള ക്ഷേത്രോത്സവത്തിന്റെ ദൃശ്യാവിഷ്കാരം",
  },
  {
    id: 3,
    src: "/images/festival-2.webp",
    title: "ദീപാലങ്കാരം",
    category: "decorations",
    alt: "പരമ്പരാഗത ക്ഷേത്ര ദീപാലങ്കാരം",
  },
  {
    id: 4,
    src: "/images/festival-3.webp",
    title: "ആഘോഷ ദൃശ്യങ്ങൾ",
    category: "festivals",
    alt: "അലങ്കരിച്ച കേരള ക്ഷേത്രത്തിന്റെ ദൃശ്യാവിഷ്കാരം",
  },
];

const categories = [
  { id: "all", name: "എല്ലാ ചിത്രങ്ങളും" },
  { id: "temple", name: "ക്ഷേത്രം" },
  { id: "festivals", name: "ഉത്സവങ്ങൾ" },
  { id: "decorations", name: "ദീപാലങ്കാരം" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] =
    useState("all");

  const [selectedIndex, setSelectedIndex] =
    useState(null);

  const closeButtonRef = useRef(null);
  const triggerRef = useRef(null);

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter(
          (image) => image.category === activeCategory
        );

  const selectedImage =
    selectedIndex !== null
      ? filteredImages[selectedIndex] ?? null
      : null;

  function openLightbox(index, event) {
    triggerRef.current = event.currentTarget;
    setSelectedIndex(index);
  }

  function closeLightbox() {
    setSelectedIndex(null);

    requestAnimationFrame(() => {
      triggerRef.current?.focus();
    });
  }

  function nextImage() {
    setSelectedIndex((current) =>
      current === null
        ? null
        : (current + 1) % filteredImages.length
    );
  }

  function previousImage() {
    setSelectedIndex((current) =>
      current === null
        ? null
        : (current - 1 + filteredImages.length) %
          filteredImages.length
    );
  }

  function changeCategory(category) {
    setActiveCategory(category);
    setSelectedIndex(null);
  }

  /* =========================================
     LIGHTBOX ACCESSIBILITY
  ========================================= */

  useEffect(() => {
    if (selectedIndex === null) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    closeButtonRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setSelectedIndex(null);

        requestAnimationFrame(() => {
          triggerRef.current?.focus();
        });
      }

      if (event.key === "ArrowRight") {
        setSelectedIndex((current) =>
          current === null
            ? null
            : (current + 1) % filteredImages.length
        );
      }

      if (event.key === "ArrowLeft") {
        setSelectedIndex((current) =>
          current === null
            ? null
            : (current - 1 + filteredImages.length) %
              filteredImages.length
        );
      }

      if (event.key === "Tab") {
        const dialog = closeButtonRef.current?.closest(
          '[role="dialog"]'
        );

        const controls = dialog?.querySelectorAll(
          'button:not(:disabled)'
        );

        if (!controls?.length) return;

        const first = controls[0];
        const last = controls[controls.length - 1];

        if (
          event.shiftKey &&
          document.activeElement === first
        ) {
          event.preventDefault();
          last.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === last
        ) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [selectedIndex !== null, filteredImages.length]);

  return (
    <div className="temple-gallery-page">

      {/* =====================================
          01 — CINEMATIC HERO
      ===================================== */}

      <section
        className="gallery-page-hero"
        aria-labelledby="gallery-page-title"
      >
        <div
          className="gallery-hero-background"
          aria-hidden="true"
        />

        <div className="gallery-page-hero-content">

          <Reveal direction="down" duration={900}>
            <p className="gallery-hero-intro">
              കിഴുർ തെരു ശ്രീ
              മഹാഗണപതി-ഭഗവതി ക്ഷേത്രം
            </p>
          </Reveal>

          <Reveal
            direction="up"
            delay={120}
            duration={1000}
          >
            <h1 id="gallery-page-title">
              ചിത്രശാല
            </h1>
          </Reveal>

          <Reveal
            direction="scale"
            delay={230}
            duration={850}
          >
            <div
              className="gallery-hero-divider"
              aria-hidden="true"
            >
              <span />
              <Flower2
                size={19}
                strokeWidth={1.4}
              />
              <span />
            </div>
          </Reveal>

          <Reveal
            direction="up"
            delay={320}
            duration={850}
          >
            <nav
              className="gallery-breadcrumb"
              aria-label="Breadcrumb"
            >
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span>ചിത്രശാല</span>
            </nav>
          </Reveal>

        </div>

        <div
          className="gallery-hero-bottom"
          aria-hidden="true"
        />
      </section>

      {/* =====================================
          02 — CURATED GALLERY
      ===================================== */}

      <section
        className="gallery-page-main"
        aria-labelledby="gallery-main-heading"
      >
        <div className="gallery-main-container">

          {/* INTRODUCTION */}

          <div className="gallery-page-heading">

            <Reveal direction="scale" duration={800}>
              <div className="gallery-heading-icon">
                <Images
                  size={26}
                  strokeWidth={1.45}
                  aria-hidden="true"
                />
              </div>
            </Reveal>

            <Reveal
              direction="up"
              delay={70}
              duration={850}
            >
              <p className="gallery-section-label">
                — ക്ഷേത്ര ദൃശ്യങ്ങൾ —
              </p>
            </Reveal>

            <Reveal
              direction="up"
              delay={140}
              duration={900}
            >
              <h2 id="gallery-main-heading">
                ക്ഷേത്രത്തിന്റെ മനോഹര ദൃശ്യങ്ങൾ
              </h2>
            </Reveal>

            <Reveal
              direction="up"
              delay={210}
              duration={850}
            >
              <p className="gallery-page-description">
                ക്ഷേത്രത്തിന്റെ ദൃശ്യങ്ങളും
                ഉത്സവങ്ങളുടെ വിശേഷ നിമിഷങ്ങളും
                ചിത്രങ്ങളിലൂടെ അടുത്തറിയാം.
              </p>
            </Reveal>

            <Reveal
              direction="scale"
              delay={270}
              duration={850}
            >
              <div
                className="gallery-heading-divider"
                aria-hidden="true"
              >
                <span />
                <Flower2
                  size={18}
                  strokeWidth={1.4}
                />
                <span />
              </div>
            </Reveal>

          </div>

          {/* CATEGORY FILTERS */}

          <Reveal direction="up" duration={850}>
            <div
              className="gallery-filters"
              role="group"
              aria-label="ചിത്രങ്ങളുടെ വിഭാഗങ്ങൾ"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  className={`gallery-filter-button ${
                    activeCategory === category.id
                      ? "active"
                      : ""
                  }`}
                  aria-pressed={
                    activeCategory === category.id
                  }
                  onClick={() =>
                    changeCategory(category.id)
                  }
                >
                  {category.name}
                </button>
              ))}
            </div>
          </Reveal>

          {/* IMAGE GRID */}

          <div
            className="gallery-photo-grid"
            aria-live="polite"
          >
            {filteredImages.map((image, index) => (
              <Reveal
                key={image.id}
                direction="up"
                delay={(index % 3) * 100}
                duration={850}
                className="gallery-card-reveal"
              >
                <button
                  type="button"
                  className="gallery-photo-card"
                  onClick={(event) =>
                    openLightbox(index, event)
                  }
                  aria-label={`${image.title} — ചിത്രം വലുതായി കാണുക`}
                >
                  <div className="gallery-photo-image">

                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 600px) 90vw, (max-width: 1000px) 45vw, 30vw"
                      className="gallery-card-photo"
                    />

                    <div
                      className="gallery-image-shade"
                      aria-hidden="true"
                    />

                    <span
                      className="gallery-image-index"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className="gallery-photo-zoom"
                      aria-hidden="true"
                    >
                      <Maximize2
                        size={18}
                        strokeWidth={1.6}
                      />
                    </span>

                  </div>

                  <div className="gallery-photo-caption">

                    <div className="gallery-caption-text">
                      <span
                        className="gallery-caption-line"
                        aria-hidden="true"
                      />

                      <h3>{image.title}</h3>
                    </div>

                    <span
                      className="gallery-caption-arrow"
                      aria-hidden="true"
                    >
                      <ArrowUpRight
                        size={19}
                        strokeWidth={1.7}
                      />
                    </span>

                  </div>
                </button>
              </Reveal>
            ))}
          </div>

          {/* IMAGE NOTICE */}

          {/* <Reveal direction="up" duration={800}>
            <p className="gallery-photo-note">
              ഇവിടെ നൽകിയിരിക്കുന്ന ചിത്രങ്ങൾ
              മാതൃകകൾ മാത്രമാണ്. ക്ഷേത്രത്തിന്റെ
              ഔദ്യോഗിക ചിത്രങ്ങൾ പിന്നീട് ചേർക്കുന്നതാണ്.
            </p>
          </Reveal> */}

        </div>
      </section>

      {/* =====================================
          03 — TEMPLE CONTACT
      ===================================== */}

      <section
        className="gallery-page-contact"
        aria-labelledby="gallery-contact-title"
      >
        <div className="gallery-contact-container">

          <Reveal direction="scale" duration={850}>
            <div className="gallery-contact-icon">
              <MapPin
                size={29}
                strokeWidth={1.4}
                aria-hidden="true"
              />
            </div>
          </Reveal>

          <Reveal
            direction="up"
            delay={100}
            duration={850}
          >
            <p className="gallery-contact-label">
              — ക്ഷേത്ര സന്ദർശനം —
            </p>
          </Reveal>

          <Reveal
            direction="up"
            delay={180}
            duration={900}
          >
            <h2 id="gallery-contact-title">
              ക്ഷേത്രത്തിലേക്ക് സ്വാഗതം
            </h2>
          </Reveal>

          <Reveal
            direction="scale"
            delay={240}
            duration={850}
          >
            <div
              className="gallery-contact-divider"
              aria-hidden="true"
            >
              <span />
              ✦
              <span />
            </div>
          </Reveal>

          <Reveal
            direction="up"
            delay={280}
            duration={850}
          >
            <p className="gallery-contact-location">
              കിഴുർ, പയ്യോളി, കോഴിക്കോട്
            </p>
          </Reveal>

          <Reveal
            direction="up"
            delay={350}
            duration={850}
          >
            <Link
              href="/contact"
              className="gallery-contact-button"
            >
              <span>ഞങ്ങളെ സമീപിക്കുക</span>
              <ArrowRight
                size={18}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </Link>
          </Reveal>

        </div>
      </section>

      {/* =====================================
          04 — FULL SCREEN LIGHTBOX
      ===================================== */}

      {selectedImage && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="ചിത്രശാല"
          onClick={closeLightbox}
        >
          <button
            ref={closeButtonRef}
            type="button"
            className="gallery-lightbox-close"
            aria-label="Close gallery"
            onClick={(event) => {
              event.stopPropagation();
              closeLightbox();
            }}
          >
            <X size={23} strokeWidth={1.7} />
          </button>

          <button
            type="button"
            className="gallery-lightbox-prev"
            aria-label="Previous image"
            onClick={(event) => {
              event.stopPropagation();
              previousImage();
            }}
          >
            <ChevronLeft
              size={28}
              strokeWidth={1.6}
            />
          </button>

          <div
            className="gallery-lightbox-content"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <div className="gallery-lightbox-image">
              <Image
                key={selectedImage.id}
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                sizes="90vw"
                className="gallery-lightbox-photo"
                priority
              />
            </div>

            <div className="gallery-lightbox-caption">

              <div>
                <span className="gallery-lightbox-eyebrow">
                  ക്ഷേത്ര ദൃശ്യങ്ങൾ
                </span>

                <h3>{selectedImage.title}</h3>
              </div>

              <span className="gallery-lightbox-counter">
                {String(selectedIndex + 1).padStart(
                  2,
                  "0"
                )}
                <span aria-hidden="true"> / </span>
                {String(filteredImages.length).padStart(
                  2,
                  "0"
                )}
              </span>

            </div>
          </div>

          <button
            type="button"
            className="gallery-lightbox-next"
            aria-label="Next image"
            onClick={(event) => {
              event.stopPropagation();
              nextImage();
            }}
          >
            <ChevronRight
              size={28}
              strokeWidth={1.6}
            />
          </button>
        </div>
      )}

    </div>
  );
}
