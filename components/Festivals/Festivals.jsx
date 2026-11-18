import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import "./Festivals.css";

const festivals = [
  {
    title: "ഉത്സവം",
    image: "/images/festival-1.webp",
  },
  {
    title: "നവരാത്രി",
    image: "/images/festival-2.webp",
  },
  {
    title: "വിശേഷ ആഘോഷങ്ങൾ",
    image: "/images/festival-3.webp",
  },
];

export default function Festivals() {
  return (
    <section className="home-festivals" id="festivals">
      <div className="home-festivals-container">
        <div className="home-festivals-content">
          <p className="festivals-label">— നമ്മുടെ ഉത്സവങ്ങൾ —</p>

          <h2>ഉത്സവ വിശേഷങ്ങൾ</h2>

          <p className="festivals-description">
            ക്ഷേത്രത്തിലെ ഉത്സവങ്ങളുടെയും ആഘോഷങ്ങളുടെയും വിശേഷങ്ങൾ അറിയാം.
          </p>

          <Link href="/festivals" className="festivals-button">
            ഉത്സവ കലണ്ടർ കാണാം
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="home-festival-cards">
          {festivals.map((festival) => (
            <Link
              href="/festivals"
              className="home-festival-card"
              key={festival.title}
            >
              <Image
                src={festival.image}
                alt={festival.title}
                fill
                sizes="(max-width: 650px) 85vw, (max-width: 900px) 30vw, 20vw"
                className="festival-card-image"
              />

              <div className="festival-card-overlay">
                <h3>{festival.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
