
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="temple-hero" id="home">
      <div className="hero-content">
        <p className="hero-intro">
          ശ്രീ മഹാഗണപതി-ഭഗവതി
          <br />
          ക്ഷേത്രത്തിലേക്ക്
        </p>

        <h1 className="hero-title">
          സ്വാഗതം...
        </h1>

        {/* <p className="hero-description">
          ഭക്തിയുടെ സമാധാനത്തിലേക്ക്,
          <br />
          സംസ്കാരത്തിന്റെ നിലയിലേക്ക്...
        </p> */}

        <div className="hero-divider" aria-hidden="true">
          <span />
          <span className="hero-divider-symbol">✦</span>
          <span />
        </div>

        <Link href="/about" className="hero-button">
          <span>ക്ഷേത്രത്തെ കുറിച്ച് അറിയാം</span>
          <ArrowRight size={19} strokeWidth={1.8} />
        </Link>
      </div>
    </section>
  );
}
