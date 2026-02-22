import Link from "next/link";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import StatusBadge from "@/components/StatusBadge";
import AlertItem from "@/components/AlertItem";
import SupplierChip from "@/components/SupplierChip";
import MarketCard from "@/components/MarketCard";
import QuotationCard from "@/components/QuotationCard";
import Footer from "@/components/Footer";

const orders = [
  {
    id: "#TR-8821",
    commodity: "Raw Hazelnuts",
    volume: "40.0 MT",
    status: "transit" as const,
    statusLabel: "In Transit",
    eta: "Oct 24",
  },
  {
    id: "#DE-9012",
    commodity: "Steel Wire",
    volume: "12.5 MT",
    status: "pending" as const,
    statusLabel: "Documentation",
    eta: "Nov 02",
  },
];

const alerts = [
  {
    dotColor: "var(--accent-orange)",
    title: "Logistics Delay: Suez Canal",
    description: "Potential +3 day delay for Mediterranean routes.",
  },
  {
    dotColor: "#FFA000",
    title: "Price Watch: Hazelnut",
    description: "Market reaching seasonal peak. Consider hedging.",
  },
  {
    dotColor: "#4CAF50",
    title: "Compliance Update",
    description: "New EU sustainability norms for textiles active.",
  },
];

const suppliers = [
  { logoColor: "#D6D5D3", name: "Anatolia Agri-Group", badge: "Certified Gold Supplier" },
  { logoColor: "#E0E0E0", name: "Dusseldorf Steel Co.", badge: "ISO 9001 Verified" },
  { logoColor: "#D6D5D3", name: "Aegean Oils Ltd.", badge: "HALAL Certified" },
];

const markets = [
  { iconColor: "#E2DBD5", name: "Turkish Pistachio", signal: "Supply Surplus", signalAccent: true },
  { iconColor: "#D4D8E2", name: "Solar Glass", signal: "New Verified Suppliers", signalAccent: false },
  { iconColor: "#D5E2DB", name: "Hemp Fabric", signal: "Price Drop -4%", signalAccent: true },
];

export default function DashboardPage() {
  return (
    <>
      <Navbar />

      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          padding: "0 40px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "240px 1fr 320px",
            gap: 32,
            padding: "40px 0",
          }}
        >
          {/* ── Sidebar ── */}
          <Sidebar active="Overview" />

          {/* ── Main content ── */}
          <main>
            <h1
              style={{
                fontSize: 32,
                letterSpacing: "-0.04em",
                marginBottom: 32,
              }}
            >
              Welcome back
              <span style={{ color: "var(--accent-orange)" }}>—</span>
              Buyer.
            </h1>

            {/* Active Orders card */}
            <section
              style={{
                background: "white",
                borderRadius: "var(--radius-card)",
                padding: 24,
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 24,
                }}
              >
                <h2 style={{ fontSize: 18, fontWeight: 600 }}>Active Orders</h2>
                <Link
                  href="/orders"
                  style={{
                    fontSize: 14,
                    color: "var(--accent-orange)",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  View All
                </Link>
              </div>

              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    {["Order ID", "Commodity", "Volume", "Status", "ETA"].map(
                      (col) => (
                        <th
                          key={col}
                          style={{
                            textAlign: "left",
                            fontSize: 12,
                            textTransform: "uppercase",
                            color: "var(--text-secondary)",
                            paddingBottom: 16,
                            borderBottom: "1px solid #F0F0F0",
                          }}
                        >
                          {col}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td
                        style={{
                          padding: "16px 0",
                          fontSize: 14,
                          borderBottom: "1px solid #F8F8F8",
                        }}
                      >
                        {order.id}
                      </td>
                      <td
                        style={{
                          padding: "16px 0",
                          fontSize: 14,
                          borderBottom: "1px solid #F8F8F8",
                          fontWeight: 600,
                        }}
                      >
                        {order.commodity}
                      </td>
                      <td
                        style={{
                          padding: "16px 0",
                          fontSize: 14,
                          borderBottom: "1px solid #F8F8F8",
                        }}
                      >
                        {order.volume}
                      </td>
                      <td
                        style={{
                          padding: "16px 0",
                          fontSize: 14,
                          borderBottom: "1px solid #F8F8F8",
                        }}
                      >
                        <StatusBadge
                          status={order.status}
                          label={order.statusLabel}
                        />
                      </td>
                      <td
                        style={{
                          padding: "16px 0",
                          fontSize: 14,
                          borderBottom: "1px solid #F8F8F8",
                        }}
                      >
                        {order.eta}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            {/* Recent Quotations card */}
            <section
              style={{
                background: "white",
                borderRadius: "var(--radius-card)",
                padding: 24,
                marginBottom: 24,
              }}
            >
              <h2
                style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}
              >
                Recent Quotations
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 16,
                }}
              >
                <QuotationCard
                  rfqLabel="RFQ #772 - Textile Fibers"
                  value="$42,800.00"
                  valueNote="avg"
                  offersCount="4 offers received"
                  ctaLabel="Review Offers"
                  ctaPrimary={true}
                  href="/quotations/submit"
                />
                <QuotationCard
                  rfqLabel="RFQ #769 - Olive Oil (Extra Virgin)"
                  value="Pending Review"
                  offersCount="1 offer received"
                  ctaLabel="Edit RFQ"
                  ctaPrimary={false}
                  href="/quotations/submit"
                />
              </div>
            </section>

            {/* Recommended Markets */}
            <div>
              <h2
                style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}
              >
                Recommended Markets
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: 16,
                }}
              >
                {markets.map((m) => (
                  <MarketCard
                    key={m.name}
                    iconColor={m.iconColor}
                    name={m.name}
                    signal={m.signal}
                    signalAccent={m.signalAccent}
                  />
                ))}
              </div>
            </div>
          </main>

          {/* ── Right sidebar ── */}
          <aside>
            {/* Market Alerts */}
            <section
              style={{
                background: "white",
                borderRadius: "var(--radius-card)",
                padding: "24px 20px",
                marginBottom: 24,
              }}
            >
              <h2
                style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}
              >
                Market Alerts
              </h2>
              {alerts.map((a) => (
                <AlertItem key={a.title} {...a} />
              ))}
            </section>

            {/* Saved Suppliers */}
            <section
              style={{
                background: "white",
                borderRadius: "var(--radius-card)",
                padding: "24px 20px",
              }}
            >
              <h2
                style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}
              >
                Saved Suppliers
              </h2>
              {suppliers.map((s) => (
                <SupplierChip key={s.name} {...s} />
              ))}
              <Link
                href="/suppliers"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  marginTop: 12,
                  padding: "10px 20px",
                  borderRadius: "var(--radius-btn)",
                  fontSize: 13,
                  fontWeight: 500,
                  textDecoration: "none",
                  border: "1px solid rgba(0,0,0,0.1)",
                  background: "transparent",
                  color: "var(--text-primary)",
                }}
              >
                Manage Directory
              </Link>
            </section>
          </aside>
        </div>
      </div>

      <Footer />
    </>
  );
}
