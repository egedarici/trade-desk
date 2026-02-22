import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import MarketCard from "@/components/MarketCard";

const trendingMarkets = [
  { iconColor: "#E2DBD5", name: "Turkish Pistachio", signal: "Supply Surplus", signalAccent: true },
  { iconColor: "#D4D8E2", name: "Solar Glass", signal: "New Verified Suppliers", signalAccent: false },
  { iconColor: "#D5E2DB", name: "Hemp Fabric", signal: "Price Drop -4%", signalAccent: true },
  { iconColor: "#E2DBD5", name: "Olive Oil (EV)", signal: "Seasonal Peak", signalAccent: true },
  { iconColor: "#D4D8E2", name: "Steel Wire Rod", signal: "Stable Supply", signalAccent: false },
  { iconColor: "#D5E2DB", name: "Raw Hazelnuts", signal: "Demand Rising", signalAccent: true },
];

const regions = [
  { name: "Europe", demand: "High", color: "#1976D2" },
  { name: "Middle East & North Africa", demand: "Growing", color: "#4CAF50" },
  { name: "Sub-Saharan Africa", demand: "Emerging", color: "#FFA000" },
  { name: "Central Asia", demand: "Moderate", color: "#666666" },
];

export default function MarketsPage() {
  return (
    <>
      <Navbar />
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 40px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "240px 1fr",
            gap: 32,
            padding: "40px 0 100px",
          }}
        >
          <Sidebar active="Market Intelligence" />
          <main>
            <h1
              style={{
                fontSize: 32,
                letterSpacing: "-0.04em",
                fontWeight: 600,
                marginBottom: 8,
              }}
            >
              Market Intelligence
            </h1>
            <p
              style={{
                fontSize: 14,
                color: "var(--text-secondary)",
                marginBottom: 40,
              }}
            >
              Global market snapshot — demand signals, supply trends, and
              seasonal opportunities.
            </p>

            {/* Trending Markets */}
            <section style={{ marginBottom: 48 }}>
              <h2
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  marginBottom: 20,
                  letterSpacing: "-0.04em",
                }}
              >
                Trending Markets
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: 16,
                }}
              >
                {trendingMarkets.map((m) => (
                  <MarketCard
                    key={m.name}
                    iconColor={m.iconColor}
                    name={m.name}
                    signal={m.signal}
                    signalAccent={m.signalAccent}
                  />
                ))}
              </div>
            </section>

            {/* Global Demand Regions */}
            <section>
              <h2
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  marginBottom: 20,
                  letterSpacing: "-0.04em",
                }}
              >
                Global Demand Regions
              </h2>
              <div
                style={{
                  background: "white",
                  borderRadius: "var(--radius-card)",
                  padding: 32,
                }}
              >
                {regions.map((r, i) => (
                  <div
                    key={r.name}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "16px 0",
                      borderBottom:
                        i < regions.length - 1
                          ? "1px solid #F0F0F0"
                          : "none",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          background: r.color,
                        }}
                      />
                      <span style={{ fontSize: 14, fontWeight: 500 }}>
                        {r.name}
                      </span>
                    </div>
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: r.color,
                      }}
                    >
                      {r.demand}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
