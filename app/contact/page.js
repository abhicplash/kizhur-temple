
import Link from "next/link";

import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Navigation,
  Flower2,
  Clock3,
  Landmark,
  ExternalLink,
} from "lucide-react";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

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
   TEMPLE GOOGLE MAPS LOCATION
========================================= */

const templeMapUrl =
  "https://maps.app.goo.gl/j5E6nTA4kmctau7MA";

/* =========================================
   CONTACT PAGE
========================================= */

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="contact-page">

        {/* =====================================
            CONTACT HERO
        ===================================== */}

        <section className="contact-page-hero">
          <div className="contact-hero-content">

            <p className="contact-hero-eyebrow">
              കിഴുർ തെരു ശ്രീ
              മഹാഗണപതി-ഭഗവതി ക്ഷേത്രം
            </p>

            <h1>ബന്ധപ്പെടുക</h1>

            <div
              className="contact-hero-divider"
              aria-hidden="true"
            >
              <span />
              <Flower2
                size={20}
                strokeWidth={1.5}
              />
              <span />
            </div>

            <nav
              className="contact-breadcrumb"
              aria-label="Breadcrumb"
            >
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span>ബന്ധപ്പെടുക</span>
            </nav>

          </div>
        </section>

        {/* =====================================
            CONTACT INTRODUCTION
        ===================================== */}

        <section className="contact-introduction">
          <div className="contact-container">

            <div className="contact-section-heading">
              <p className="contact-section-label">
                — ഞങ്ങളെ സമീപിക്കുക —
              </p>

              <h2>ക്ഷേത്രവുമായി ബന്ധപ്പെടാം</h2>

              <p>
                ക്ഷേത്രവുമായി ബന്ധപ്പെട്ട
                പൂജാ വിവരങ്ങൾ, വഴിപാടുകൾ,
                ഉത്സവ വിശേഷങ്ങൾ, മറ്റ്
                ആവശ്യങ്ങൾ എന്നിവയ്ക്കായി
                ബന്ധപ്പെടാം.
              </p>

              <div
                className="contact-heading-ornament"
                aria-hidden="true"
              >
                <span />
                <Flower2
                  size={18}
                  strokeWidth={1.5}
                />
                <span />
              </div>
            </div>

            {/* =====================================
                CONTACT CARDS
            ===================================== */}

            <div className="contact-info-grid">

              {/* ADDRESS */}
              <article className="contact-info-card">
                <div className="contact-info-icon">
                  <MapPin
                    size={30}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>

                <h3>ക്ഷേത്ര വിലാസം</h3>

                <p>
                  കിഴുർ തെരു ശ്രീ
                  <br />
                  മഹാഗണപതി-ഭഗവതി ക്ഷേത്രം
                  <br />
                  കിഴുർ, പയ്യോളി
                  {/* <br />
                  കോഴിക്കോട്, കേരളം */}
                  <br/>
                  673522
                </p>

                <a
                  href={templeMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card-action"
                >
                  ഗൂഗിൾ മാപ്പിൽ കാണാം
                  <ExternalLink size={16} />
                </a>
              </article>

              {/* PHONE */}
              <article className="contact-info-card">
                <div className="contact-info-icon">
                  <Phone
                    size={30}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>

                <h3>ഫോൺ നമ്പർ</h3>

                <p>
                 +91-9562465095
                </p>

                {/* <span className="contact-pending">
                  വിവരങ്ങൾ ലഭ്യമാകാനുണ്ട്
                </span> */}
              </article>

              {/* EMAIL */}
              <article className="contact-info-card">
                <div className="contact-info-icon">
                  <Mail
                    size={30}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>

                <h3>ഇമെയിൽ</h3>

                <p>
                 abhicplash@gmail.com
                </p>

                {/* <span className="contact-pending">
                  വിവരങ്ങൾ ലഭ്യമാകാനുണ്ട്
                </span> */}
              </article>

            </div>
          </div>
        </section>

        {/* =====================================
            LOCATION SECTION
        ===================================== */}

        <section className="contact-location">
          <div className="contact-location-container">

            <div className="contact-location-content">

              <p className="contact-section-label">
                — ക്ഷേത്രത്തിലേക്കുള്ള വഴി —
              </p>

              <h2>ക്ഷേത്രത്തിലേക്ക് എത്തിച്ചേരാം</h2>

              <div className="contact-gold-rule" />

              <p>
                കോഴിക്കോട് ജില്ലയിലെ
                പയ്യോളിക്കടുത്തുള്ള കിഴൂരിലാണ്
                ക്ഷേത്രം സ്ഥിതി ചെയ്യുന്നത്.
              </p>

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

              <a
                href={templeMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-directions-button"
              >
                <Navigation size={18} />
                ഗൂഗിൾ മാപ്പിൽ കാണാം
                <ArrowRight size={18} />
              </a>
            </div>

            {/* =====================================
                MAP INFORMATION PANEL
            ===================================== */}

            <div className="contact-map-panel">

              <div
                className="contact-map-decoration"
                aria-hidden="true"
              >
                <Landmark
                  size={65}
                  strokeWidth={1.1}
                />
              </div>

              <div className="contact-map-content">
                <div className="contact-map-pin">
                  <MapPin
                    size={30}
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                </div>

                <h3>
                  കിഴുർ തെരു ശ്രീ
                  <span>
                    മഹാഗണപതി-ഭഗവതി ക്ഷേത്രം
                  </span>
                </h3>

                <p>
                  കിഴുർ, പയ്യോളി,
                  കോഴിക്കോട്, കേരളം
                </p>

                <a
                  href={templeMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ലൊക്കേഷൻ കാണാം
                  <ExternalLink size={16} />
                </a>
              </div>

              <span className="contact-map-corner top-left" />
              <span className="contact-map-corner bottom-right" />

            </div>
          </div>
        </section>

        {/* =====================================
            TEMPLE INFORMATION
        ===================================== */}

        <section className="contact-help">
          <div className="contact-help-container">

            <div className="contact-help-heading">
              <p className="contact-section-label">
                — കൂടുതൽ വിവരങ്ങൾ —
              </p>

              <h2>ക്ഷേത്ര വിവരങ്ങൾ</h2>

              <p>
                പൂജകളും ഉത്സവങ്ങളും സംബന്ധിച്ച
                വിവരങ്ങൾ മറ്റു പേജുകളിലൂടെയും
                അറിയാം.
              </p>
            </div>

            <div className="contact-help-grid">

              {/* POOJA & OFFERINGS */}
              <Link
                href="/pooja-offerings"
                className="contact-help-card"
              >
                <div className="contact-help-icon">
                  <Clock3
                    size={28}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>

                <h3>പൂജകളും വഴിപാടുകളും</h3>

                <p>
                  പൂജാ വിവരങ്ങളും
                  വഴിപാട് വിശദാംശങ്ങളും.
                </p>

                <span className="contact-help-arrow">
                  <ArrowRight size={19} />
                </span>
              </Link>

              {/* FESTIVALS */}
              <Link
                href="/festivals"
                className="contact-help-card"
              >
                <div className="contact-help-icon">
                  <Flower2
                    size={28}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>

                <h3>ഉത്സവ വിശേഷങ്ങൾ</h3>

                <p>
                  ഉത്സവങ്ങളുടെയും
                  ആഘോഷങ്ങളുടെയും വിവരങ്ങൾ.
                </p>

                <span className="contact-help-arrow">
                  <ArrowRight size={19} />
                </span>
              </Link>

            </div>
          </div>
        </section>

        {/* =====================================
            FINAL CTA
        ===================================== */}

        <section className="contact-final-cta">
          <div className="contact-final-inner">

            <Landmark
              size={38}
              strokeWidth={1.3}
              aria-hidden="true"
            />

            <p className="contact-section-label">
              — സ്വാഗതം —
            </p>

            <h2>ക്ഷേത്രത്തിലേക്ക് സ്വാഗതം</h2>

            <p>
              കിഴുർ തെരു ശ്രീ
              മഹാഗണപതി-ഭഗവതി ക്ഷേത്രം
            </p>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
