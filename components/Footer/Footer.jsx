
import Link from "next/link";

import {
  Landmark,
  MapPin,
  Phone,
  Mail,
  Heart,
  ArrowUpRight,
} from "lucide-react";

import "./Footer.css";

const templeMapUrl =
  "https://maps.app.goo.gl/j5E6nTA4kmctau7MA";

export default function Footer() {
  return (
    <footer className="temple-footer">
      {/* SUBTLE TOP GOLD LINE */}
      <div
        className="footer-top-accent"
        aria-hidden="true"
      />

      <div className="temple-footer-main">

        {/* =====================================
            TEMPLE IDENTITY
        ===================================== */}

        <div className="footer-brand">
          <Link
            href="/"
            className="footer-logo"
            aria-label="ഹോം പേജിലേക്ക്"
          >
            <Landmark
              size={43}
              strokeWidth={1.3}
              aria-hidden="true"
            />
          </Link>

          <div className="footer-temple-name">
            <span>കിഴുർ തെരു ശ്രീ</span>
            <span>
              മഹാഗണപതി-ഭഗവതി ക്ഷേത്രം
            </span>

            <span
              className="footer-brand-underline"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* =====================================
            CONTACT INFORMATION
        ===================================== */}

        <div className="footer-contact">

          <a
            href={templeMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-contact-item"
          >
            <MapPin
              size={18}
              strokeWidth={1.6}
              aria-hidden="true"
            />

            <span>
              കിഴുർ, പയ്യോളി, കോഴിക്കോട്
            </span>
          </a>

          <a
            href="tel:+919562465095"
            className="footer-contact-item"
          >
            <Phone
              size={17}
              strokeWidth={1.6}
              aria-hidden="true"
            />

            <span>+91 95624 65095</span>
          </a>

          <a
            href="mailto:abhicplash@gmail.com"
            className="footer-contact-item"
          >
            <Mail
              size={17}
              strokeWidth={1.6}
              aria-hidden="true"
            />

            <span>abhicplash@gmail.com</span>
          </a>

        </div>

        {/* =====================================
            SOCIAL MEDIA
        ===================================== */}

        <div className="footer-social">
          <p>ഞങ്ങളെ പിന്തുടരുക</p>

          <div className="footer-social-icons">

            {/* YouTube - placeholder */}
            <span
              className="footer-social-placeholder"
              title="YouTube - coming soon"
              role="img"
              aria-label="YouTube"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.5v-7l6.2 3.5-6.2 3.5Z" />
              </svg>
            </span>

            {/* Facebook - placeholder */}
            <span
              className="footer-social-placeholder"
              title="Facebook - coming soon"
              role="img"
              aria-label="Facebook"
            >
              <strong className="footer-facebook-icon">
                f
              </strong>
            </span>

            {/* Instagram - placeholder */}
            <span
              className="footer-social-placeholder"
              title="Instagram - coming soon"
              role="img"
              aria-label="Instagram"
            >
              <svg
                viewBox="0 0 24 24"
                width="19"
                height="19"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="5"
                />

                <circle
                  cx="12"
                  cy="12"
                  r="4"
                />

                <circle
                  cx="18"
                  cy="6"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </span>

          </div>
        </div>

        {/* =====================================
            CONTACT BUTTON
        ===================================== */}

        <div className="footer-action">
          <Link
            href="/contact"
            className="footer-contact-button"
          >
            <Heart
              size={17}
              strokeWidth={1.6}
              aria-hidden="true"
            />

            <span>
              ക്ഷേത്രവുമായി ബന്ധപ്പെടുക
            </span>

            <ArrowUpRight
              className="footer-action-arrow"
              size={15}
              strokeWidth={1.6}
              aria-hidden="true"
            />
          </Link>
        </div>

      </div>

      {/* =====================================
          SIMPLE GOLD DIVIDER
          NO LOTUS
      ===================================== */}

      <div
        className="footer-gold-divider"
        aria-hidden="true"
      />

      {/* =====================================
          FOOTER BOTTOM
      ===================================== */}

      <div className="temple-footer-bottom">

        <p>
          © {new Date().getFullYear()} കിഴുർ തെരു ശ്രീ
          മഹാഗണപതി-ഭഗവതി ക്ഷേത്രം.
          എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം.
        </p>

        <div className="footer-bottom-links">
          <Link href="/privacy-policy">
            Privacy Policy
          </Link>

          <span aria-hidden="true">|</span>

          <Link href="/terms">
            Terms of Service
          </Link>
        </div>

      </div>
    </footer>
  );
}
