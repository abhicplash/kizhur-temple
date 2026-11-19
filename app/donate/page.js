import Link from "next/link";
import Image from "next/image";

import {
  Lamp,
  Flower2,
  ArrowRight,
  ArrowUpRight,
  Landmark,
  HandHeart,
  Sparkles,
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  Info,
} from "lucide-react";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Reveal from "@/components/animations/Reveal";

import "./DonatePage.css";

export const metadata = {
  title: "സമർപ്പണം | കിഴുർ തെരു ശ്രീ മഹാഗണപതി-ഭഗവതി ക്ഷേത്രം",
  description:
    "കിഴുർ തെരു ശ്രീ മഹാഗണപതി-ഭഗവതി ക്ഷേത്രവുമായി ബന്ധപ്പെട്ട സമർപ്പണ വിവരങ്ങളും ക്ഷേത്ര സംഭാവന സംബന്ധിച്ച വിശദാംശങ്ങളും.",
};

const contributions = [
  {
    id: "01",
    icon: Lamp,
    title: "ദീപ സമർപ്പണം",
    description:
      "ദീപ സമർപ്പണവുമായി ബന്ധപ്പെട്ട വിവരങ്ങളും നടപടിക്രമങ്ങളും ക്ഷേത്രവുമായി ബന്ധപ്പെട്ട് അറിയാം.",
  },
  {
    id: "02",
    icon: Flower2,
    title: "പൂജാ സമർപ്പണം",
    description: "പൂജകളോടും വഴിപാടുകളോടും ബന്ധപ്പെട്ട സമർപ്പണ വിവരങ്ങൾ അറിയാം.",
  },
  {
    id: "03",
    icon: Landmark,
    title: "ക്ഷേത്ര സംഭാവന",
    description:
      "ക്ഷേത്രവുമായി ബന്ധപ്പെട്ട പൊതുസംഭാവനകളെക്കുറിച്ചും ലഭ്യമായ മാർഗങ്ങളെക്കുറിച്ചും അറിയാം.",
  },
];

export default function DonatePage() {
  return (
    <>
      <Navbar />

      <main className="donate-page">
        {/* =====================================
            01 — HERO
        ===================================== */}

        <section className="donate-hero" aria-labelledby="donate-page-heading">
          <div className="donate-hero-background" aria-hidden="true" />

          <div className="donate-hero-inner">
            <Reveal direction="down" duration={850}>
              <p className="donate-hero-eyebrow">
                കിഴുർ തെരു ശ്രീ മഹാഗണപതി-ഭഗവതി ക്ഷേത്രം
              </p>
            </Reveal>

            <Reveal direction="up" delay={100} duration={950}>
              <h1 id="donate-page-heading">സമർപ്പണം</h1>
            </Reveal>

            <Reveal direction="scale" delay={190} duration={800}>
              <div className="donate-hero-ornament" aria-hidden="true">
                <span />
                <Lamp size={23} strokeWidth={1.35} />
                <span />
              </div>
            </Reveal>

            <Reveal direction="up" delay={260} duration={800}>
              <p className="donate-hero-description">
                ക്ഷേത്ര സമർപ്പണങ്ങളും സംഭാവന വിവരങ്ങളും
              </p>
            </Reveal>

            <Reveal direction="up" delay={320} duration={800}>
              <nav className="donate-breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span aria-hidden="true">/</span>
                <span>സമർപ്പണം</span>
              </nav>
            </Reveal>
          </div>
        </section>

        {/* =====================================
            02 — INTRODUCTION
        ===================================== */}

        <section
          className="donate-intro"
          aria-labelledby="donate-intro-heading"
        >
          <div className="donate-intro-container">
            <Reveal
              direction="left"
              duration={1000}
              className="donate-intro-image-reveal"
            >
              <div className="donate-intro-image-frame">
                <div className="donate-intro-image">
                  <Image
                    src="/images/pooja-lamp-clean.webp"
                    alt="പരമ്പരാഗത നിലവിളക്ക്"
                    fill
                    sizes="(max-width: 760px) 88vw, 38vw"
                    className="donate-intro-photo"
                  />
                </div>

                <span className="donate-image-corner" aria-hidden="true" />
              </div>
            </Reveal>

            <div className="donate-intro-content">
              <Reveal direction="up" duration={850}>
                <p className="donate-eyebrow">
                  <span aria-hidden="true" />
                  ക്ഷേത്ര സമർപ്പണം
                </p>
              </Reveal>

              <Reveal direction="up" delay={90} duration={850}>
                <h2 id="donate-intro-heading">സമർപ്പണ വിവരങ്ങൾ</h2>
              </Reveal>

              <Reveal direction="scale" delay={150} duration={750}>
                <div className="donate-small-rule" aria-hidden="true">
                  <span />✦
                </div>
              </Reveal>

              <Reveal direction="up" delay={180} duration={850}>
                <p className="donate-intro-copy">
                  കിഴുർ തെരു ശ്രീ മഹാഗണപതി-ഭഗവതി ക്ഷേത്രവുമായി ബന്ധപ്പെട്ട
                  സമർപ്പണങ്ങളുടെയും സംഭാവനകളുടെയും വിവരങ്ങൾ ഭക്തജനങ്ങൾക്ക്
                  ലഭ്യമാക്കുന്നതിനാണ് ഈ വിഭാഗം ഒരുക്കിയിരിക്കുന്നത്.
                </p>
              </Reveal>

              <Reveal direction="up" delay={230} duration={850}>
                <p className="donate-intro-copy">
                  സമർപ്പണങ്ങളുടെ ലഭ്യത, നടപടിക്രമങ്ങൾ, ഔദ്യോഗിക പണമടയ്ക്കൽ
                  വിവരങ്ങൾ എന്നിവ ക്ഷേത്ര കമ്മിറ്റിയുടെ സ്ഥിരീകരണത്തിന് ശേഷം
                  ഇവിടെ പ്രസിദ്ധീകരിക്കുന്നതാണ്.
                </p>
              </Reveal>

              <Reveal direction="up" delay={290} duration={850}>
                <Link href="/contact" className="donate-outline-button">
                  <span>കൂടുതൽ വിവരങ്ങൾക്ക്</span>
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        {/* =====================================
            03 — CONTRIBUTION CATEGORIES
        ===================================== */}

        <section
          className="donate-categories"
          aria-labelledby="donate-categories-heading"
        >
          <div className="donate-container">
            <Reveal direction="up" duration={850}>
              <div className="donate-section-heading">
                <p className="donate-eyebrow">— സമർപ്പണ വിഭാഗങ്ങൾ —</p>

                <h2 id="donate-categories-heading">ക്ഷേത്ര സമർപ്പണങ്ങൾ</h2>

                <div className="donate-section-divider" aria-hidden="true">
                  <span />
                  <Flower2 size={17} />
                  <span />
                </div>

                <p>
                  സമർപ്പണങ്ങളുമായി ബന്ധപ്പെട്ട കൂടുതൽ വിവരങ്ങൾ ക്ഷേത്രവുമായി
                  ബന്ധപ്പെട്ട് അറിയാം.
                </p>
              </div>
            </Reveal>

            <div className="donate-cards">
              {contributions.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal
                    key={item.id}
                    direction="up"
                    delay={index * 110}
                    duration={850}
                    className="donate-card-reveal"
                  >
                    <article className="donate-card">
                      <div className="donate-card-top">
                        <span className="donate-card-icon">
                          <Icon
                            size={27}
                            strokeWidth={1.4}
                            aria-hidden="true"
                          />
                        </span>

                        <span className="donate-card-number">{item.id}</span>
                      </div>

                      <h3>{item.title}</h3>

                      <span className="donate-card-rule" aria-hidden="true" />

                      <p>{item.description}</p>

                      <Link href="/contact" className="donate-card-link">
                        വിവരങ്ങൾ അറിയാം
                        <ArrowUpRight size={17} aria-hidden="true" />
                      </Link>
                    </article>
                  </Reveal>
                );
              })}
            </div>

            {/* <p className="donate-categories-note">
              <Info size={17} aria-hidden="true" />
              <span>
                ഇവ മാതൃകാ വിഭാഗങ്ങളാണ്. ഔദ്യോഗിക സമർപ്പണ പട്ടിക സ്ഥിരീകരിച്ച
                ശേഷം പുതുക്കുന്നതാണ്.
              </span>
            </p> */}
          </div>
        </section>

        {/* =====================================
            04 — PAYMENT INFORMATION
        ===================================== */}

        <section
          className="donate-payment"
          aria-labelledby="donate-payment-heading"
        >
          <div className="donate-container">
            <Reveal direction="up" duration={850}>
              <div className="donate-section-heading donate-section-heading-dark">
                <p className="donate-eyebrow">— ഔദ്യോഗിക വിവരങ്ങൾ —</p>

                <h2 id="donate-payment-heading">
                  സമർപ്പണം നടത്തുന്നതിനുള്ള വിവരങ്ങൾ
                </h2>

                <div className="donate-section-divider" aria-hidden="true">
                  <span />
                  ✦
                  <span />
                </div>

                <p>
                  സുരക്ഷിതമായ സമർപ്പണങ്ങൾക്കായി ക്ഷേത്രത്തിന്റെ സ്ഥിരീകരിച്ച
                  വിവരങ്ങൾ മാത്രം ഉപയോഗിക്കുക.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={120} duration={900}>
              <div className="donate-payment-panel">
                <div className="donate-payment-emblem">
                  <ShieldCheck
                    size={33}
                    strokeWidth={1.35}
                    aria-hidden="true"
                  />
                </div>

                <h3>ഔദ്യോഗിക പേയ്‌മെന്റ് വിവരങ്ങൾ</h3>

                <p>
                  ക്ഷേത്രത്തിന്റെ ഔദ്യോഗിക UPI, ബാങ്ക് അക്കൗണ്ട്, മറ്റ്
                  പേയ്‌മെന്റ് മാർഗങ്ങൾ എന്നിവ സ്ഥിരീകരണത്തിന് ശേഷം ഇവിടെ
                  ലഭ്യമാക്കുന്നതാണ്.
                </p>

                <div className="donate-payment-status">
                  <Info size={17} aria-hidden="true" />
                  സ്ഥിരീകരിച്ച പേയ്‌മെന്റ് വിവരങ്ങൾ ലഭ്യമാകാനുണ്ട്
                </div>

                <Link href="/contact" className="donate-gold-button">
                  <span>ക്ഷേത്രവുമായി ബന്ധപ്പെടുക</span>
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* =====================================
            05 — CONTACT / VISIT
        ===================================== */}

        <section
          className="donate-contact"
          aria-labelledby="donate-contact-heading"
        >
          <div className="donate-contact-container">
            <Reveal direction="up" duration={850}>
              <div className="donate-contact-symbol">
                <HandHeart size={29} strokeWidth={1.4} aria-hidden="true" />
              </div>
            </Reveal>

            <Reveal direction="up" delay={100} duration={850}>
              <p className="donate-eyebrow">— ക്ഷേത്രവുമായി ബന്ധപ്പെടുക —</p>
            </Reveal>

            <Reveal direction="up" delay={170} duration={900}>
              <h2 id="donate-contact-heading">കൂടുതൽ വിവരങ്ങൾക്ക്</h2>
            </Reveal>

            <Reveal direction="up" delay={230} duration={850}>
              <p className="donate-contact-copy">
                സമർപ്പണങ്ങൾ സംബന്ധിച്ച സംശയങ്ങൾക്കും വിവരങ്ങൾക്കും ക്ഷേത്രവുമായി
                ബന്ധപ്പെടാം.
              </p>
            </Reveal>

            <Reveal direction="up" delay={290} duration={850}>
              <div className="donate-contact-actions">
                <a href="tel:+919562465095" className="donate-gold-button">
                  <Phone size={17} aria-hidden="true" />
                  <span>+91 9562465095</span>
                </a>

                <a
                  href="mailto:abhicplash@gmail.com"
                  className="donate-outline-button"
                >
                  <Mail size={17} aria-hidden="true" />
                  <span>ഇമെയിൽ അയയ്ക്കാം</span>
                </a>
              </div>
            </Reveal>

            <div className="donate-contact-location">
              <MapPin size={16} aria-hidden="true" />
              <span>കിഴുർ, പയ്യോളി, കോഴിക്കോട്</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
