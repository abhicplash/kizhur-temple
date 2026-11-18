
import Link from "next/link";
import Image from "next/image";

import {
  ArrowRight,
  MapPin,
  Flower2,
  CalendarDays,
  BookOpen,
} from "lucide-react";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

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
    title: "ശ്രീ മഹാഗണപതി",
    description:
      "ശ്രീ മഹാഗണപതി ആരാധനയുമായി ബന്ധപ്പെട്ട വിവരങ്ങളും പൂജാ വിശേഷങ്ങളും.",
  },
  {
    icon: Flower2,
    title: "ശ്രീ ഭഗവതി",
    description:
      "ശ്രീ ഭഗവതി ആരാധനയുമായി ബന്ധപ്പെട്ട വിവരങ്ങളും ക്ഷേത്ര വിശേഷങ്ങളും.",
  },
  {
    icon: BookOpen,
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
            ABOUT HERO
        ===================================== */}

        <section className="about-page-hero">
          <div className="about-page-hero-inner">
            <p className="about-hero-eyebrow">
              കിഴുർ തെരു ശ്രീ
              മഹാഗണപതി-ഭഗവതി ക്ഷേത്രം
            </p>

            <h1>ക്ഷേത്രത്തെ കുറിച്ച്</h1>

            <div
              className="about-hero-ornament"
              aria-hidden="true"
            >
              <span />
              <Flower2 size={19} strokeWidth={1.5} />
              <span />
            </div>

            <nav
              className="about-breadcrumb"
              aria-label="Breadcrumb"
            >
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span>ക്ഷേത്രത്തെ കുറിച്ച്</span>
            </nav>
          </div>
        </section>

        {/* =====================================
            TEMPLE INTRODUCTION
        ===================================== */}

        <section className="about-introduction">
          <div className="about-introduction-container">

            <div className="about-introduction-image">
              <div className="about-image-border">
                <Image
                  src="/images/temple-deity.jpg"
                  alt="ക്ഷേത്ര ആരാധനയെ പ്രതിനിധീകരിക്കുന്ന അലങ്കരിച്ച ദേവീ വിഗ്രഹം"
                  fill
                  sizes="(max-width: 768px) 90vw, 43vw"
                  className="about-introduction-photo"
                />
              </div>

              <div
                className="about-image-decoration"
                aria-hidden="true"
              >
                ✦
              </div>
            </div>

            <div className="about-introduction-content">
              <p className="about-section-eyebrow">
                — ക്ഷേത്ര പരിചയം —
              </p>

              <h2>
                കിഴുർ തെരു ശ്രീ
                <span>
                  മഹാഗണപതി-ഭഗവതി ക്ഷേത്രം
                </span>
              </h2>

              <div className="about-heading-rule" />

              <p>
                കോഴിക്കോട് ജില്ലയിലെ പയ്യോളിക്കടുത്തുള്ള
                കിഴൂരിൽ സ്ഥിതി ചെയ്യുന്ന കിഴുർ തെരു
                ശ്രീ മഹാഗണപതി-ഭഗവതി ക്ഷേത്രത്തെക്കുറിച്ചുള്ള
                വിവരങ്ങൾ ഭക്തജനങ്ങളിലേക്ക് എത്തിക്കുന്നതിനാണ്
                ഈ വെബ്സൈറ്റ് ഒരുക്കുന്നത്.
              </p>

              <p>
                ക്ഷേത്രവുമായി ബന്ധപ്പെട്ട പൂജാവിവരങ്ങൾ,
                വഴിപാടുകൾ, ഉത്സവ വിശേഷങ്ങൾ, ചിത്രങ്ങൾ,
                മറ്റ് ആവശ്യമായ അറിയിപ്പുകൾ എന്നിവ
                ഇവിടെ ലഭ്യമാക്കുന്നതാണ്.
              </p>

              <div className="about-location-chip">
                <MapPin size={17} aria-hidden="true" />
                <span>കിഴുർ, പയ്യോളി, കോഴിക്കോട്</span>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================
            WORSHIP & TRADITION
        ===================================== */}

        <section className="about-tradition">
          <div className="about-tradition-container">

            <div className="about-tradition-heading">
              <p className="about-section-eyebrow">
                — ആരാധനയും പാരമ്പര്യവും —
              </p>

              <h2>ക്ഷേത്ര വിശേഷങ്ങൾ</h2>

              <p>
                ക്ഷേത്രവുമായി ബന്ധപ്പെട്ട ആരാധനകളും
                പാരമ്പര്യങ്ങളും കൂടുതൽ അടുത്തറിയാം.
              </p>
            </div>

            <div className="about-tradition-grid">
              {templeHighlights.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    className="about-tradition-card"
                    key={item.title}
                  >
                    <div className="about-tradition-icon">
                      <Icon
                        size={32}
                        strokeWidth={1.45}
                        aria-hidden="true"
                      />
                    </div>

                    <h3>{item.title}</h3>
                    <p>{item.description}</p>

                    <div
                      className="about-card-ornament"
                      aria-hidden="true"
                    >
                      ✦
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================
            FESTIVALS PREVIEW
        ===================================== */}

        <section className="about-celebrations">
          <div className="about-celebrations-container">

            <div className="about-celebrations-content">
              <p className="about-section-eyebrow">
                — ഉത്സവ വിശേഷങ്ങൾ —
              </p>

              <h2>ആഘോഷങ്ങളുടെ നിറവിൽ</h2>

              <p>
                ക്ഷേത്രത്തിലെ ഉത്സവങ്ങളും വിശേഷ
                ആഘോഷങ്ങളും സംബന്ധിച്ച വിവരങ്ങൾ
                ഉത്സവ പേജിലൂടെ അറിയാം.
              </p>

              <Link
                href="/festivals"
                className="about-outline-button"
              >
                ഉത്സവങ്ങൾ കാണാം
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="about-celebrations-image">
              <Image
                src="/images/festival-2.webp"
                alt="കേരള ക്ഷേത്രാഘോഷങ്ങളുടെ ദൃശ്യാവിഷ്കാരം"
                fill
                sizes="(max-width: 768px) 90vw, 48vw"
              />
            </div>
          </div>
        </section>

        {/* =====================================
            VISIT / CONTACT
        ===================================== */}

        <section className="about-visit">
          <div className="about-visit-container">

            <div className="about-visit-icon">
              <MapPin size={30} strokeWidth={1.5} />
            </div>

            <p className="about-section-eyebrow">
              — ക്ഷേത്ര സന്ദർശനം —
            </p>

            <h2>ക്ഷേത്രത്തിലേക്ക് സ്വാഗതം</h2>

            <p>
              കിഴുർ, പയ്യോളി, കോഴിക്കോട്
            </p>

            <div className="about-visit-actions">
              <Link
                href="/contact"
                className="about-visit-primary"
              >
                ബന്ധപ്പെടുക
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/pooja-offerings"
                className="about-visit-secondary"
              >
                <CalendarDays size={17} />
                പൂജാ വിവരങ്ങൾ
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
