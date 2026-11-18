
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X,
  Images,
  Flower2,
  MapPin,
} from "lucide-react";

import "./GalleryPage.css";

/* =========================================
   GALLERY DATA
   Replace with official temple photos later
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

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter(
          (image) => image.category === activeCategory
        );

  const selectedImage =
    selectedIndex !== null
      ? filteredImages[selectedIndex]
      : null;

  function openLightbox(index) {
    setSelectedIndex(index);
  }

  function closeLightbox() {
    setSelectedIndex(null);
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

  /* Keyboard navigation */

  useEffect(() => {
    if (selectedIndex === null) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [selectedIndex, filteredImages.length]);

  return (
    <div className="temple-gallery-page">

      {/* =====================================
          HERO
      ===================================== */}

      <section className="gallery-page-hero">
        <div className="gallery-page-hero-content">

          <p className="gallery-hero-intro">
            കിഴുർ തെരു ശ്രീ
            മഹാഗണപതി-ഭഗവതി ക്ഷേത്രം
          </p>

          <h1>ചിത്രശാല</h1>

          <div
            className="gallery-hero-divider"
            aria-hidden="true"
          >
            <span />
            <Flower2 size={20} strokeWidth={1.5} />
            <span />
          </div>

          <nav
            className="gallery-breadcrumb"
            aria-label="Breadcrumb"
          >
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>ചിത്രശാല</span>
          </nav>

        </div>
      </section>

      {/* =====================================
          GALLERY SECTION
      ===================================== */}

      <section className="gallery-page-main">

        <div className="gallery-main-container">

          {/* Heading */}

          <div className="gallery-page-heading">
            <span className="gallery-heading-icon">
              <Images size={26} strokeWidth={1.5} />
            </span>

            <p className="gallery-section-label">
              — ക്ഷേത്ര ദൃശ്യങ്ങൾ —
            </p>

            <h2>ക്ഷേത്രത്തിന്റെ മനോഹര ദൃശ്യങ്ങൾ</h2>

            <p className="gallery-page-description">
              ക്ഷേത്രത്തിന്റെ ദൃശ്യങ്ങളും
              ഉത്സവങ്ങളുടെ വിശേഷ നിമിഷങ്ങളും
              ചിത്രങ്ങളിലൂടെ അടുത്തറിയാം.
            </p>

            <div
              className="gallery-heading-divider"
              aria-hidden="true"
            >
              <span />
              <Flower2 size={18} />
              <span />
            </div>
          </div>

          {/* Category filters */}

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

          {/* Image grid */}

          <div className="gallery-photo-grid">
            {filteredImages.map((image, index) => (
              <button
                key={image.id}
                type="button"
                className="gallery-photo-card"
                onClick={() => openLightbox(index)}
                aria-label={`${image.title} — ചിത്രം വലുതായി കാണുക`}
              >
                <div className="gallery-photo-image">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                    className="gallery-card-photo"
                  />

                  <span
                    className="gallery-photo-zoom"
                    aria-hidden="true"
                  >
                    <Images size={20} />
                  </span>
                </div>

                <div className="gallery-photo-caption">
                  <h3>{image.title}</h3>
                  <span aria-hidden="true">
                    <ArrowRight size={18} />
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Information */}

          <p className="gallery-photo-note">
            ഇവിടെ നൽകിയിരിക്കുന്ന ചിത്രങ്ങൾ
            മാതൃകകൾ മാത്രമാണ്. ക്ഷേത്രത്തിന്റെ
            ഔദ്യോഗിക ചിത്രങ്ങൾ പിന്നീട് ചേർക്കുന്നതാണ്.
          </p>
        </div>
      </section>

      {/* =====================================
          CONTACT SECTION
      ===================================== */}

      <section className="gallery-page-contact">
        <div className="gallery-contact-container">

          <MapPin
            size={31}
            strokeWidth={1.5}
            aria-hidden="true"
          />

          <p className="gallery-contact-label">
            — ക്ഷേത്ര സന്ദർശനം —
          </p>

          <h2>ക്ഷേത്രത്തിലേക്ക് സ്വാഗതം</h2>

          <p>കിഴുർ, പയ്യോളി, കോഴിക്കോട്</p>

          <Link
            href="/contact"
            className="gallery-contact-button"
          >
            ഞങ്ങളെ സമീപിക്കുക
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>

      {/* =====================================
          LIGHTBOX
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
            type="button"
            className="gallery-lightbox-close"
            aria-label="Close gallery"
            onClick={closeLightbox}
          >
            <X size={25} />
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
            <ChevronLeft size={29} />
          </button>

          <div
            className="gallery-lightbox-content"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <div className="gallery-lightbox-image">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                sizes="90vw"
                className="gallery-lightbox-photo"
              />
            </div>

            <div className="gallery-lightbox-caption">
              <h3>{selectedImage.title}</h3>
              <span>
                {selectedIndex + 1} /{" "}
                {filteredImages.length}
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
            <ChevronRight size={29} />
          </button>
        </div>
      )}

    </div>
  );
}
