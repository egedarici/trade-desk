"use client";

import Link from "next/link";

const navItems = [
  { label: "Overview", href: "/" },
  { label: "Active Orders", href: "/orders" },
  { label: "Quotations", href: "/quotations" },
  { label: "Suppliers", href: "/suppliers" },
  { label: "Market Intelligence", href: "/markets" },
  { label: "Settings", href: "/settings" },
];

interface SidebarProps {
  active?: string;
}

export default function Sidebar({ active = "Overview" }: SidebarProps) {
  return (
    <aside className="r-sidebar">
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          style={{
            padding: "12px 16px",
            borderRadius: 12,
            textDecoration: "none",
            color: item.label === active ? "var(--text-primary)" : "var(--text-secondary)",
            fontWeight: 500,
            fontSize: 14,
            background: item.label === active ? "white" : "transparent",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            if (item.label !== active) {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "rgba(255,255,255,0.5)";
            }
          }}
          onMouseLeave={(e) => {
            if (item.label !== active) {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "transparent";
            }
          }}
        >
          {item.label}
        </Link>
      ))}

      {/* Bottom support block */}
      <div style={{ marginTop: "auto", padding: "24px 16px" }}>
        <div
          style={{
            fontSize: 12,
            color: "var(--text-secondary)",
            marginBottom: 8,
          }}
        >
          Support ID: #4402
        </div>
        <a
          href="#"
          style={{
            padding: "10px 20px",
            borderRadius: "var(--radius-btn)",
            fontSize: 13,
            fontWeight: 500,
            cursor: "pointer",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            background: "transparent",
            border: "1px solid rgba(0,0,0,0.1)",
            color: "var(--text-primary)",
          }}
        >
          Help Desk
        </a>
      </div>
    </aside>
  );
}
