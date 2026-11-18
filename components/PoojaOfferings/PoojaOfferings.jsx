
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
    <section className="home-pooja" id="pooja">
      {/* Decorative lamp - does not affect the layout */}
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
        <div className="home-pooja-content">
          <p className="pooja-label">
            — പൂജകളും സേവനങ്ങളും —
          </p>

          <h2>പൂജാ വിവരങ്ങൾ</h2>

          <p className="pooja-description">
            ക്ഷേത്രത്തിലെ പൂജകളെയും വഴിപാടുകളെയും
            കുറിച്ചുള്ള വിവരങ്ങൾ അറിയാം.
          </p>

          <Link
            href="/pooja-offerings"
            className="pooja-button"
          >
            വിവരങ്ങൾ കാണാം
            <ArrowRight
              size={18}
              strokeWidth={1.8}
            />
          </Link>
        </div>

        <div className="home-pooja-cards">
          {offerings.map((offering) => {
            const Icon = offering.icon;

            return (
              <Link
                href="/pooja-offerings"
                className="home-pooja-card"
                key={offering.title}
              >
                <Icon
                  size={35}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />

                <h3>{offering.title}</h3>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
