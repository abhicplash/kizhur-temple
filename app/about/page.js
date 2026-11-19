
import Link from "next/link";
import Image from "next/image";

import {
  ArrowRight,
  MapPin,
  Flower2,
  CalendarDays,
  BookOpen,
  Sparkles,
} from "lucide-react";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Reveal from "@/components/animations/Reveal";

import "./About.css";

export const metadata = {
  title:
    "ക്ഷേത്രത്തെ കുറിച്ച് | കിഴുർ തെരു ശ്രീ മഹാഗണപതി-ഭഗവതി ക്ഷേത്രം",
  description:
    "കിഴുർ തെരു ശ്രീ മഹാഗണപതി-ഭഗവതി ക്ഷേത്രത്തെക്കുറിച്ചുള്ള വിവരങ്ങൾ. കിഴുർ, പയ്യോളി, കോഴിക്കോട്.",
};

const templeHighlights = [
  {
    icon: Flower2,
    number: "01",
    title: "ശ്രീ മഹാഗണപതി",
    description:
      "ശ്രീ മഹാഗണപതി ആരാധനയുമായി ബന്ധപ്പെട്ട വിവരങ്ങളും പൂജാ വിശേഷങ്ങളും.",
  },
  {
    icon: Sparkles,
    number: "02",
    title: "ശ്രീ ഭഗവതി",
    description:
      "ശ്രീ ഭഗവതി ആരാധനയുമായി ബന്ധപ്പെട്ട വിവരങ്ങളും ക്ഷേത്ര വിശേഷങ്ങളും.",
  },
  {
    icon: BookOpen,
    number: "03",
    title: "ആചാരങ്ങളും പാരമ്പര്യവും",
    description:
      "ക്ഷേത്രത്തിലെ ആചാരങ്ങൾ, പാരമ്പര്യങ്ങൾ, അനുഷ്ഠാനങ്ങൾ എന്നിവയെക്കുറിച്ച് അറിയാം.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="about-page">

        {/* =====================================
            01 — CINEMATIC HERO
        ===================================== */}

        <section
          className="about-page-hero"
          aria-labelledby="about-page-title"
        >
          <div
            className="about-hero-background"
            aria-hidden="true"
          />

          <div className="about-page-hero-inner">

            <Reveal
              direction="down"
              duration={950}
            >
              <p className="about-hero-eyebrow">
                — ക്ഷേത്രത്തെ കുറിച്ച് —
              </p>
            </Reveal>

            <Reveal
              direction="up"
              delay={120}
              duration={1100}
            >
              <h1 id="about-page-title">
                കിഴുർ തെരു ശ്രീ
                <span>
                  മഹാഗണപതി-ഭഗവതി ക്ഷേത്രം
                </span>
              </h1>
            </Reveal>

            <Reveal
              direction="scale"
              delay={250}
              duration={900}
            >
              <div
                className="about-hero-ornament"
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
              delay={340}
              duration={850}
            >
              <nav
                className="about-breadcrumb"
                aria-label="Breadcrumb"
              >
                <Link href="/">Home</Link>
                <span aria-hidden="true">/</span>
                <span>ക്ഷേത്രത്തെ കുറിച്ച്</span>
              </nav>
            </Reveal>

          </div>

          <div
            className="about-hero-bottom-line"
            aria-hidden="true"
          />
        </section>

        {/* =====================================
            02 — TEMPLE INTRODUCTION
        ===================================== */}

        <section
          className="about-introduction"
          aria-labelledby="about-intro-heading"
        >
          <div className="about-introduction-container">

            <Reveal
              direction="left"
              duration={1050}
              className="about-intro-reveal"
            >
              <div className="about-introduction-image">

                <div className="about-image-outer-border">
                  <div className="about-image-border">
                    <Image
                      src="/images/temple-deity.jpg"
                      alt="ക്ഷേത്ര ആരാധനയെ പ്രതിനിധീകരിക്കുന്ന ദേവതാ ചിത്രം"
                      fill
                      sizes="(max-width: 700px) 90vw, 43vw"
                      className="about-introduction-photo"
                    />
                  </div>
                </div>

                <span
                  className="about-image-corner about-image-corner-top"
                  aria-hidden="true"
                />

                <span
                  className="about-image-corner about-image-corner-bottom"
                  aria-hidden="true"
                />

                <div
                  className="about-image-decoration"
                  aria-hidden="true"
                >
                  ✦
                </div>

              </div>
            </Reveal>

            <div className="about-introduction-content">

              <Reveal
                direction="up"
                duration={800}
              >
                <p className="about-section-eyebrow">
                  <span
                    className="about-eyebrow-line"
                    aria-hidden="true"
                  />
                  ക്ഷേത്ര പരിചയം
                </p>
              </Reveal>

              <Reveal
                direction="up"
                delay={100}
                duration={900}
              >
                <h2 id="about-intro-heading">
                  കിഴുർ തെരു ശ്രീ
                  <span>
                    മഹാഗണപതി-ഭഗവതി ക്ഷേത്രം
                  </span>
                </h2>
              </Reveal>

              <Reveal
                direction="scale"
                delay={170}
                duration={800}
              >
                <div
                  className="about-heading-rule"
                  aria-hidden="true"
                >
                  <span />
                  <Flower2
                    size={15}
                    strokeWidth={1.4}
                  />
                </div>
              </Reveal>

              <Reveal
                direction="up"
                delay={190}
                duration={850}
              >
                <p className="about-intro-paragraph">
                  കോഴിക്കോട് ജില്ലയിലെ പയ്യോളിക്കടുത്തുള്ള
                  കിഴൂരിൽ സ്ഥിതി ചെയ്യുന്ന കിഴുർ തെരു ശ്രീ
                  മഹാഗണപതി-ഭഗവതി ക്ഷേത്രത്തെക്കുറിച്ചുള്ള
                  വിവരങ്ങൾ ഭക്തജനങ്ങളിലേക്ക് എത്തിക്കുന്നതിനാണ്
                  ഈ വെബ്സൈറ്റ് ഒരുക്കുന്നത്.
                </p>
              </Reveal>

              <Reveal
                direction="up"
                delay={240}
                duration={850}
              >
                <p className="about-intro-paragraph">
                  ക്ഷേത്രവുമായി ബന്ധപ്പെട്ട പൂജാവിവരങ്ങൾ,
                  വഴിപാടുകൾ, ഉത്സവ വിശേഷങ്ങൾ, ചിത്രങ്ങൾ,
                  മറ്റ് ആവശ്യമായ അറിയിപ്പുകൾ എന്നിവ ഇവിടെ
                  ലഭ്യമാക്കുന്നതാണ്.
                </p>
              </Reveal>

              <Reveal
                direction="up"
                delay={300}
                duration={800}
              >
                <a
                  className="about-location-chip"
                  href="https://maps.app.goo.gl/j5E6nTA4kmctau7MA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin
                    size={17}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                  <span>
                    കിഴുർ, പയ്യോളി, കോഴിക്കോട്
                  </span>
                  <ArrowRight
                    size={15}
                    aria-hidden="true"
                  />
                </a>
              </Reveal>

            </div>
          </div>
        </section>

        {/* =====================================
            03 — WORSHIP & TRADITION
        ===================================== */}

        <section
          className="about-tradition"
          aria-labelledby="about-tradition-heading"
        >
          <div className="about-tradition-container">

            <Reveal direction="up" duration={900}>
              <div className="about-tradition-heading">

                <p className="about-section-eyebrow">
                  ആരാധനയും പാരമ്പര്യവും
                </p>

                <h2 id="about-tradition-heading">
                  ക്ഷേത്ര വിശേഷങ്ങൾ
                </h2>

                <div
                  className="about-tradition-divider"
                  aria-hidden="true"
                >
                  <span />
                  ✦
                  <span />
                </div>

                <p>
                  ക്ഷേത്രവുമായി ബന്ധപ്പെട്ട ആരാധനകളും
                  പാരമ്പര്യങ്ങളും കൂടുതൽ അടുത്തറിയാം.
                </p>

              </div>
            </Reveal>

            <div className="about-tradition-grid">

              {templeHighlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal
                    key={item.number}
                    direction="up"
                    delay={index * 140}
                    duration={900}
                    className="about-tradition-reveal"
                  >
                    <article className="about-tradition-card">

                      <span
                        className="about-tradition-number"
                        aria-hidden="true"
                      >
                        {item.number}
                      </span>

                      <div className="about-tradition-icon">
                        <Icon
                          size={31}
                          strokeWidth={1.35}
                          aria-hidden="true"
                        />
                      </div>

                      <h3>{item.title}</h3>

                      <div
                        className="about-tradition-small-line"
                        aria-hidden="true"
                      />

                      <p>{item.description}</p>

                      <div
                        className="about-card-ornament"
                        aria-hidden="true"
                      >
                        ✦
                      </div>

                    </article>
                  </Reveal>
                );
              })}

            </div>
          </div>
        </section>

        {/* =====================================
            04 — FESTIVAL CELEBRATIONS
        ===================================== */}

        <section
          className="about-celebrations"
          aria-labelledby="about-celebrations-heading"
        >
          <div className="about-celebrations-container">

            <div className="about-celebrations-content">

              <Reveal direction="up" duration={800}>
                <p className="about-section-eyebrow">
                  <span
                    className="about-eyebrow-line"
                    aria-hidden="true"
                  />
                  ഉത്സവ വിശേഷങ്ങൾ
                </p>
              </Reveal>

              <Reveal
                direction="up"
                delay={100}
                duration={900}
              >
                <h2 id="about-celebrations-heading">
                  ആഘോഷങ്ങളുടെ നിറവിൽ
                </h2>
              </Reveal>

              <Reveal
                direction="up"
                delay={190}
                duration={850}
              >
                <p>
                  ക്ഷേത്രത്തിലെ ഉത്സവങ്ങളും വിശേഷ
                  ആഘോഷങ്ങളും സംബന്ധിച്ച വിവരങ്ങൾ
                  ഉത്സവ പേജിലൂടെ അറിയാം.
                </p>
              </Reveal>

              <Reveal
                direction="up"
                delay={260}
                duration={850}
              >
                <Link
                  href="/festivals"
                  className="about-outline-button"
                >
                  <span>ഉത്സവങ്ങൾ കാണാം</span>
                  <ArrowRight
                    size={18}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </Link>
              </Reveal>

            </div>

            <Reveal
              direction="right"
              delay={120}
              duration={1050}
              className="about-celebrations-reveal"
            >
              <div className="about-celebrations-image-frame">

                <div className="about-celebrations-image">
                  <Image
                    src="/images/festival-2.webp"
                    alt="കേരള ക്ഷേത്രാഘോഷങ്ങളുടെ ദൃശ്യാവിഷ്കാരം"
                    fill
                    sizes="(max-width: 700px) 90vw, 48vw"
                    className="about-celebrations-photo"
                  />
                </div>

                <span
                  className="about-celebrations-corner"
                  aria-hidden="true"
                />

              </div>
            </Reveal>

          </div>
        </section>

        {/* =====================================
            05 — VISIT THE TEMPLE
        ===================================== */}

        <section
          className="about-visit"
          aria-labelledby="about-visit-heading"
        >
          <div className="about-visit-container">

            <Reveal
              direction="scale"
              duration={850}
            >
              <div className="about-visit-icon">
                <MapPin
                  size={28}
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
              <p className="about-section-eyebrow">
                — ക്ഷേത്ര സന്ദർശനം —
              </p>
            </Reveal>

            <Reveal
              direction="up"
              delay={170}
              duration={950}
            >
              <h2 id="about-visit-heading">
                ക്ഷേത്രത്തിലേക്ക് സ്വാഗതം
              </h2>
            </Reveal>

            <Reveal
              direction="scale"
              delay={220}
              duration={850}
            >
              <div
                className="about-visit-divider"
                aria-hidden="true"
              >
                <span />
                ✦
                <span />
              </div>
            </Reveal>

            <Reveal
              direction="up"
              delay={270}
              duration={850}
            >
              <p className="about-visit-location">
                കിഴുർ, പയ്യോളി, കോഴിക്കോട്
              </p>
            </Reveal>

            <Reveal
              direction="up"
              delay={340}
              duration={850}
            >
              <div className="about-visit-actions">

                <Link
                  href="/contact"
                  className="about-visit-primary"
                >
                  ബന്ധപ്പെടുക
                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                  />
                </Link>

                <Link
                  href="/pooja-offerings"
                  className="about-visit-secondary"
                >
                  <CalendarDays
                    size={17}
                    aria-hidden="true"
                  />
                  പൂജാ വിവരങ്ങൾ
                </Link>

              </div>
            </Reveal>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
