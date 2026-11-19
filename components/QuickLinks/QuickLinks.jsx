
import Link from "next/link";

import {
  Flower2,
  CalendarDays,
  HandHeart,
  BookOpen,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import "./QuickLinks.css";

/* =========================================
   QUICK LINKS DATA
========================================= */

const quickLinks = [
  {
    title: "പൂജാവിവരം",
    href: "/pooja-offerings",
    icon: Flower2,
  },
  {
    title: "ഉത്സവ കലണ്ടർ",
    href: "/festivals",
    icon: CalendarDays,
  },
  {
    title: "ദാനസമർപ്പണം",
    href: "/donate",
    icon: HandHeart,
  },
  {
    title: "നാഴികകൾ",
    href: "/about",
    icon: BookOpen,
  },
  {
    title: "ഞങ്ങളെ സമീപിക്കുക",
    href: "/contact",
    icon: MapPin,
  },
];

/* =========================================
   QUICK LINKS COMPONENT
========================================= */

export default function QuickLinks() {
  return (
    <section
      className="quick-links-section"
      aria-label="ക്ഷേത്ര സേവനങ്ങൾ"
    >
      <div className="quick-links-container">

        {quickLinks.map((item, index) => {
          const Icon = item.icon;

          return (
            <Link
              href={item.href}
              className="quick-link-item"
              key={item.title}
              style={{
                "--quick-link-index": index,
              }}
            >
              {/* Subtle gold hover background */}
              <span
                className="quick-link-hover-bg"
                aria-hidden="true"
              />

              {/* Icon */}
              <span className="quick-link-icon-wrap">
                <Icon
                  className="quick-link-icon"
                  size={27}
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
              </span>

              {/* Label */}
              <span className="quick-link-label">
                {item.title}
              </span>

              {/* Subtle directional icon */}
              <ArrowUpRight
                className="quick-link-arrow"
                size={13}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </Link>
          );
        })}

      </div>
    </section>
  );
}
