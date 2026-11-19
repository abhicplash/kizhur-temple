
import Link from "next/link";
import Image from "next/image";

import {
  ArrowRight,
  CalendarDays,
  Flower2,
  MapPin,
  Clock3,
  ArrowUpRight,
} from "lucide-react";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Reveal from "@/components/animations/Reveal";

import "./FestivalsPage.css";

export const metadata = {
  title:
    "ഉത്സവ വിശേഷങ്ങൾ | കിഴുർ തെരു ശ്രീ മഹാഗണപതി-ഭഗവതി ക്ഷേത്രം",
  description:
    "കിഴുർ തെരു ശ്രീ മഹാഗണപതി-ഭഗവതി ക്ഷേത്രത്തിലെ ഉത്സവങ്ങളും ആഘോഷങ്ങളും സംബന്ധിച്ച വിവരങ്ങൾ.",
};

const festivals = [
  {
    id: 1,
    number: "01",
    title: "ഉത്സവം",
    image: "/images/festival-1.webp",
    description:
      "ക്ഷേത്രത്തിലെ ഉത്സവവുമായി ബന്ധപ്പെട്ട വിവരങ്ങളും പരിപാടികളും.",
  },
  {
    id: 2,
    number: "02",
    title: "നവരാത്രി",
    image: "/images/festival-2.webp",
    description:
      "നവരാത്രി ആഘോഷങ്ങളുമായി ബന്ധപ്പെട്ട വിവരങ്ങളും വിശേഷങ്ങളും.",
  },
  {
    id: 3,
    number: "03",
    title: "വിശേഷ ആഘോഷങ്ങൾ",
    image: "/images/festival-3.webp",
    description:
      "ക്ഷേത്രത്തിലെ മറ്റ് വിശേഷ ആഘോഷങ്ങളും ചടങ്ങുകളും.",
  },
];

export default function FestivalsPage() {
  return (
    <>
      <Navbar />

      <main className="festivals-page">

        {/* =====================================
            01 — CINEMATIC FESTIVALS HERO
        ===================================== */}

        <section
          className="festivals-page-hero"
          aria-labelledby="festivals-page-title"
        >
          <div
            className="festivals-hero-background"
            aria-hidden="true"
          />

          <div className="festivals-hero-content">

            <Reveal direction="down" duration={900}>
              <p className="festivals-hero-intro">
                കിഴുർ തെരു ശ്രീ
                മഹാഗണപതി-ഭഗവതി ക്ഷേത്രം
              </p>
            </Reveal>

            <Reveal
              direction="up"
              delay={110}
              duration={1000}
            >
              <h1 id="festivals-page-title">
                ഉത്സവ വിശേഷങ്ങൾ
              </h1>
            </Reveal>

            <Reveal
              direction="scale"
              delay={220}
              duration={900}
            >
              <div
                className="festivals-hero-divider"
                aria-hidden="true"
              >
                <span />
                <Flower2
                  size={20}
                  strokeWidth={1.4}
                />
                <span />
              </div>
            </Reveal>

            <Reveal
              direction="up"
              delay={300}
              duration={850}
            >
              <nav
                className="festivals-breadcrumb"
                aria-label="Breadcrumb"
              >
                <Link href="/">Home</Link>
                <span aria-hidden="true">/</span>
                <span>ഉത്സവങ്ങൾ</span>
              </nav>
            </Reveal>

          </div>

          <span
            className="festivals-hero-bottom"
            aria-hidden="true"
          />
        </section>

        {/* =====================================
            02 — FESTIVALS INTRODUCTION
        ===================================== */}

        <section
          className="festivals-introduction"
          aria-labelledby="festivals-intro-heading"
        >
          <div className="festivals-intro-container">

            <Reveal direction="up" duration={800}>
              <p className="festivals-section-label">
                — നമ്മുടെ ഉത്സവങ്ങൾ —
              </p>
            </Reveal>

            <Reveal
              direction="up"
              delay={90}
              duration={900}
            >
              <h2 id="festivals-intro-heading">
                ഉത്സവങ്ങളും ആഘോഷങ്ങളും
              </h2>
            </Reveal>

            <Reveal
              direction="up"
              delay={170}
              duration={850}
            >
              <p className="festivals-intro-description">
                കിഴുർ തെരു ശ്രീ മഹാഗണപതി-ഭഗവതി
                ക്ഷേത്രവുമായി ബന്ധപ്പെട്ട ഉത്സവങ്ങൾ,
                വിശേഷ ദിവസങ്ങൾ, ആഘോഷങ്ങൾ എന്നിവയുടെ
                വിവരങ്ങൾ ഇവിടെ അറിയാം.
              </p>
            </Reveal>

            <Reveal
              direction="scale"
              delay={230}
              duration={850}
            >
              <div
                className="festivals-title-divider"
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

          {/* FESTIVAL CARDS */}

          <div className="festivals-page-grid">

            {festivals.map((festival, index) => (
              <Reveal
                key={festival.id}
                direction="up"
                delay={index * 130}
                duration={950}
                className="festivals-card-reveal"
              >
                <article className="festivals-detail-card">

                  <div className="festivals-detail-image">
                    <Image
                      src={festival.image}
                      alt={festival.title}
                      fill
                      sizes="(max-width: 600px) 90vw, (max-width: 800px) 45vw, 30vw"
                      className="festivals-card-photo"
                    />

                    <span
                      className="festivals-image-number"
                      aria-hidden="true"
                    >
                      {festival.number}
                    </span>

                    <span
                      className="festivals-image-accent"
                      aria-hidden="true"
                    />

                  </div>

                  <div className="festivals-detail-content">

                    <div
                      className="festivals-card-symbol"
                      aria-hidden="true"
                    >
                      <Flower2
                        size={21}
                        strokeWidth={1.4}
                      />
                    </div>

                    <h3>{festival.title}</h3>

                    <span
                      className="festivals-card-divider"
                      aria-hidden="true"
                    />

                    <p>{festival.description}</p>

                    <Link
                      href="/contact"
                      className="festivals-card-link"
                    >
                      <span>കൂടുതൽ വിവരങ്ങൾക്ക്</span>
                      <ArrowUpRight
                        size={18}
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />
                    </Link>

                  </div>

                </article>
              </Reveal>
            ))}

          </div>
        </section>

        {/* =====================================
            03 — FESTIVAL CALENDAR
        ===================================== */}

        <section
          className="festivals-calendar"
          aria-labelledby="festivals-calendar-heading"
        >
          <div className="festivals-calendar-container">

            <Reveal direction="up" duration={900}>
              <div className="festivals-calendar-heading">

                <p className="festivals-section-label">
                  — ഉത്സവ കലണ്ടർ —
                </p>

                <h2 id="festivals-calendar-heading">
                  ഉത്സവ കലണ്ടർ
                </h2>

                <div
                  className="festivals-dark-divider"
                  aria-hidden="true"
                >
                  <span />
                  ✦
                  <span />
                </div>

                <p>
                  ക്ഷേത്രത്തിലെ ഉത്സവങ്ങളുടെയും
                  വിശേഷ ദിവസങ്ങളുടെയും തീയതികളും
                  പരിപാടികളും ഇവിടെ പ്രസിദ്ധീകരിക്കും.
                </p>

              </div>
            </Reveal>

            <Reveal
              direction="up"
              delay={130}
              duration={1000}
              className="festivals-calendar-reveal"
            >
              <div className="festivals-calendar-panel">

                <span
                  className="festivals-calendar-corner top-left"
                  aria-hidden="true"
                />

                <span
                  className="festivals-calendar-corner bottom-right"
                  aria-hidden="true"
                />

                <div className="festivals-calendar-icon">
                  <CalendarDays
                    size={39}
                    strokeWidth={1.35}
                    aria-hidden="true"
                  />
                </div>

                <h3>ഉത്സവ തീയതികൾ</h3>

                <div
                  className="festivals-calendar-mini-divider"
                  aria-hidden="true"
                >
                  ✦
                </div>

                <p>
                  ഔദ്യോഗിക ഉത്സവ തീയതികളും
                  പരിപാടികളുടെ സമയക്രമവും
                  ക്ഷേത്ര കമ്മിറ്റിയുടെ സ്ഥിരീകരണത്തിന്
                  ശേഷം ഇവിടെ ലഭ്യമാക്കുന്നതാണ്.
                </p>

                <div
                  className="festivals-calendar-note"
                  role="status"
                >
                  <Clock3
                    size={18}
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                  <span>
                    ഔദ്യോഗിക വിവരങ്ങൾ ലഭ്യമാകാനുണ്ട്
                  </span>
                </div>

              </div>
            </Reveal>

          </div>
        </section>

        {/* =====================================
            04 — FESTIVAL PHOTO GALLERY
        ===================================== */}

        <section
          className="festivals-gallery"
          aria-labelledby="festivals-gallery-heading"
        >
          <div className="festivals-gallery-container">

            <div className="festivals-gallery-content">

              <Reveal direction="up" duration={800}>
                <p className="festivals-section-label">
                  <span
                    className="festivals-label-line"
                    aria-hidden="true"
                  />
                  ക്ഷേത്ര ദൃശ്യങ്ങൾ
                </p>
              </Reveal>

              <Reveal
                direction="up"
                delay={100}
                duration={900}
              >
                <h2 id="festivals-gallery-heading">
                  ആഘോഷങ്ങളുടെ ദൃശ്യങ്ങൾ
                </h2>
              </Reveal>

              <Reveal
                direction="scale"
                delay={150}
                duration={800}
              >
                <div
                  className="festivals-gallery-divider"
                  aria-hidden="true"
                >
                  <span />
                  ✦
                </div>
              </Reveal>

              <Reveal
                direction="up"
                delay={190}
                duration={850}
              >
                <p className="festivals-gallery-description">
                  ക്ഷേത്രത്തിലെ ആഘോഷങ്ങളും
                  വിശേഷ നിമിഷങ്ങളും ചിത്രങ്ങളിലൂടെ
                  അടുത്തറിയാം.
                </p>
              </Reveal>

              <Reveal
                direction="up"
                delay={260}
                duration={850}
              >
                <Link
                  href="/gallery"
                  className="festivals-outline-button"
                >
                  <span>ഗാലറി കാണാം</span>
                  <ArrowRight
                    size={18}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </Link>
              </Reveal>

            </div>

            <div className="festivals-gallery-images">

              <Reveal
                direction="left"
                duration={1000}
                className="festivals-gallery-reveal large"
              >
                <Link
                  href="/gallery"
                  className="festivals-gallery-image"
                  aria-label="ഉത്സവ ചിത്രശാല കാണാം"
                >
                  <Image
                    src="/images/festival-1.webp"
                    alt="ക്ഷേത്രോത്സവ ദൃശ്യാവിഷ്കാരം"
                    fill
                    sizes="(max-width: 800px) 45vw, 33vw"
                    className="festivals-gallery-photo"
                  />
                  <span
                    className="festivals-gallery-image-overlay"
                    aria-hidden="true"
                  />
                  <ArrowUpRight
                    className="festivals-gallery-arrow"
                    size={20}
                    aria-hidden="true"
                  />
                </Link>
              </Reveal>

              <Reveal
                direction="right"
                delay={120}
                duration={950}
                className="festivals-gallery-reveal"
              >
                <Link
                  href="/gallery"
                  className="festivals-gallery-image"
                  aria-label="ദീപാലങ്കാര ചിത്രങ്ങൾ കാണാം"
                >
                  <Image
                    src="/images/festival-2.webp"
                    alt="വിളക്കുകളും ക്ഷേത്രാലങ്കാരങ്ങളും"
                    fill
                    sizes="(max-width: 800px) 45vw, 20vw"
                    className="festivals-gallery-photo"
                  />
                  <span
                    className="festivals-gallery-image-overlay"
                    aria-hidden="true"
                  />
                  <ArrowUpRight
                    className="festivals-gallery-arrow"
                    size={20}
                    aria-hidden="true"
                  />
                </Link>
              </Reveal>

              <Reveal
                direction="right"
                delay={230}
                duration={950}
                className="festivals-gallery-reveal"
              >
                <Link
                  href="/gallery"
                  className="festivals-gallery-image"
                  aria-label="ആഘോഷ ചിത്രങ്ങൾ കാണാം"
                >
                  <Image
                    src="/images/festival-3.webp"
                    alt="ക്ഷേത്രാഘോഷങ്ങളുടെ ദൃശ്യാവിഷ്കാരം"
                    fill
                    sizes="(max-width: 800px) 45vw, 20vw"
                    className="festivals-gallery-photo"
                  />
                  <span
                    className="festivals-gallery-image-overlay"
                    aria-hidden="true"
                  />
                  <ArrowUpRight
                    className="festivals-gallery-arrow"
                    size={20}
                    aria-hidden="true"
                  />
                </Link>
              </Reveal>

            </div>
          </div>
        </section>

        {/* =====================================
            05 — CONTACT & TEMPLE VISIT
        ===================================== */}

        <section
          className="festivals-contact"
          aria-labelledby="festivals-contact-heading"
        >
          <div className="festivals-contact-container">

            <Reveal
              direction="scale"
              duration={850}
            >
              <div className="festivals-contact-icon">
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
              <p className="festivals-section-label">
                — ക്ഷേത്ര സന്ദർശനം —
              </p>
            </Reveal>

            <Reveal
              direction="up"
              delay={180}
              duration={900}
            >
              <h2 id="festivals-contact-heading">
                ക്ഷേത്രത്തിലേക്ക് സ്വാഗതം
              </h2>
            </Reveal>

            <Reveal
              direction="scale"
              delay={240}
              duration={850}
            >
              <div
                className="festivals-contact-divider"
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
              <p className="festivals-contact-location">
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
                className="festivals-contact-button"
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

      </main>

      <Footer />
    </>
  );
}
