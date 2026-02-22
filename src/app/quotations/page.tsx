import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Link from "next/link";

const quotations = [
  {
    id: "QT-4429",
    title: "Construction Supplies — MENA",
    status: "Open",
    statusColor: "#4CAF50",
    statusBg: "#E8F5E9",
    offers: 3,
    due: "3h 42m",
  },
  {
    id: "QT-4421",
    title: "Textile Fibers — EU",
    status: "Under Review",
    statusColor: "#1976D2",
    statusBg: "#E3F2FD",
    offers: 4,
    due: "Closed",
  },
  {
    id: "QT-4418",
    title: "Olive Oil (Extra Virgin) — UK",
    status: "Pending",
    statusColor: "#E65100",
    statusBg: "#FFF3E0",
    offers: 1,
    due: "2d 8h",
  },
  {
    id: "QT-4405",
    title: "Solar Glass Panels — Africa",
    status: "Draft",
    statusColor: "#666666",
    statusBg: "#F0F0EF",
    offers: 0,
    due: "—",
  },
];

export default function QuotationsPage() {
  return (
    <>
      <Navbar />
      <div className="r-container">
        <div className="r-page-grid-2">
          <Sidebar active="Quotations" />
          <main>
            <div className="r-page-header">
              <h1
                style={{
                  fontSize: 32,
                  letterSpacing: "-0.04em",
                  fontWeight: 600,
                }}
              >
                Quotations
              </h1>
              <Link
                href="/quotations/submit"
                style={{
                  padding: "14px 28px",
                  borderRadius: "var(--radius-btn)",
                  fontSize: 14,
                  fontWeight: 600,
                  background: "var(--accent-orange)",
                  color: "white",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                Submit New Quote
              </Link>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {quotations.map((q) => (
                <Link
                  key={q.id}
                  href={q.id === "QT-4429" ? "/quotations/submit" : "#"}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div
                    className="r-quotation-item"
                    style={{
                      background: "white",
                      borderRadius: "var(--radius-card)",
                      padding: "24px 32px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      transition: "box-shadow 0.2s",
                      cursor: "pointer",
                    }}
                  >
                    <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
                      <div>
                        <div
                          style={{
                            fontSize: 12,
                            color: "var(--text-secondary)",
                            marginBottom: 4,
                          }}
                        >
                          #{q.id}
                        </div>
                        <div style={{ fontSize: 16, fontWeight: 600 }}>
                          {q.title}
                        </div>
                      </div>
                    </div>
                    <div
                      className="r-quotation-meta"
                      style={{
                        display: "flex",
                        gap: 32,
                        alignItems: "center",
                      }}
                    >
                      <div style={{ textAlign: "right" }}>
                        <div
                          style={{
                            fontSize: 12,
                            color: "var(--text-secondary)",
                          }}
                        >
                          {q.offers} offer{q.offers !== 1 ? "s" : ""}
                        </div>
                        <div
                          style={{ fontSize: 12, color: "var(--text-secondary)" }}
                        >
                          Due: {q.due}
                        </div>
                      </div>
                      <span
                        style={{
                          padding: "4px 10px",
                          borderRadius: 4,
                          fontSize: 11,
                          fontWeight: 600,
                          textTransform: "uppercase",
                          background: q.statusBg,
                          color: q.statusColor,
                        }}
                      >
                        {q.status}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
