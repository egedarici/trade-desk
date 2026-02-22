"use client";

import Link from "next/link";

const navLinks = [
  { label: "Dashboard", href: "/" },
  { label: "Orders", href: "/orders" },
  { label: "Markets", href: "/markets" },
  { label: "Quotations", href: "/quotations" },
];

export default function Navbar() {
  return (
    <nav
      style={{
        padding: "24px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        background: "rgba(232, 231, 229, 0.9)",
        backdropFilter: "blur(10px)",
        zIndex: 100,
      }}
    >
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
        Trade
        <span style={{ color: "var(--accent-orange)" }}>—</span>
        Desk
      </Link>

      {/* Nav Links */}
      <div style={{ display: "flex", gap: 32 }}>
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            style={{
              textDecoration: "none",
              color: "var(--text-primary)",
              fontSize: 14,
              fontWeight: 500,
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* User Profile */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "6px 16px",
          background: "white",
          borderRadius: "var(--radius-btn)",
        }}
      >
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
    </nav>
  );
}
