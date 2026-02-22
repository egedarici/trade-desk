"use client";

import { useRouter } from "next/navigation";

interface QuotationCardProps {
  rfqLabel: string;
  value: string;
  valueNote?: string;
  offersCount: string;
  ctaLabel: string;
  ctaPrimary?: boolean;
  href?: string;
}

export default function QuotationCard({
  rfqLabel,
  value,
  valueNote,
  offersCount,
  ctaLabel,
  ctaPrimary = true,
  href,
}: QuotationCardProps) {
  const router = useRouter();
  return (
    <div
      style={{
        border: "1px solid #F0F0F0",
        borderRadius: 16,
        padding: 20,
      }}
    >
      <div
        style={{
          color: "var(--text-secondary)",
          fontSize: 12,
          marginBottom: 8,
        }}
      >
        {rfqLabel}
      </div>
      <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>
        {value}{" "}
        {valueNote && (
          <span style={{ fontSize: 14, fontWeight: 400, color: "var(--text-secondary)" }}>
            {valueNote}
          </span>
        )}
      </div>
      <div style={{ fontSize: 13, color: "var(--text-secondary)" }}>
        {offersCount}
      </div>
      <button
        onClick={() => { if (href) router.push(href); }}
        style={{
          width: "100%",
          marginTop: 16,
          padding: "10px 20px",
          borderRadius: "var(--radius-btn)",
          fontSize: 13,
          fontWeight: 500,
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          border: ctaPrimary ? "none" : "1px solid rgba(0,0,0,0.1)",
          background: ctaPrimary ? "var(--accent-orange)" : "transparent",
          color: ctaPrimary ? "white" : "var(--text-primary)",
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) => {
          if (ctaPrimary)
            (e.currentTarget as HTMLButtonElement).style.background =
              "var(--accent-orange-hover)";
        }}
        onMouseLeave={(e) => {
          if (ctaPrimary)
            (e.currentTarget as HTMLButtonElement).style.background =
              "var(--accent-orange)";
        }}
      >
        {ctaLabel}
      </button>
    </div>
  );
}
