
import Link from "next/link";
import Image from "next/image";

import {
  ArrowRight,
  ArrowUpRight,
  Flame,
  Lamp,
  HandHeart,
  Flower2,
  Gift,
  Clock3,
  CalendarDays,
  MapPin,
  Phone,
  Info,
} from "lucide-react";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Reveal from "@/components/animations/Reveal";

import "./PoojaOfferingsPage.css";

export const metadata = {
  title:
    "പൂജകളും വഴിപാടുകളും | കിഴുർ തെരു ശ്രീ മഹാഗണപതി-ഭഗവതി ക്ഷേത്രം",
  description:
    "കിഴുർ തെരു ശ്രീ മഹാഗണപതി-ഭഗവതി ക്ഷേത്രത്തിലെ പൂജകളും വഴിപാടുകളും സംബന്ധിച്ച വിവരങ്ങൾ.",
};

// Sample categories pending temple committee confirmation.
const offerings = [
  {
    id: 1,
    number: "01",
    icon: Flame,
    title: "നിത്യപൂജ",
    description:
      "നിത്യപൂജയുമായി ബന്ധപ്പെട്ട വിവരങ്ങളും വിശദാംശങ്ങളും അറിയാം.",
  },
  {
    id: 2,
    number: "02",
    icon: Lamp,
    title: "അഭിഷേകം",
    description:
      "അഭിഷേകവുമായി ബന്ധപ്പെട്ട വിവരങ്ങളും ലഭ്യതയും ക്ഷേത്രവുമായി ബന്ധപ്പെട്ട് അറിയാം.",
  },
  {
    id: 3,
    number: "03",
    icon: HandHeart,
    title: "അർച്ചന",
    description:
      "അർച്ചന സംബന്ധിച്ച വിവരങ്ങളും ആവശ്യമായ വിശദാംശങ്ങളും അറിയാം.",
  },
  {
    id: 4,
    number: "04",
    icon: Flower2,
    title: "വിശേഷ പൂജകൾ",
    description:
      "വിശേഷ പൂജകളുടെയും ചടങ്ങുകളുടെയും വിവരങ്ങൾ ലഭ്യമാക്കുന്നതാണ്.",
  },
  {
    id: 5,
    number: "05",
    icon: Gift,
    title: "സമർപ്പണം",
    description:
      "വഴിപാടുകളും സമർപ്പണങ്ങളും സംബന്ധിച്ച വിവരങ്ങൾ അറിയാം.",
  },
];

const templeInformation = [
  {
    icon: Clock3,
    title: "പൂജാ സമയങ്ങൾ",
    description: "ഔദ്യോഗിക സമയക്രമം ലഭ്യമാകാനുണ്ട്.",
  },
  {
    icon: CalendarDays,
    title: "വിശേഷ പൂജകൾ",
    description:
      "വിശേഷ പൂജകളുടെ വിവരങ്ങളും തീയതികളും പിന്നീട് ചേർക്കുന്നതാണ്.",
  },
  {
    icon: HandHeart,
    title: "വഴിപാട് വിവരങ്ങൾ",
    description:
      "ഔദ്യോഗിക വഴിപാട് പട്ടികയും നിരക്കുകളും ലഭ്യമാകാനുണ്ട്.",
  },
];

export default function PoojaOfferingsPage() {
  return (
    <>
      <Navbar />

      <main className="pooja-page">

        {/* =====================================
            01 — CINEMATIC HERO
        ===================================== */}

        <section
          className="pooja-page-hero"
          aria-labelledby="pooja-page-title"
        >
          <div
            className="pooja-page-hero-background"
            aria-hidden="true"
          />

          <div className="pooja-page-hero-content">

            <Reveal direction="down" duration={900}>
              <p className="pooja-page-hero-intro">
                കിഴുർ തെരു ശ്രീ
                മഹാഗണപതി-ഭഗവതി ക്ഷേത്രം
              </p>
            </Reveal>

            <Reveal
              direction="up"
              delay={120}
              duration={1050}
            >
              <h1 id="pooja-page-title">
                പൂജകളും വഴിപാടുകളും
              </h1>
            </Reveal>

            <Reveal
              direction="scale"
              delay={230}
              duration={850}
            >
              <div
                className="pooja-page-hero-divider"
                aria-hidden="true"
              >
                <span />
                <Flower2 size={20} strokeWidth={1.4} />
                <span />
              </div>
            </Reveal>

            <Reveal
              direction="up"
              delay={320}
              duration={800}
            >
              <nav
                className="pooja-page-breadcrumb"
                aria-label="Breadcrumb"
              >
                <Link href="/">Home</Link>
                <span aria-hidden="true">/</span>
                <span>പൂജകളും വഴിപാടുകളും</span>
              </nav>
            </Reveal>

          </div>

          <div
            className="pooja-hero-bottom-line"
            aria-hidden="true"
          />
        </section>

        {/* =====================================
            02 — POOJA INTRODUCTION
        ===================================== */}

        <section
          className="pooja-page-intro"
          aria-labelledby="pooja-intro-title"
        >
          <div className="pooja-page-intro-container">

            <Reveal
              direction="left"
              duration={1050}
              className="pooja-intro-reveal"
            >
              <div className="pooja-page-image-composition">

                <div className="pooja-page-image-frame">
                  <div className="pooja-page-intro-image">
                    <Image
                      src="/images/temple-deity.jpg"
                      alt="ക്ഷേത്ര ആരാധനയെ പ്രതിനിധീകരിക്കുന്ന ദേവതാ ചിത്രം"
                      fill
                      sizes="(max-width: 750px) 90vw, 43vw"
                      className="pooja-page-intro-photo"
                    />
                  </div>
                </div>

                <span
                  className="pooja-image-corner pooja-image-corner-top"
                  aria-hidden="true"
                />
                <span
                  className="pooja-image-corner pooja-image-corner-bottom"
                  aria-hidden="true"
                />

                <div
                  className="pooja-page-image-accent"
                  aria-hidden="true"
                >
                  ✦
                </div>

              </div>
            </Reveal>

            <div className="pooja-page-intro-text">

              <Reveal direction="up" duration={800}>
                <p className="pooja-page-label pooja-inline-label">
                  <span aria-hidden="true" />
                  പൂജകളും സേവനങ്ങളും
                </p>
              </Reveal>

              <Reveal
                direction="up"
                delay={100}
                duration={950}
              >
                <h2 id="pooja-intro-title">
                  പൂജാ വിവരങ്ങൾ
                </h2>
              </Reveal>

              <Reveal
                direction="scale"
                delay={160}
                duration={800}
              >
                <div
                  className="pooja-page-gold-rule"
                  aria-hidden="true"
                >
                  <span />
                  <Flower2
                    size={16}
                    strokeWidth={1.4}
                  />
                </div>
              </Reveal>

              <Reveal
                direction="up"
                delay={200}
                duration={850}
              >
                <p className="pooja-page-intro-paragraph">
                  കിഴുർ തെരു ശ്രീ മഹാഗണപതി-ഭഗവതി
                  ക്ഷേത്രത്തിലെ പൂജകളും വഴിപാടുകളും
                  സംബന്ധിച്ച വിവരങ്ങൾ ഭക്തജനങ്ങൾക്ക്
                  എളുപ്പത്തിൽ ലഭ്യമാക്കുന്നതിനായാണ്
                  ഈ വിഭാഗം ഒരുക്കിയിരിക്കുന്നത്.
                </p>
              </Reveal>

              <Reveal
                direction="up"
                delay={250}
                duration={850}
              >
                <p className="pooja-page-intro-paragraph">
                  പൂജകളുടെ വിശദാംശങ്ങൾ, സമയക്രമം,
                  വഴിപാട് നിരക്കുകൾ, മറ്റ് ആവശ്യമായ
                  വിവരങ്ങൾ എന്നിവ ക്ഷേത്ര കമ്മിറ്റിയുടെ
                  സ്ഥിരീകരണത്തിന് ശേഷം ഇവിടെ
                  പ്രസിദ്ധീകരിക്കുന്നതാണ്.
                </p>
              </Reveal>

              <Reveal
                direction="up"
                delay={320}
                duration={850}
              >
                <Link
                  href="/contact"
                  className="pooja-page-outline-button"
                >
                  <span>കൂടുതൽ വിവരങ്ങൾക്ക്</span>
                  <ArrowRight
                    size={18}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </Link>
              </Reveal>

            </div>
          </div>
        </section>

        {/* =====================================
            03 — OFFERINGS GRID
        ===================================== */}

        <section
          className="pooja-page-offerings"
          aria-labelledby="pooja-offerings-title"
        >
          <div className="pooja-page-offerings-container">

            <Reveal direction="up" duration={900}>
              <div className="pooja-page-section-heading">

                <p className="pooja-page-label">
                  — പൂജകളും വഴിപാടുകളും —
                </p>

                <h2 id="pooja-offerings-title">
                  പൂജകളും സേവനങ്ങളും
                </h2>

                <div
                  className="pooja-centered-divider"
                  aria-hidden="true"
                >
                  <span />
                  ✦
                  <span />
                </div>

                <p>
                  ക്ഷേത്രത്തിലെ പൂജകളെയും വഴിപാടുകളെയും
                  കുറിച്ചുള്ള കൂടുതൽ വിവരങ്ങൾക്കായി
                  ക്ഷേത്രവുമായി ബന്ധപ്പെടുക.
                </p>

              </div>
            </Reveal>

            <div className="pooja-page-offering-grid">

              {offerings.map((offering, index) => {
                const Icon = offering.icon;

                return (
                  <Reveal
                    key={offering.id}
                    direction="up"
                    delay={(index % 3) * 110}
                    duration={900}
                    className="pooja-offering-reveal"
                  >
                    <article className="pooja-page-offering-card">

                      <span
                        className="pooja-page-card-number"
                        aria-hidden="true"
                      >
                        {offering.number}
                      </span>

                      <div className="pooja-page-offering-icon">
                        <Icon
                          size={32}
                          strokeWidth={1.4}
                          aria-hidden="true"
                        />
                      </div>

                      <h3>{offering.title}</h3>

                      <div
                        className="pooja-card-small-rule"
                        aria-hidden="true"
                      />

                      <p>{offering.description}</p>

                      <Link
                        href="/contact"
                        className="pooja-page-card-link"
                      >
                        <span>വിവരങ്ങൾ അറിയാം</span>
                        <ArrowUpRight
                          size={18}
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />
                      </Link>

                    </article>
                  </Reveal>
                );
              })}

            </div>

            <Reveal
              direction="up"
              duration={800}
            >
              {/* <p className="pooja-page-offerings-note">
                <Info
                  size={18}
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
                <span>
                  ഇവിടെ നൽകിയിരിക്കുന്നത് മാതൃകാ
                  വിഭാഗങ്ങളാണ്. ഔദ്യോഗിക പൂജാ
                  പട്ടിക ക്ഷേത്ര കമ്മിറ്റിയുടെ
                  സ്ഥിരീകരണത്തിന് ശേഷം പുതുക്കുന്നതാണ്.
                </span>
              </p> */}
            </Reveal>

          </div>
        </section>

        {/* =====================================
            04 — TIMINGS & INFORMATION
        ===================================== */}

        <section
          className="pooja-page-information"
          aria-labelledby="pooja-information-title"
        >
          <div className="pooja-page-information-container">

            <Reveal direction="up" duration={900}>
              <div className="pooja-page-information-header">

                <p className="pooja-page-label">
                  — ക്ഷേത്ര വിവരങ്ങൾ —
                </p>

                <h2 id="pooja-information-title">
                  പൂജാ സമയവും വിവരങ്ങളും
                </h2>

                <div
                  className="pooja-dark-divider"
                  aria-hidden="true"
                >
                  <span />
                  ✦
                  <span />
                </div>

                <p>
                  പൂജാ സമയക്രമവും വഴിപാട് നിരക്കുകളും
                  സംബന്ധിച്ച ഔദ്യോഗിക വിവരങ്ങൾ
                  ഇവിടെ ലഭ്യമാക്കുന്നതാണ്.
                </p>

              </div>
            </Reveal>

            <div className="pooja-page-info-grid">

              {templeInformation.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal
                    key={item.title}
                    direction="up"
                    delay={index * 130}
                    duration={900}
                    className="pooja-info-reveal"
                  >
                    <article className="pooja-page-info-card">

                      <div className="pooja-info-icon">
                        <Icon
                          size={31}
                          strokeWidth={1.4}
                          aria-hidden="true"
                        />
                      </div>

                      <h3>{item.title}</h3>

                      <div
                        className="pooja-info-small-rule"
                        aria-hidden="true"
                      />

                      <p>{item.description}</p>

                    </article>
                  </Reveal>
                );
              })}

            </div>

            <Reveal
              direction="up"
              delay={200}
              duration={850}
            >
              <div className="pooja-page-info-action">
                <Link
                  href="/contact"
                  className="pooja-page-gold-button"
                >
                  <Phone
                    size={17}
                    aria-hidden="true"
                  />
                  <span>ക്ഷേത്രവുമായി ബന്ധപ്പെടുക</span>
                  <ArrowRight
                    size={17}
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </Reveal>

          </div>
        </section>

        {/* =====================================
            05 — DEVOTIONAL PHOTO SECTION
        ===================================== */}

        <section
          className="pooja-page-feature"
          aria-labelledby="pooja-feature-title"
        >
          <div className="pooja-page-feature-container">

            <div className="pooja-page-feature-content">

              <Reveal direction="up" duration={800}>
                <p className="pooja-page-label pooja-inline-label">
                  <span aria-hidden="true" />
                  ക്ഷേത്ര ദൃശ്യങ്ങൾ
                </p>
              </Reveal>

              <Reveal
                direction="up"
                delay={100}
                duration={900}
              >
                <h2 id="pooja-feature-title">
                  ആരാധനയുടെ വിശേഷങ്ങൾ
                </h2>
              </Reveal>

              <Reveal
                direction="scale"
                delay={170}
                duration={800}
              >
                <div
                  className="pooja-page-gold-rule"
                  aria-hidden="true"
                >
                  <span />
                  <Flower2
                    size={16}
                    strokeWidth={1.4}
                  />
                </div>
              </Reveal>

              <Reveal
                direction="up"
                delay={200}
                duration={850}
              >
                <p className="pooja-feature-description">
                  ക്ഷേത്രവുമായി ബന്ധപ്പെട്ട ചിത്രങ്ങളും
                  ആരാധനാ ദൃശ്യങ്ങളും ഗാലറിയിലൂടെ
                  അടുത്തറിയാം.
                </p>
              </Reveal>

              <Reveal
                direction="up"
                delay={270}
                duration={850}
              >
                <Link
                  href="/gallery"
                  className="pooja-page-outline-button"
                >
                  <span>ഗാലറി കാണാം</span>
                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                  />
                </Link>
              </Reveal>

            </div>

            <Reveal
              direction="right"
              delay={120}
              duration={1050}
              className="pooja-feature-reveal"
            >
              <div className="pooja-page-feature-frame">

                <div className="pooja-page-feature-image">
                  <Image
                    src="/images/festival-2.webp"
                    alt="പരമ്പരാഗത ക്ഷേത്ര ദീപാലങ്കാരത്തിന്റെ ദൃശ്യാവിഷ്കാരം"
                    fill
                    sizes="(max-width: 750px) 90vw, 48vw"
                    className="pooja-feature-photo"
                  />
                </div>

                <span
                  className="pooja-feature-corner"
                  aria-hidden="true"
                />

              </div>
            </Reveal>

          </div>
        </section>

        {/* =====================================
            06 — CONTACT CTA
        ===================================== */}

        <section
          className="pooja-page-contact"
          aria-labelledby="pooja-contact-title"
        >
          <div className="pooja-page-contact-inner">

            <Reveal
              direction="scale"
              duration={850}
            >
              <div className="pooja-contact-icon">
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
              <p className="pooja-page-label">
                — ക്ഷേത്ര സന്ദർശനം —
              </p>
            </Reveal>

            <Reveal
              direction="up"
              delay={180}
              duration={900}
            >
              <h2 id="pooja-contact-title">
                ക്ഷേത്രത്തിലേക്ക് സ്വാഗതം
              </h2>
            </Reveal>

            <Reveal
              direction="scale"
              delay={230}
              duration={850}
            >
              <div
                className="pooja-dark-divider"
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
              <p className="pooja-contact-location">
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
                className="pooja-page-gold-button"
              >
                <span>ഞങ്ങളെ സമീപിക്കുക</span>
                <ArrowRight
                  size={18}
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
