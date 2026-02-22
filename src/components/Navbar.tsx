"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Dashboard", href: "/" },
  { label: "Orders", href: "/orders" },
  { label: "Markets", href: "/markets" },
  { label: "Quotations", href: "/quotations" },
];

const sidebarLinks = [
  { label: "Overview", href: "/" },
  { label: "Active Orders", href: "/orders" },
  { label: "Quotations", href: "/quotations" },
  { label: "Suppliers", href: "/suppliers" },
  { label: "Market Intelligence", href: "/markets" },
  { label: "Settings", href: "/settings" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="r-nav">
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            display: "flex",
            alignItems: "center",
            gap: 4,
            textDecoration: "none",
            color: "inherit",
          }}
        >
          Yorka
          <span style={{ color: "var(--accent-orange)" }}>—</span>
          Global
        </Link>

        {/* Desktop Nav Links */}
        <div className="r-nav-links">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* User Profile (desktop) */}
        <div className="r-nav-profile">
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 13, fontWeight: 600 }}>
              Atlas Logistics Ltd.
            </div>
            <div style={{ fontSize: 11, color: "var(--text-secondary)" }}>
              Verified Supplier
            </div>
          </div>
          <div
            style={{
              width: 36,
              height: 36,
              background: "var(--circle-grey)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 600,
              fontSize: 12,
            }}
          >
            AL
          </div>
        </div>

        {/* Hamburger (tablet/mobile) */}
        <button
          className="r-hamburger"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div className={`r-mobile-menu${menuOpen ? " open" : ""}`}>
        <div className="r-mobile-menu-header">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            style={{
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              display: "flex",
              alignItems: "center",
              gap: 4,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            Yorka
            <span style={{ color: "var(--accent-orange)" }}>—</span>
            Global
          </Link>
          <button
            className="r-mobile-menu-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <div className="r-mobile-menu-links">
          {sidebarLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile user info */}
        <div
          style={{
            marginTop: "auto",
            padding: "24px 16px",
            borderTop: "1px solid rgba(0,0,0,0.05)",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              background: "var(--circle-grey)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 600,
              fontSize: 12,
            }}
          >
            AL
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600 }}>
              Atlas Logistics Ltd.
            </div>
            <div style={{ fontSize: 11, color: "var(--text-secondary)" }}>
              Verified Supplier
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
