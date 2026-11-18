import Link from "next/link";
import Image from "next/image";

import {
  ArrowRight,
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

import "./PoojaOfferingsPage.css";

export const metadata = {
  title: "പൂജകളും വഴിപാടുകളും | കിഴുർ തെരു ശ്രീ മഹാഗണപതി-ഭഗവതി ക്ഷേത്രം",
  description:
    "കിഴുർ തെരു ശ്രീ മഹാഗണപതി-ഭഗവതി ക്ഷേത്രത്തിലെ പൂജകളും വഴിപാടുകളും സംബന്ധിച്ച വിവരങ്ങൾ.",
};

// Sample categories from our homepage.
// Final offerings and their availability must be
// confirmed by the temple committee.

const offerings = [
  {
    id: 1,
    icon: Flame,
    title: "നിത്യപൂജ",
    description: "നിത്യപൂജയുമായി ബന്ധപ്പെട്ട വിവരങ്ങളും വിശദാംശങ്ങളും അറിയാം.",
  },
  {
    id: 2,
    icon: Lamp,
    title: "അഭിഷേകം",
    description:
      "അഭിഷേകവുമായി ബന്ധപ്പെട്ട വിവരങ്ങളും ലഭ്യതയും ക്ഷേത്രവുമായി ബന്ധപ്പെട്ട് അറിയാം.",
  },
  {
    id: 3,
    icon: HandHeart,
    title: "അർച്ചന",
    description: "അർച്ചന സംബന്ധിച്ച വിവരങ്ങളും ആവശ്യമായ വിശദാംശങ്ങളും അറിയാം.",
  },
  {
    id: 4,
    icon: Flower2,
    title: "വിശേഷ പൂജകൾ",
    description: "വിശേഷ പൂജകളുടെയും ചടങ്ങുകളുടെയും വിവരങ്ങൾ ലഭ്യമാക്കുന്നതാണ്.",
  },
  {
    id: 5,
    icon: Gift,
    title: "സമർപ്പണം",
    description: "വഴിപാടുകളും സമർപ്പണങ്ങളും സംബന്ധിച്ച വിവരങ്ങൾ അറിയാം.",
  },
];

export default function PoojaOfferingsPage() {
  return (
    <>
      <Navbar />

      <main className="pooja-page">
        {/* =====================================
            HERO
        ===================================== */}

        <section className="pooja-page-hero">
          <div className="pooja-page-hero-content">
            <p className="pooja-page-hero-intro">
              കിഴുർ തെരു ശ്രീ മഹാഗണപതി-ഭഗവതി ക്ഷേത്രം
            </p>

            <h1>പൂജകളും വഴിപാടുകളും</h1>

            <div className="pooja-page-hero-divider" aria-hidden="true">
              <span />
              <Flower2 size={20} strokeWidth={1.5} />
              <span />
            </div>

            <nav className="pooja-page-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span>പൂജകളും വഴിപാടുകളും</span>
            </nav>
          </div>
        </section>

        {/* =====================================
            INTRODUCTION
        ===================================== */}

        <section className="pooja-page-intro">
          <div className="pooja-page-intro-container">
            <div className="pooja-page-intro-image">
              <Image
                src="/images/temple-deity.jpg"
                alt="ക്ഷേത്ര ആരാധനയെ പ്രതിനിധീകരിക്കുന്ന ദേവതാ ചിത്രം"
                fill
                sizes="(max-width: 750px) 90vw, 42vw"
                className="pooja-page-intro-photo"
              />

              <div className="pooja-page-image-accent" aria-hidden="true">
                ✦
              </div>
            </div>

            <div className="pooja-page-intro-text">
              <p className="pooja-page-label">— പൂജകളും സേവനങ്ങളും —</p>

              <h2>പൂജാ വിവരങ്ങൾ</h2>

              <div className="pooja-page-gold-rule" />

              <p>
                കിഴുർ തെരു ശ്രീ മഹാഗണപതി-ഭഗവതി ക്ഷേത്രത്തിലെ പൂജകളും വഴിപാടുകളും
                സംബന്ധിച്ച വിവരങ്ങൾ ഭക്തജനങ്ങൾക്ക് എളുപ്പത്തിൽ
                ലഭ്യമാക്കുന്നതിനായാണ് ഈ വിഭാഗം ഒരുക്കിയിരിക്കുന്നത്.
              </p>

              <p>
                പൂജകളുടെ വിശദാംശങ്ങൾ, സമയക്രമം, വഴിപാട് നിരക്കുകൾ, മറ്റ്
                ആവശ്യമായ വിവരങ്ങൾ എന്നിവ ക്ഷേത്ര കമ്മിറ്റിയുടെ സ്ഥിരീകരണത്തിന്
                ശേഷം ഇവിടെ പ്രസിദ്ധീകരിക്കുന്നതാണ്.
              </p>

              <Link href="/contact" className="pooja-page-outline-button">
                കൂടുതൽ വിവരങ്ങൾക്ക്
                <ArrowRight size={18} strokeWidth={1.8} />
              </Link>
            </div>
          </div>
        </section>

        {/* =====================================
            OFFERINGS GRID
        ===================================== */}

        <section className="pooja-page-offerings">
          <div className="pooja-page-offerings-container">
            <div className="pooja-page-section-heading">
              <p className="pooja-page-label">— പൂജകളും വഴിപാടുകളും —</p>

              <h2>പൂജകളും സേവനങ്ങളും</h2>

              <p>
                ക്ഷേത്രത്തിലെ പൂജകളെയും വഴിപാടുകളെയും കുറിച്ചുള്ള കൂടുതൽ
                വിവരങ്ങൾക്കായി ക്ഷേത്രവുമായി ബന്ധപ്പെടുക.
              </p>
            </div>

            <div className="pooja-page-offering-grid">
              {offerings.map((offering) => {
                const Icon = offering.icon;

                return (
                  <article
                    className="pooja-page-offering-card"
                    key={offering.id}
                  >
                    <div className="pooja-page-offering-icon">
                      <Icon size={34} strokeWidth={1.45} aria-hidden="true" />
                    </div>

                    <h3>{offering.title}</h3>

                    <p>{offering.description}</p>

                    <Link href="/contact" className="pooja-page-card-link">
                      വിവരങ്ങൾ അറിയാം
                      <ArrowRight size={17} strokeWidth={1.8} />
                    </Link>
                  </article>
                );
              })}
            </div>

            <p className="pooja-page-offerings-note">
              <Info size={17} aria-hidden="true" />
              <span>
                ഇവിടെ നൽകിയിരിക്കുന്നത് മാതൃകാ വിഭാഗങ്ങളാണ്. ഔദ്യോഗിക പൂജാ
                പട്ടിക ക്ഷേത്ര കമ്മിറ്റിയുടെ സ്ഥിരീകരണത്തിന് ശേഷം
                പുതുക്കുന്നതാണ്.
              </span>
            </p>
          </div>
        </section>

        {/* =====================================
            TIMINGS AND INFORMATION
        ===================================== */}

        <section className="pooja-page-information">
          <div className="pooja-page-information-container">
            <div className="pooja-page-information-header">
              <p className="pooja-page-label">— ക്ഷേത്ര വിവരങ്ങൾ —</p>

              <h2>പൂജാ സമയവും വിവരങ്ങളും</h2>

              <p>
                പൂജാ സമയക്രമവും വഴിപാട് നിരക്കുകളും സംബന്ധിച്ച ഔദ്യോഗിക വിവരങ്ങൾ
                ഇവിടെ ലഭ്യമാക്കുന്നതാണ്.
              </p>
            </div>

            <div className="pooja-page-info-grid">
              <div className="pooja-page-info-card">
                <Clock3 size={32} strokeWidth={1.5} aria-hidden="true" />

                <h3>പൂജാ സമയങ്ങൾ</h3>

                <p>ഔദ്യോഗിക സമയക്രമം ലഭ്യമാകാനുണ്ട്.</p>
              </div>

              <div className="pooja-page-info-card">
                <CalendarDays size={32} strokeWidth={1.5} aria-hidden="true" />

                <h3>വിശേഷ പൂജകൾ</h3>

                <p>
                  വിശേഷ പൂജകളുടെ വിവരങ്ങളും തീയതികളും പിന്നീട് ചേർക്കുന്നതാണ്.
                </p>
              </div>

              <div className="pooja-page-info-card">
                <HandHeart size={32} strokeWidth={1.5} aria-hidden="true" />

                <h3>വഴിപാട് വിവരങ്ങൾ</h3>

                <p>ഔദ്യോഗിക വഴിപാട് പട്ടികയും നിരക്കുകളും ലഭ്യമാകാനുണ്ട്.</p>
              </div>
            </div>

            <div className="pooja-page-info-action">
              <Link href="/contact" className="pooja-page-gold-button">
                <Phone size={17} aria-hidden="true" />
                ക്ഷേത്രവുമായി ബന്ധപ്പെടുക
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* =====================================
            DEVOTIONAL PHOTO SECTION
        ===================================== */}

        <section className="pooja-page-feature">
          <div className="pooja-page-feature-container">
            <div className="pooja-page-feature-content">
              <p className="pooja-page-label">— ക്ഷേത്ര ദൃശ്യങ്ങൾ —</p>

              <h2>ആരാധനയുടെ വിശേഷങ്ങൾ</h2>

              <p>
                ക്ഷേത്രവുമായി ബന്ധപ്പെട്ട ചിത്രങ്ങളും ആരാധനാ ദൃശ്യങ്ങളും
                ഗാലറിയിലൂടെ അടുത്തറിയാം.
              </p>

              <Link href="/gallery" className="pooja-page-outline-button">
                ഗാലറി കാണാം
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="pooja-page-feature-image">
              <Image
                src="/images/festival-2.webp"
                alt="പരമ്പരാഗത ക്ഷേത്ര ദീപാലങ്കാരത്തിന്റെ ദൃശ്യാവിഷ്കാരം"
                fill
                sizes="(max-width: 750px) 90vw, 48vw"
              />
            </div>
          </div>
        </section>

        {/* =====================================
            CONTACT CTA
        ===================================== */}

        <section className="pooja-page-contact">
          <div className="pooja-page-contact-inner">
            <MapPin size={30} strokeWidth={1.5} aria-hidden="true" />

            <p className="pooja-page-label">— ക്ഷേത്ര സന്ദർശനം —</p>

            <h2>ക്ഷേത്രത്തിലേക്ക് സ്വാഗതം</h2>

            <p>കിഴുർ, പയ്യോളി, കോഴിക്കോട്</p>

            <Link href="/contact" className="pooja-page-gold-button">
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
