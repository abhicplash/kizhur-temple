
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Menu,
  X,
  Landmark,
  Lamp,
  ArrowUpRight,
} from "lucide-react";

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
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  /* =========================================
     SCROLL EFFECT
  ========================================= */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================
     CLOSE MENU ON PAGE CHANGE
  ========================================= */

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  /* =========================================
     CLOSE MENU WITH ESCAPE
  ========================================= */

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [isOpen]);

  /* =========================================
     ACTIVE LINK CHECK
  ========================================= */

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }

    return (
      pathname === href ||
      pathname.startsWith(`${href}/`)
    );
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

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
          aria-label="കിഴുർ തെരു ശ്രീ മഹാഗണപതി-ഭഗവതി ക്ഷേത്രം - Home"
        >
          <span
            className="brand-logo"
            aria-hidden="true"
          >
            <Landmark
              size={31}
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
            NAVIGATION
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
                  scroll={true}
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

          {/* =====================================
              TEMPLE OFFERING BUTTON
          ===================================== */}

          <Link
            href="/donate"
            scroll={true}
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
            <Lamp
              size={18}
              strokeWidth={1.5}
              aria-hidden="true"
            />

            <span>Offer to Temple</span>

            <ArrowUpRight
              size={14}
              strokeWidth={1.5}
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
            MOBILE MENU TOGGLE
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
          onClick={() => {
            setIsOpen((previous) => !previous);
          }}
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
