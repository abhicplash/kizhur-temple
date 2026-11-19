
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import Reveal from "@/components/animations/Reveal";

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
    <section
      className="home-festivals"
      id="festivals"
      aria-labelledby="home-festivals-heading"
    >
      <div className="home-festivals-container">

        {/* LEFT — FESTIVAL INTRODUCTION */}
        <Reveal
          direction="left"
          duration={950}
          className="home-festivals-content-reveal"
        >
          <div className="home-festivals-content">

            <p className="festivals-label">
              <span
                className="festivals-label-line"
                aria-hidden="true"
              />
              നമ്മുടെ ഉത്സവങ്ങൾ
            </p>

            <h2 id="home-festivals-heading">
              ഉത്സവ വിശേഷങ്ങൾ
            </h2>

            <div
              className="festivals-gold-divider"
              aria-hidden="true"
            >
              <span className="festivals-gold-line" />
              <span>✦</span>
            </div>

            <p className="festivals-description">
              ക്ഷേത്രത്തിലെ ഉത്സവങ്ങളുടെയും
              ആഘോഷങ്ങളുടെയും വിശേഷങ്ങൾ അറിയാം.
            </p>

            <Link
              href="/festivals"
              className="festivals-button"
            >
              <span>ഉത്സവ കലണ്ടർ കാണാം</span>
              <ArrowRight
                size={18}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </Link>

          </div>
        </Reveal>

        {/* RIGHT — FESTIVAL CARDS */}
        <div className="home-festival-cards">

          {festivals.map((festival, index) => (
            <Reveal
              key={festival.title}
              direction="up"
              delay={index * 130}
              duration={900}
              className="home-festival-card-reveal"
            >
              <Link
                href="/festivals"
                className="home-festival-card"
                aria-label={`${festival.title} — കൂടുതൽ അറിയാം`}
              >
                <Image
                  src={festival.image}
                  alt={festival.title}
                  fill
                  sizes="(max-width: 650px) 78vw, (max-width: 900px) 30vw, 20vw"
                  className="festival-card-image"
                />

                {/* Image shading for title readability */}
                <div
                  className="festival-card-overlay"
                >
                  <span
                    className="festival-card-gold-line"
                    aria-hidden="true"
                  />

                  <h3>{festival.title}</h3>

                  <ArrowUpRight
                    className="festival-card-arrow"
                    size={19}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </div>
              </Link>
            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
}
