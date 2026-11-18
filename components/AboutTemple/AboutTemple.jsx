import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import "./AboutTemple.css";

export default function AboutTemple() {
  return (
    <section className="about-temple" id="about">
      <div className="about-temple-container">
        {/* Left - Deity Image */}
        <div className="about-temple-image">
          <div className="about-image-frame">
            <Image
              src="/images/temple-deity.jpg"
              alt="ക്ഷേത്രത്തിലെ ദേവത"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="about-deity-photo"
            />
          </div>
        </div>

        {/* Right - Temple Information */}
        <div className="about-temple-content">
          <p className="about-temple-label">— ക്ഷേത്രത്തെ കുറിച്ച് —</p>

          <h2>
            കിഴുർ തെരു ശ്രീ
            <br />
            മഹാഗണപതി-ഭഗവതി ക്ഷേത്രം
          </h2>

          <p className="about-temple-description">
            കിഴുർ, പയ്യോളിയിൽ സ്ഥിതി ചെയ്യുന്ന ശ്രീ മഹാഗണപതി-ഭഗവതി
            ക്ഷേത്രത്തെക്കുറിച്ചുള്ള വിവരങ്ങളും ആചാരങ്ങളും വിശേഷങ്ങളും
            ഭക്തജനങ്ങളിലേക്ക് എത്തിക്കുന്നതിനുള്ള ഒരു ഡിജിറ്റൽ വേദിയാണിത്.
          </p>

          <Link href="/about" className="about-temple-button">
            കൂടുതൽ അറിയാം
            <ArrowRight size={18} strokeWidth={1.8} />
          </Link>
        </div>
      </div>
    </section>
  );
}
