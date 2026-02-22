import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import StatusBadge from "@/components/StatusBadge";
import Link from "next/link";

const orders = [
  {
    id: "#TR-8821",
    commodity: "Raw Hazelnuts",
    origin: "Turkey",
    volume: "40.0 MT",
    status: "transit" as const,
    statusLabel: "In Transit",
    eta: "Oct 24",
    buyer: "Nordic Foods AB",
  },
  {
    id: "#DE-9012",
    commodity: "Steel Wire",
    origin: "Germany",
    volume: "12.5 MT",
    status: "pending" as const,
    statusLabel: "Documentation",
    eta: "Nov 02",
    buyer: "Al Rashid Engineering",
  },
  {
    id: "#TR-9105",
    commodity: "Olive Oil (EV)",
    origin: "Turkey",
    volume: "8.0 MT",
    status: "transit" as const,
    statusLabel: "In Transit",
    eta: "Nov 08",
    buyer: "Mediterra Imports Ltd.",
  },
  {
    id: "#CN-8734",
    commodity: "Solar Glass Panels",
    origin: "China",
    volume: "22.0 MT",
    status: "pending" as const,
    statusLabel: "Customs Hold",
    eta: "Nov 15",
    buyer: "GreenTech EMEA",
  },
];

export default function OrdersPage() {
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
          <Sidebar active="Active Orders" />
          <main>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 32,
              }}
            >
              <h1
                style={{
                  fontSize: 32,
                  letterSpacing: "-0.04em",
                  fontWeight: 600,
                }}
              >
                Active Orders
              </h1>
              <Link
                href="/quotations"
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
                New Quotation Request
              </Link>
            </div>

            <section
              style={{
                background: "white",
                borderRadius: "var(--radius-card)",
                padding: 32,
              }}
            >
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    {[
                      "Order ID",
                      "Commodity",
                      "Origin",
                      "Volume",
                      "Buyer",
                      "Status",
                      "ETA",
                      "",
                    ].map((col) => (
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
                    ))}
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
                          fontWeight: 600,
                          borderBottom: "1px solid #F8F8F8",
                        }}
                      >
                        {order.commodity}
                      </td>
                      <td
                        style={{
                          padding: "16px 0",
                          fontSize: 14,
                          borderBottom: "1px solid #F8F8F8",
                          color: "var(--text-secondary)",
                        }}
                      >
                        {order.origin}
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
                          color: "var(--text-secondary)",
                        }}
                      >
                        {order.buyer}
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
                      <td
                        style={{
                          padding: "16px 0",
                          fontSize: 14,
                          borderBottom: "1px solid #F8F8F8",
                        }}
                      >
                        <Link
                          href={`/orders/${order.id.replace("#", "")}`}
                          style={{
                            padding: "6px 16px",
                            borderRadius: "var(--radius-btn)",
                            fontSize: 12,
                            fontWeight: 600,
                            background: "var(--accent-orange)",
                            color: "white",
                            textDecoration: "none",
                            transition: "0.2s",
                          }}
                        >
                          Track
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
