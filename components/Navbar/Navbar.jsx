
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Menu,
  X,
  Landmark,
  HeartHandshake,
  ArrowUpRight,
} from "lucide-react";

import "./Navbar.css";

/* =========================================
   NAVIGATION LINKS
========================================= */

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Festivals", href: "/festivals" },
  { name: "Pooja & Offerings", href: "/pooja-offerings" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

/* =========================================
   NAVBAR
========================================= */

export default function Navbar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    updateScroll();

    window.addEventListener("scroll", updateScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  const isActive = (href) =>
    href === "/"
      ? pathname === "/"
      : pathname === href ||
        pathname.startsWith(`${href}/`);

  return (
    <header
      className={[
        "temple-navbar",
        isScrolled ? "temple-navbar-scrolled" : "",
        isOpen ? "temple-navbar-menu-open" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="temple-navbar-inner">

        {/* =====================================
            TEMPLE BRAND
        ===================================== */}

        <Link
          href="/"
          className="temple-brand"
          onClick={closeMenu}
          aria-label="കിഴുർ തെരു ശ്രീ മഹാഗണപതി-ഭഗവതി ക്ഷേത്രം — Home"
        >
          <span className="brand-logo" aria-hidden="true">
            <Landmark
              size={32}
              strokeWidth={1.25}
            />
          </span>

          <span className="brand-name">
            <span className="brand-name-first">
              കിഴുർ തെരു ശ്രീ
            </span>

            <span className="brand-name-second">
              മഹാഗണപതി-ഭഗവതി ക്ഷേത്രം
            </span>
          </span>
        </Link>

        {/* =====================================
            DESKTOP + MOBILE NAVIGATION
        ===================================== */}

        <nav
          id="temple-primary-navigation"
          className={`temple-nav-links ${
            isOpen ? "open" : ""
          }`}
          aria-label="Primary navigation"
        >
          <div className="temple-nav-menu-heading">
            <span>Navigation</span>
            <span aria-hidden="true">✦</span>
          </div>

          <div className="temple-nav-menu-items">
            {links.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`temple-nav-link ${
                    active ? "active" : ""
                  }`}
                  aria-current={
                    active ? "page" : undefined
                  }
                  onClick={closeMenu}
                >
                  <span>{link.name}</span>

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.5}
                    className="temple-nav-link-arrow"
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </div>

          {/* DONATE */}

          <Link
            href="/donate"
            className={`temple-donate ${
              isActive("/donate") ? "active" : ""
            }`}
            aria-current={
              isActive("/donate")
                ? "page"
                : undefined
            }
            onClick={closeMenu}
          >
            <HeartHandshake
              size={17}
              strokeWidth={1.65}
              aria-hidden="true"
            />

            <span>Donate</span>

            <ArrowUpRight
              size={14}
              strokeWidth={1.6}
              className="temple-donate-arrow"
              aria-hidden="true"
            />
          </Link>

          <div className="temple-nav-mobile-footer">
            കിഴുർ തെരു ശ്രീ
            മഹാഗണപതി-ഭഗവതി ക്ഷേത്രം
          </div>
        </nav>

        {/* =====================================
            MOBILE TOGGLE
        ===================================== */}

        <button
          type="button"
          className={`temple-menu-toggle ${
            isOpen ? "is-active" : ""
          }`}
          aria-label={
            isOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={isOpen}
          aria-controls="temple-primary-navigation"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <X
              size={23}
              strokeWidth={1.6}
              aria-hidden="true"
            />
          ) : (
            <Menu
              size={23}
              strokeWidth={1.6}
              aria-hidden="true"
            />
          )}
        </button>

      </div>
    </header>
  );
}
