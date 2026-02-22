import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import SupplierChip from "@/components/SupplierChip";
import Link from "next/link";

const suppliers = [
  {
    logoColor: "#D6D5D3",
    name: "Anatolia Agri-Group",
    badge: "Certified Gold Supplier",
    location: "Izmir, Turkey",
    sector: "Agriculture & Food",
  },
  {
    logoColor: "#E0E0E0",
    name: "Dusseldorf Steel Co.",
    badge: "ISO 9001 Verified",
    location: "Dusseldorf, Germany",
    sector: "Metals & Industrial",
  },
  {
    logoColor: "#D6D5D3",
    name: "Aegean Oils Ltd.",
    badge: "HALAL Certified",
    location: "Ayvalik, Turkey",
    sector: "Agriculture & Food",
  },
  {
    logoColor: "#D4D8E2",
    name: "SolarTech Shenzhen",
    badge: "Verified Manufacturer",
    location: "Shenzhen, China",
    sector: "Energy & Renewables",
  },
  {
    logoColor: "#D5E2DB",
    name: "CasaBlanca Textiles",
    badge: "OEKO-TEX Certified",
    location: "Casablanca, Morocco",
    sector: "Textiles & Apparel",
  },
];

export default function SuppliersPage() {
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
          <Sidebar active="Suppliers" />
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
                Supplier Directory
              </h1>
              <Link
                href="/quotations/submit"
                style={{
                  padding: "14px 28px",
                  borderRadius: "var(--radius-btn)",
                  fontSize: 14,
                  fontWeight: 600,
                  background: "transparent",
                  border: "1px solid rgba(0,0,0,0.1)",
                  color: "var(--text-primary)",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                Request Offer
              </Link>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 20,
              }}
            >
              {suppliers.map((s) => (
                <div
                  key={s.name}
                  style={{
                    background: "white",
                    borderRadius: "var(--radius-card)",
                    padding: 28,
                  }}
                >
                  <SupplierChip
                    logoColor={s.logoColor}
                    name={s.name}
                    badge={s.badge}
                  />
                  <div
                    style={{
                      display: "flex",
                      gap: 20,
                      marginTop: 16,
                      paddingTop: 16,
                      borderTop: "1px solid #F0F0F0",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: 11,
                          color: "var(--text-secondary)",
                          textTransform: "uppercase",
                          fontWeight: 700,
                          marginBottom: 4,
                        }}
                      >
                        Location
                      </div>
                      <div style={{ fontSize: 13 }}>{s.location}</div>
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: 11,
                          color: "var(--text-secondary)",
                          textTransform: "uppercase",
                          fontWeight: 700,
                          marginBottom: 4,
                        }}
                      >
                        Sector
                      </div>
                      <div style={{ fontSize: 13 }}>{s.sector}</div>
                    </div>
                  </div>
                  <Link
                    href="/quotations/submit"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      marginTop: 16,
                      padding: "10px 20px",
                      borderRadius: "var(--radius-btn)",
                      fontSize: 13,
                      fontWeight: 500,
                      textDecoration: "none",
                      border: "1px solid rgba(0,0,0,0.1)",
                      background: "transparent",
                      color: "var(--text-primary)",
                      transition: "background 0.2s",
                    }}
                  >
                    Contact Supplier
                  </Link>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
