
import Link from "next/link";

import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  ArrowUpRight,
  Navigation,
  Flower2,
  Clock3,
  Landmark,
} from "lucide-react";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Reveal from "@/components/animations/Reveal";

import "./Contact.css";

/* =========================================
   SEO METADATA
========================================= */

export const metadata = {
  title:
    "ബന്ധപ്പെടുക | കിഴുർ തെരു ശ്രീ മഹാഗണപതി-ഭഗവതി ക്ഷേത്രം",
  description:
    "കിഴുർ തെരു ശ്രീ മഹാഗണപതി-ഭഗവതി ക്ഷേത്രത്തിന്റെ വിലാസവും ബന്ധപ്പെടാനുള്ള വിവരങ്ങളും.",
};

/* =========================================
   TEMPLE LOCATION
========================================= */

const templeMapUrl =
  "https://maps.app.goo.gl/j5E6nTA4kmctau7MA";

const templeMapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.44653884573!2d75.6339105!3d11.5197915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba689705bd935b7%3A0xe05e961d8eb40d16!2sKizhur%20theru%20bhagavathi%20Ganapathi%20kshetram!5e0!3m2!1sen!2sin";

/* =========================================
   CONTACT INFORMATION
========================================= */

const contactDetails = [
  {
    id: "phone",
    number: "01",
    icon: Phone,
    title: "ഫോൺ നമ്പർ",
    description: "+91 9562465095",
    href: "tel:+919562465095",
    action: "ഇപ്പോൾ വിളിക്കാം",
  },
  {
    id: "email",
    number: "02",
    icon: Mail,
    title: "ഇമെയിൽ",
    description: "abhicplash@gmail.com",
    href: "mailto:abhicplash@gmail.com",
    action: "ഇമെയിൽ അയയ്ക്കാം",
  },
  {
    id: "address",
    number: "03",
    icon: MapPin,
    title: "ക്ഷേത്ര വിലാസം",
    description: "കിഴുർ, പയ്യോളി",
    href: templeMapUrl,
    action: "ഗൂഗിൾ മാപ്പിൽ കാണാം",
  },
];

/* =========================================
   QUICK LINKS
========================================= */

const quickInformation = [
  {
    icon: Clock3,
    title: "പൂജകളും വഴിപാടുകളും",
    description:
      "പൂജാ വിവരങ്ങളും വഴിപാട് വിശദാംശങ്ങളും.",
    href: "/pooja-offerings",
  },
  {
    icon: Flower2,
    title: "ഉത്സവ വിശേഷങ്ങൾ",
    description:
      "ഉത്സവങ്ങളുടെയും ആഘോഷങ്ങളുടെയും വിവരങ്ങൾ.",
    href: "/festivals",
  },
];

/* =========================================
   CONTACT PAGE
========================================= */

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="contact-page">

        {/* =====================================
            01 — HERO
        ===================================== */}

        <section
          className="contact-page-hero"
          aria-labelledby="contact-page-title"
        >
          <div
            className="contact-hero-background"
            aria-hidden="true"
          />

          <div className="contact-hero-content">
            <Reveal direction="down" duration={900}>
              <p className="contact-hero-eyebrow">
                കിഴുർ തെരു ശ്രീ
                മഹാഗണപതി-ഭഗവതി ക്ഷേത്രം
              </p>
            </Reveal>

            <Reveal
              direction="up"
              delay={120}
              duration={1000}
            >
              <h1 id="contact-page-title">
                ബന്ധപ്പെടുക
              </h1>
            </Reveal>

            <Reveal
              direction="scale"
              delay={220}
              duration={850}
            >
              <div
                className="contact-hero-divider"
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
              delay={300}
              duration={850}
            >
              <nav
                className="contact-breadcrumb"
                aria-label="Breadcrumb"
              >
                <Link href="/">Home</Link>
                <span aria-hidden="true">/</span>
                <span>ബന്ധപ്പെടുക</span>
              </nav>
            </Reveal>
          </div>
        </section>

        {/* =====================================
            02 — CONTACT CARDS
        ===================================== */}

        <section
          className="contact-introduction"
          aria-labelledby="contact-intro-title"
        >
          <div className="contact-container">

            <div className="contact-section-heading">
              <Reveal direction="up" duration={850}>
                <p className="contact-section-label">
                  — ഞങ്ങളെ സമീപിക്കുക —
                </p>
              </Reveal>

              <Reveal
                direction="up"
                delay={90}
                duration={850}
              >
                <h2 id="contact-intro-title">
                  ക്ഷേത്രവുമായി ബന്ധപ്പെടാം
                </h2>
              </Reveal>

              <Reveal
                direction="up"
                delay={160}
                duration={850}
              >
                <p className="contact-heading-description">
                  ക്ഷേത്രവുമായി ബന്ധപ്പെട്ട പൂജാ
                  വിവരങ്ങൾ, വഴിപാടുകൾ, ഉത്സവ വിശേഷങ്ങൾ,
                  മറ്റ് ആവശ്യങ്ങൾ എന്നിവയ്ക്കായി ബന്ധപ്പെടാം.
                </p>
              </Reveal>

              <div
                className="contact-heading-ornament"
                aria-hidden="true"
              >
                <span />
                <Flower2
                  size={17}
                  strokeWidth={1.35}
                />
                <span />
              </div>
            </div>

            {/* OVERLAPPING CONTACT CARDS */}

            <div className="contact-info-grid">
              {contactDetails.map((item, index) => {
                const Icon = item.icon;
                const isFeatured = item.id === "email";

                return (
                  <Reveal
                    key={item.id}
                    direction="up"
                    delay={index * 120}
                    duration={850}
                    className={`contact-info-reveal ${
                      isFeatured
                        ? "contact-info-reveal-featured"
                        : ""
                    }`}
                  >
                    <article
                      className={`contact-info-card ${
                        isFeatured
                          ? "contact-info-card-featured"
                          : ""
                      }`}
                    >
                      <div className="contact-card-inner">

                        <span
                          className="contact-card-icon"
                          aria-hidden="true"
                        >
                          <Icon
                            size={22}
                            strokeWidth={1.5}
                          />
                        </span>

                        <span
                          className="contact-card-number"
                          aria-hidden="true"
                        >
                          {item.number}
                        </span>

                        <h3>{item.title}</h3>

                        {item.id === "address" ? (
                          <p className="contact-card-value">
                            കിഴുർ, പയ്യോളി
                            <br />
                            കോഴിക്കോട്, കേരളം
                            <br />
                            PIN – 673522
                          </p>
                        ) : (
                          <p className="contact-card-value">
                            {item.description}
                          </p>
                        )}

                        <a
                          href={item.href}
                          target={
                            item.id === "address"
                              ? "_blank"
                              : undefined
                          }
                          rel={
                            item.id === "address"
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="contact-card-action"
                        >
                          <span>{item.action}</span>
                          <ArrowUpRight
                            size={16}
                            strokeWidth={1.7}
                            aria-hidden="true"
                          />
                        </a>

                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>

          </div>
        </section>

        {/* =====================================
            03 — LOCATION & MAP
        ===================================== */}

        <section
          className="contact-location"
          aria-labelledby="contact-location-title"
        >
          <div className="contact-location-container">

            <div className="contact-location-content">

              <Reveal direction="up" duration={850}>
                <p className="contact-section-label contact-location-label">
                  <span
                    className="contact-label-line"
                    aria-hidden="true"
                  />
                  ക്ഷേത്രത്തിലേക്കുള്ള വഴി
                </p>
              </Reveal>

              <Reveal
                direction="up"
                delay={100}
                duration={900}
              >
                <h2 id="contact-location-title">
                  ക്ഷേത്രത്തിലേക്ക് എത്തിച്ചേരാം
                </h2>
              </Reveal>

              <Reveal
                direction="scale"
                delay={160}
                duration={850}
              >
                <div
                  className="contact-gold-rule"
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
                delay={200}
                duration={850}
              >
                <p className="contact-location-description">
                  കോഴിക്കോട് ജില്ലയിലെ
                  പയ്യോളിക്കടുത്തുള്ള കിഴൂരിലാണ്
                  ക്ഷേത്രം സ്ഥിതി ചെയ്യുന്നത്.
                </p>
              </Reveal>

              <Reveal
                direction="up"
                delay={250}
                duration={850}
              >
                <div className="contact-location-detail">
                  <MapPin
                    size={20}
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                  <span>
                    കിഴുർ, പയ്യോളി,
                    കോഴിക്കോട്, കേരളം
                  </span>
                </div>
              </Reveal>

              <Reveal
                direction="up"
                delay={310}
                duration={850}
              >
                <a
                  href={templeMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-directions-button"
                >
                  <Navigation
                    size={17}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                  <span>ഗൂഗിൾ മാപ്പിൽ കാണാം</span>
                  <ArrowUpRight
                    size={17}
                    aria-hidden="true"
                  />
                </a>
              </Reveal>

            </div>

            <Reveal
              direction="right"
              delay={130}
              duration={1000}
              className="contact-map-reveal"
            >
              <div className="contact-map-frame">
                <div className="contact-map-embed">
                  <iframe
                    title="കിഴുർ തെരു ശ്രീ മഹാഗണപതി-ഭഗവതി ക്ഷേത്രം - Google Maps"
                    src={templeMapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
                <span
                  className="contact-map-corner"
                  aria-hidden="true"
                />
              </div>
            </Reveal>

          </div>
        </section>

        {/* =====================================
            04 — ADDITIONAL INFORMATION
        ===================================== */}

        <section
          className="contact-help"
          aria-labelledby="contact-help-title"
        >
          <div className="contact-help-container">

            <div className="contact-help-heading">
              <Reveal direction="up" duration={850}>
                <p className="contact-section-label">
                  — കൂടുതൽ വിവരങ്ങൾ —
                </p>
              </Reveal>

              <Reveal
                direction="up"
                delay={100}
                duration={850}
              >
                <h2 id="contact-help-title">
                  ക്ഷേത്ര വിവരങ്ങൾ
                </h2>
              </Reveal>

              <div
                className="contact-heading-ornament"
                aria-hidden="true"
              >
                <span />
                <Flower2
                  size={17}
                  strokeWidth={1.4}
                />
                <span />
              </div>

              <Reveal
                direction="up"
                delay={170}
                duration={850}
              >
                <p className="contact-help-description">
                  പൂജകളും ഉത്സവങ്ങളും സംബന്ധിച്ച
                  വിവരങ്ങൾ മറ്റു പേജുകളിലൂടെയും അറിയാം.
                </p>
              </Reveal>
            </div>

            <div className="contact-help-grid">
              {quickInformation.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal
                    key={item.href}
                    direction="up"
                    delay={index * 130}
                    duration={850}
                    className="contact-help-reveal"
                  >
                    <Link
                      href={item.href}
                      className="contact-help-card"
                    >
                      <span
                        className="contact-help-icon"
                        aria-hidden="true"
                      >
                        <Icon
                          size={26}
                          strokeWidth={1.45}
                        />
                      </span>

                      <div className="contact-help-text">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>

                      <span
                        className="contact-help-arrow"
                        aria-hidden="true"
                      >
                        <ArrowRight
                          size={18}
                          strokeWidth={1.7}
                        />
                      </span>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================
            05 — FINAL WELCOME
        ===================================== */}

        <section
          className="contact-final-cta"
          aria-labelledby="contact-welcome-title"
        >
          <div className="contact-final-inner">

            <Reveal direction="scale" duration={850}>
              <div className="contact-final-icon">
                <Landmark
                  size={32}
                  strokeWidth={1.35}
                  aria-hidden="true"
                />
              </div>
            </Reveal>

            <Reveal
              direction="up"
              delay={100}
              duration={850}
            >
              <p className="contact-section-label">
                — സുസ്വാഗതം —
              </p>
            </Reveal>

            <Reveal
              direction="up"
              delay={180}
              duration={900}
            >
              <h2 id="contact-welcome-title">
                ക്ഷേത്രത്തിലേക്ക് സ്വാഗതം
              </h2>
            </Reveal>

            <div
              className="contact-final-divider"
              aria-hidden="true"
            >
              <span />
              ✦
              <span />
            </div>

            <Reveal
              direction="up"
              delay={270}
              duration={850}
            >
              <p className="contact-final-description">
                കിഴുർ തെരു ശ്രീ
                മഹാഗണപതി-ഭഗവതി ക്ഷേത്രം
              </p>
            </Reveal>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
