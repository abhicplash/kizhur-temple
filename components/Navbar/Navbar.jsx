
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Landmark } from "lucide-react";
import "./Navbar.css";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Festivals", href: "/festivals" },
  { name: "Pooja & Offerings", href: "/pooja-offerings" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="temple-navbar">
      <Link href="/" className="temple-brand">
        <div className="brand-logo">
          <Landmark size={43} strokeWidth={1.4} />
        </div>

        <div className="brand-name">
          <span>കിഴുർ തെരു ശ്രീ</span>
          <span>മഹാഗണപതി-ഭഗവതി ക്ഷേത്രം</span>
        </div>
      </Link>

      <nav className={`temple-nav-links ${isOpen ? "open" : ""}`}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={pathname === link.href ? "active" : ""}
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}

        <Link
          href="/donate"
          className="temple-donate"
          onClick={() => setIsOpen(false)}
        >
          <span>♟</span> Donate
        </Link>
      </nav>

      <button
        className="temple-menu-toggle"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>
    </header>
  );
}
