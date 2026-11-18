
import Link from "next/link";
import Image from "next/image";

import {
  ArrowRight,
  CalendarDays,
  Flower2,
  MapPin,
  Clock3,
} from "lucide-react";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import "./FestivalsPage.css";

export const metadata = {
  title:
    "ഉത്സവ വിശേഷങ്ങൾ | കിഴുർ തെരു ശ്രീ മഹാഗണപതി-ഭഗവതി ക്ഷേത്രം",
  description:
    "കിഴുർ തെരു ശ്രീ മഹാഗണപതി-ഭഗവതി ക്ഷേത്രത്തിലെ ഉത്സവങ്ങളും ആഘോഷങ്ങളും സംബന്ധിച്ച വിവരങ്ങൾ.",
};

// Sample festival categories for the design.
// Replace with committee-confirmed festival information.

const festivals = [
  {
    id: 1,
    title: "ഉത്സവം",
    image: "/images/festival-1.webp",
    description:
      "ക്ഷേത്രത്തിലെ ഉത്സവവുമായി ബന്ധപ്പെട്ട വിവരങ്ങളും പരിപാടികളും.",
  },
  {
    id: 2,
    title: "നവരാത്രി",
    image: "/images/festival-2.webp",
    description:
      "നവരാത്രി ആഘോഷങ്ങളുമായി ബന്ധപ്പെട്ട വിവരങ്ങളും വിശേഷങ്ങളും.",
  },
  {
    id: 3,
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
            FESTIVALS HERO
        ===================================== */}

        <section className="festivals-page-hero">
          <div className="festivals-hero-content">

            <p className="festivals-hero-intro">
              കിഴുർ തെരു ശ്രീ
              മഹാഗണപതി-ഭഗവതി ക്ഷേത്രം
            </p>

            <h1>ഉത്സവ വിശേഷങ്ങൾ</h1>

            <div
              className="festivals-hero-divider"
              aria-hidden="true"
            >
              <span />
              <Flower2 size={20} strokeWidth={1.5} />
              <span />
            </div>

            <nav
              className="festivals-breadcrumb"
              aria-label="Breadcrumb"
            >
              <Link href="/">Home</Link>
              <span>/</span>
              <span>ഉത്സവങ്ങൾ</span>
            </nav>

          </div>
        </section>

        {/* =====================================
            FESTIVAL INTRODUCTION
        ===================================== */}

        <section className="festivals-introduction">
          <div className="festivals-intro-container">

            <p className="festivals-section-label">
              — നമ്മുടെ ഉത്സവങ്ങൾ —
            </p>

            <h2>ഉത്സവങ്ങളും ആഘോഷങ്ങളും</h2>

            <p className="festivals-intro-description">
              കിഴുർ തെരു ശ്രീ മഹാഗണപതി-ഭഗവതി
              ക്ഷേത്രവുമായി ബന്ധപ്പെട്ട ഉത്സവങ്ങൾ,
              വിശേഷ ദിവസങ്ങൾ, ആഘോഷങ്ങൾ എന്നിവയുടെ
              വിവരങ്ങൾ ഇവിടെ അറിയാം.
            </p>

            <div
              className="festivals-title-divider"
              aria-hidden="true"
            >
              <span />
              <Flower2 size={18} strokeWidth={1.5} />
              <span />
            </div>

          </div>

          {/* Festival Cards */}

          <div className="festivals-page-grid">
            {festivals.map((festival) => (
              <article
                className="festivals-detail-card"
                key={festival.id}
              >
                <div className="festivals-detail-image">
                  <Image
                    src={festival.image}
                    alt={festival.title}
                    fill
                    sizes="(max-width: 650px) 100vw, (max-width: 1000px) 50vw, 33vw"
                    className="festivals-card-photo"
                  />
                </div>

                <div className="festivals-detail-content">
                  <div
                    className="festivals-card-symbol"
                    aria-hidden="true"
                  >
                    <Flower2
                      size={20}
                      strokeWidth={1.5}
                    />
                  </div>

                  <h3>{festival.title}</h3>

                  <p>{festival.description}</p>

                  <Link
                    href="/contact"
                    className="festivals-card-link"
                  >
                    കൂടുതൽ വിവരങ്ങൾക്ക്
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* =====================================
            FESTIVAL CALENDAR
        ===================================== */}

        <section className="festivals-calendar">
          <div className="festivals-calendar-container">

            <div className="festivals-calendar-heading">
              <p className="festivals-section-label">
                — ഉത്സവ കലണ്ടർ —
              </p>

              <h2>ഉത്സവ കലണ്ടർ</h2>

              <p>
                ക്ഷേത്രത്തിലെ ഉത്സവങ്ങളുടെയും
                വിശേഷ ദിവസങ്ങളുടെയും തീയതികളും
                പരിപാടികളും ഇവിടെ പ്രസിദ്ധീകരിക്കും.
              </p>
            </div>

            <div className="festivals-calendar-panel">

              <div className="festivals-calendar-icon">
                <CalendarDays
                  size={44}
                  strokeWidth={1.4}
                />
              </div>

              <h3>ഉത്സവ തീയതികൾ</h3>

              <p>
                ഔദ്യോഗിക ഉത്സവ തീയതികളും
                പരിപാടികളുടെ സമയക്രമവും
                ക്ഷേത്ര കമ്മിറ്റിയുടെ സ്ഥിരീകരണത്തിന്
                ശേഷം ഇവിടെ ലഭ്യമാക്കുന്നതാണ്.
              </p>

              <div className="festivals-calendar-note">
                <Clock3
                  size={18}
                  aria-hidden="true"
                />
                <span>
                  ഔദ്യോഗിക വിവരങ്ങൾ ലഭ്യമാകാനുണ്ട്
                </span>
              </div>

            </div>
          </div>
        </section>

        {/* =====================================
            FESTIVAL GALLERY
        ===================================== */}

        <section className="festivals-gallery">
          <div className="festivals-gallery-container">

            <div className="festivals-gallery-content">

              <p className="festivals-section-label">
                — ക്ഷേത്ര ദൃശ്യങ്ങൾ —
              </p>

              <h2>ആഘോഷങ്ങളുടെ ദൃശ്യങ്ങൾ</h2>

              <p>
                ക്ഷേത്രത്തിലെ ആഘോഷങ്ങളും
                വിശേഷ നിമിഷങ്ങളും ചിത്രങ്ങളിലൂടെ
                അടുത്തറിയാം.
              </p>

              <Link
                href="/gallery"
                className="festivals-outline-button"
              >
                ഗാലറി കാണാം
                <ArrowRight size={18} />
              </Link>

            </div>

            <div className="festivals-gallery-images">

              <div className="festivals-gallery-image large">
                <Image
                  src="/images/festival-1.webp"
                  alt="ക്ഷേത്രോത്സവ ദൃശ്യാവിഷ്കാരം"
                  fill
                  sizes="(max-width: 700px) 100vw, 35vw"
                />
              </div>

              <div className="festivals-gallery-image">
                <Image
                  src="/images/festival-2.webp"
                  alt="വിളക്കുകളും ക്ഷേത്രാലങ്കാരങ്ങളും"
                  fill
                  sizes="(max-width: 700px) 50vw, 20vw"
                />
              </div>

              <div className="festivals-gallery-image">
                <Image
                  src="/images/festival-3.webp"
                  alt="ക്ഷേത്രാഘോഷങ്ങളുടെ ദൃശ്യാവിഷ്കാരം"
                  fill
                  sizes="(max-width: 700px) 50vw, 20vw"
                />
              </div>

            </div>
          </div>
        </section>

        {/* =====================================
            CONTACT CTA
        ===================================== */}

        <section className="festivals-contact">
          <div className="festivals-contact-container">

            <MapPin
              size={32}
              strokeWidth={1.4}
              className="festivals-contact-icon"
              aria-hidden="true"
            />

            <p className="festivals-section-label">
              — ക്ഷേത്ര സന്ദർശനം —
            </p>

            <h2>ക്ഷേത്രത്തിലേക്ക് സ്വാഗതം</h2>

            <p>
              കിഴുർ, പയ്യോളി, കോഴിക്കോട്
            </p>

            <Link
              href="/contact"
              className="festivals-contact-button"
            >
              ഞങ്ങളെ സമീപിക്കുക
              <ArrowRight size={18} />
            </Link>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
