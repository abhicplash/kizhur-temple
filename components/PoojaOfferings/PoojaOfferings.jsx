
import Link from "next/link";
import Image from "next/image";

import {
  ArrowRight,
  Flame,
  Lamp,
  HandHeart,
  Flower2,
  Gift,
} from "lucide-react";

import Reveal from "@/components/animations/Reveal";

import "./PoojaOfferings.css";

const offerings = [
  { title: "നിത്യപൂജ", icon: Flame },
  { title: "അഭിഷേകം", icon: Lamp },
  { title: "അർച്ചന", icon: HandHeart },
  { title: "വിശേഷ പൂജകൾ", icon: Flower2 },
  { title: "സമർപ്പണം", icon: Gift },
];

export default function PoojaOfferings() {
  return (
    <section
      className="home-pooja"
      id="pooja"
      aria-labelledby="home-pooja-heading"
    >
      {/* =====================================
          DECORATIVE BRASS LAMP
      ===================================== */}

      <div
        className="pooja-lamp-decoration"
        aria-hidden="true"
      >
        <Image
          src="/images/pooja-lamp-clean.webp"
          alt=""
          width={1024}
          height={1536}
          className="pooja-lamp-image"
        />
      </div>

      <div className="home-pooja-container">

        {/* =====================================
            LEFT — POOJA INFORMATION
        ===================================== */}

        <Reveal
          direction="up"
          duration={900}
          className="home-pooja-content-reveal"
        >
          <div className="home-pooja-content">

            <p className="pooja-label">
              — പൂജകളും സേവനങ്ങളും —
            </p>

            <h2 id="home-pooja-heading">
              പൂജാ വിവരങ്ങൾ
            </h2>

            <div
              className="pooja-gold-divider"
              aria-hidden="true"
            >
              <span className="pooja-gold-line" />
              <span className="pooja-gold-symbol">
                ✦
              </span>
            </div>

            <p className="pooja-description">
              ക്ഷേത്രത്തിലെ പൂജകളെയും
              വഴിപാടുകളെയും കുറിച്ചുള്ള
              വിവരങ്ങൾ അറിയാം.
            </p>

            <Link
              href="/pooja-offerings"
              className="pooja-button"
            >
              <span>വിവരങ്ങൾ കാണാം</span>

              <ArrowRight
                size={18}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </Link>

          </div>
        </Reveal>

        {/* =====================================
            RIGHT — FIVE OFFERING CARDS
        ===================================== */}

        <Reveal
          direction="up"
          delay={130}
          duration={950}
          className="home-pooja-cards-reveal"
        >
          <div className="home-pooja-cards">

            {offerings.map((offering, index) => {
              const Icon = offering.icon;

              return (
                <Link
                  href="/pooja-offerings"
                  className="home-pooja-card"
                  key={offering.title}
                  style={{
                    "--pooja-card-index": index,
                  }}
                >
                  <span
                    className="home-pooja-card-icon"
                    aria-hidden="true"
                  >
                    <Icon
                      size={32}
                      strokeWidth={1.5}
                    />
                  </span>

                  <h3>{offering.title}</h3>

                  <span
                    className="home-pooja-card-accent"
                    aria-hidden="true"
                  />

                </Link>
              );
            })}

          </div>
        </Reveal>

      </div>
    </section>
  );
}
