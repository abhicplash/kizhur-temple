
import Link from "next/link";
import {
  Flower2,
  CalendarDays,
  HandHeart,
  BookOpen,
  MapPin,
} from "lucide-react";

import "./QuickLinks.css";

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

export default function QuickLinks() {
  return (
    <section
      className="quick-links-section"
      aria-label="ക്ഷേത്ര സേവനങ്ങൾ"
    >
      <div className="quick-links-container">
        {quickLinks.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              href={item.href}
              className="quick-link-item"
              key={item.title}
            >
              <Icon
                className="quick-link-icon"
                size={29}
                strokeWidth={1.7}
                aria-hidden="true"
              />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
