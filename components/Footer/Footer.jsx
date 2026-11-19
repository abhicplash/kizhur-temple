
import Image from "next/image";
import Link from "next/link";

import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  Lamp,
} from "lucide-react";

import "./Footer.css";

const templeLinks = [
  { name: "Home", href: "/" },
  { name: "About Temple", href: "/about" },
  { name: "Festivals", href: "/festivals" },
  { name: "Pooja & Offerings", href: "/pooja-offerings" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const templeMapUrl =
  "https://maps.app.goo.gl/j5E6nTA4kmctau7MA";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="temple-footer">

      <div className="temple-footer-main">

        {/* BRAND */}

        <div className="temple-footer-brand-col">

          <Link
            href="/"
            className="temple-footer-brand"
          >
            <span
              className="temple-footer-logo"
              aria-hidden="true"
            >
              <Image
                src="/images/temple-emblem.png"
                alt=""
                width={180}
                height={120}
                className="temple-footer-logo-image"
              />
            </span>

            <span className="temple-footer-brand-name">
              <span>കിഴുർ തെരു ശ്രീ</span>
              <strong>
                മഹാഗണപതി-ഭഗവതി ക്ഷേത്രം
              </strong>
            </span>
          </Link>

          <p className="temple-footer-description">
            കിഴുർ, പയ്യോളി,
            കോഴിക്കോട്, കേരളം.
          </p>

          <div
            className="temple-footer-brand-rule"
            aria-hidden="true"
          />
        </div>

        {/* QUICK LINKS */}

        <div className="temple-footer-column">
          <h2>Explore</h2>

          <nav
            className="temple-footer-links"
            aria-label="Footer navigation"
          >
            {templeLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                scroll={true}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* CONTACT */}

        <div className="temple-footer-column">
          <h2>ബന്ധപ്പെടുക</h2>

          <div className="temple-footer-contact">

            <a href="tel:+919562465095">
              <Phone
                size={17}
                aria-hidden="true"
              />
              <span>+91 9562465095</span>
            </a>

            <a href="mailto:abhicplash@gmail.com">
              <Mail
                size={17}
                aria-hidden="true"
              />
              <span>abhicplash@gmail.com</span>
            </a>

            <a
              href={templeMapUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin
                size={18}
                aria-hidden="true"
              />

              <span>
                കിഴുർ, പയ്യോളി
                <br />
                കോഴിക്കോട്, കേരളം
                <br />
                PIN – 673522
              </span>
            </a>

          </div>
        </div>

        {/* OFFERING */}

        <div className="temple-footer-column temple-footer-offering">
          <h2>സമർപ്പണം</h2>

          <p>
            ക്ഷേത്ര സമർപ്പണങ്ങളും
            സംഭാവനകളും സംബന്ധിച്ച
            വിവരങ്ങൾക്ക്.
          </p>

          <Link
            href="/donate"
            className="temple-footer-offer-link"
          >
            <Lamp
              size={18}
              strokeWidth={1.5}
              aria-hidden="true"
            />

            <span>Offer to Temple</span>

            <ArrowUpRight
              size={16}
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>

      {/* FINE GOLD DIVIDER */}

      <div
        className="temple-footer-divider"
        aria-hidden="true"
      />

      {/* FOOTER BOTTOM */}

      <div className="temple-footer-bottom">
        <p>
          © {year} കിഴുർ തെരു ശ്രീ
          മഹാഗണപതി-ഭഗവതി ക്ഷേത്രം.
          All rights reserved.
        </p>

        <p className="temple-footer-bottom-location">
          Kizhur · Payyoli · Kerala
        </p>
      </div>

    </footer>
  );
}
