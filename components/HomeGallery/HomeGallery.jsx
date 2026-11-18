
import Link from "next/link";
import Image from "next/image";

import {
  ArrowRight,
  Bell,
  MapPin,
} from "lucide-react";

import "./HomeGallery.css";

const galleryImages = [
  {
    src: "/images/temple-hero.webp",
    alt: "കേരളീയ ക്ഷേത്ര വാസ്തുവിദ്യ",
  },
  {
    src: "/images/festival-2.webp",
    alt: "ക്ഷേത്രത്തിലെ ദീപാലങ്കാരം",
  },
  {
    src: "/images/festival-1.webp",
    alt: "ക്ഷേത്രോത്സവ കാഴ്ചകൾ",
  },
];

export default function HomeGallery() {
  return (
    <section className="home-gallery">
      <div className="home-gallery-container">

        {/* Left - Gallery information */}
        <div className="home-gallery-intro">
          <p className="home-gallery-label">
            — ക്ഷേത്ര ദൃശ്യങ്ങൾ —
          </p>

          <h2>ക്ഷേത്ര ദൃശ്യങ്ങൾ</h2>

          <p>
            ക്ഷേത്രത്തിന്റെ മനോഹരമായ
            കാഴ്ചകളും ആഘോഷങ്ങളും കാണാം.
          </p>

          <Link
            href="/gallery"
            className="home-gallery-button"
          >
            ഗാലറി കാണാം
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Center - Image Gallery */}
        <div className="home-gallery-images">
          {galleryImages.map((image) => (
            <Link
              href="/gallery"
              key={image.src}
              className="home-gallery-image"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 600px) 33vw, 15vw"
              />
            </Link>
          ))}
        </div>

        {/* Right - Contact */}
        <div className="home-gallery-contact">
          <Bell
            size={24}
            strokeWidth={1.6}
            className="home-gallery-bell"
            aria-hidden="true"
          />

          <p className="home-gallery-label">
            — ബന്ധപ്പെടുക —
          </p>

          <h2>ഞങ്ങളെ സമീപിക്കുക</h2>

          <p>
            ക്ഷേത്രവുമായി ബന്ധപ്പെട്ട
            വിവരങ്ങൾക്കായി ഞങ്ങളെ ബന്ധപ്പെടാം.
          </p>

          <Link
            href="/contact"
            className="home-gallery-button"
          >
            ബന്ധപ്പെടാം
            <ArrowRight size={18} />
          </Link>

          <div className="home-gallery-location">
            <MapPin size={15} />
            <span>കിഴുർ, പയ്യോളി</span>
          </div>
        </div>

      </div>
    </section>
  );
}
