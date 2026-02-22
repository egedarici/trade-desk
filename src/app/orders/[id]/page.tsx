"use client";

import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

/* ── per-order tracking data ── */
const trackingData: Record<
  string,
  {
    id: string;
    commodity: string;
    vessel: string;
    heading: string;
    speed: string;
    container: string;
    containerType: string;
    origin: { label: string; code: string; pct: number };
    destination: { label: string; code: string; pct: number };
    vesselPct: number;
    grossWeight: string;
    temperature: string;
    sealNumber: string;
    hazardClass: string;
    timeline: { title: string; description: string; active: boolean }[];
    docs: { name: string; note: string; status: string; statusColor: string; statusBg: string }[];
  }
> = {
  "TR-8821": {
    id: "#TR-8821",
    commodity: "Raw Hazelnuts",
    vessel: "MV ATLANTIC MARINER",
    heading: "312°",
    speed: "14.2 knots",
    container: "MSKU 921448-0",
    containerType: "40' ISO Reefer Container",
    origin: { label: "ISTANBUL", code: "POL", pct: 20 },
    destination: { label: "ROTTERDAM", code: "POD", pct: 80 },
    vesselPct: 55,
    grossWeight: "28,400 KG",
    temperature: "+18.5°C (Stable)",
    sealNumber: "S-991204X",
    hazardClass: "Non-Hazardous",
    timeline: [
      { title: "Expected Arrival — Rotterdam Terminal 4", description: "Scheduled for Oct 24, 2023 • 08:30 AM", active: false },
      { title: "English Channel Transit", description: "In Transit • Passing Dover Straits • Oct 22, 14:15 PM", active: true },
      { title: "Departed Port of Algeciras", description: "Completed Refueling • Oct 19, 21:00 PM", active: true },
      { title: "Vessel Loaded — Ambarli Port, Istanbul", description: "Loading Completed • Oct 15, 09:45 AM", active: true },
    ],
    docs: [
      { name: "Bill of Lading", note: "Verified Oct 15", status: "Released", statusColor: "#2E7D32", statusBg: "#E8F5E9" },
      { name: "Certificate of Origin", note: "Digital Signature OK", status: "Released", statusColor: "#2E7D32", statusBg: "#E8F5E9" },
      { name: "Customs Declaration", note: "EU Entry Summary Filed", status: "Pending POD", statusColor: "#EF6C00", statusBg: "#FFF3E0" },
    ],
  },
  "DE-9012": {
    id: "#DE-9012",
    commodity: "Steel Wire",
    vessel: "MV HANSA SPIRIT",
    heading: "285°",
    speed: "12.8 knots",
    container: "TCNU 550891-3",
    containerType: "40' Standard Dry Container",
    origin: { label: "HAMBURG", code: "POL", pct: 20 },
    destination: { label: "JEDDAH", code: "POD", pct: 80 },
    vesselPct: 35,
    grossWeight: "12,500 KG",
    temperature: "N/A (Ambient)",
    sealNumber: "S-774012K",
    hazardClass: "Non-Hazardous",
    timeline: [
      { title: "Expected Arrival — King Abdullah Port", description: "Scheduled for Nov 02, 2023 • 16:00 PM", active: false },
      { title: "Documentation Review", description: "Awaiting customs clearance docs • Nov 01", active: false },
      { title: "Departed Port of Hamburg", description: "Vessel departed • Oct 26, 06:15 AM", active: true },
      { title: "Vessel Loaded — Hamburg Terminal 3", description: "Loading Completed • Oct 25, 14:30 PM", active: true },
    ],
    docs: [
      { name: "Bill of Lading", note: "Verified Oct 25", status: "Released", statusColor: "#2E7D32", statusBg: "#E8F5E9" },
      { name: "Commercial Invoice", note: "Awaiting buyer confirmation", status: "Pending", statusColor: "#EF6C00", statusBg: "#FFF3E0" },
      { name: "Customs Declaration", note: "Saudi entry forms pending", status: "Pending POD", statusColor: "#EF6C00", statusBg: "#FFF3E0" },
    ],
  },
  "TR-9105": {
    id: "#TR-9105",
    commodity: "Olive Oil (EV)",
    vessel: "MV AEGEAN BREEZE",
    heading: "245°",
    speed: "11.5 knots",
    container: "GCXU 338710-7",
    containerType: "20' ISO Tank Container",
    origin: { label: "IZMIR", code: "POL", pct: 20 },
    destination: { label: "BARCELONA", code: "POD", pct: 80 },
    vesselPct: 68,
    grossWeight: "8,000 KG",
    temperature: "+16.0°C (Controlled)",
    sealNumber: "S-882405R",
    hazardClass: "Non-Hazardous",
    timeline: [
      { title: "Expected Arrival — Barcelona Port, Terminal 2", description: "Scheduled for Nov 08, 2023 • 10:00 AM", active: false },
      { title: "Mediterranean Transit — South of Sardinia", description: "In Transit • Oct 30, 09:20 AM", active: true },
      { title: "Departed Port of Izmir (Alsancak)", description: "Vessel departed • Oct 27, 18:00 PM", active: true },
      { title: "Vessel Loaded — Alsancak Port, Izmir", description: "Loading Completed • Oct 27, 11:00 AM", active: true },
    ],
    docs: [
      { name: "Bill of Lading", note: "Verified Oct 27", status: "Released", statusColor: "#2E7D32", statusBg: "#E8F5E9" },
      { name: "Certificate of Origin", note: "Digital Signature OK", status: "Released", statusColor: "#2E7D32", statusBg: "#E8F5E9" },
      { name: "Phytosanitary Certificate", note: "EU food safety cleared", status: "Released", statusColor: "#2E7D32", statusBg: "#E8F5E9" },
    ],
  },
  "CN-8734": {
    id: "#CN-8734",
    commodity: "Solar Glass Panels",
    vessel: "MV COSCO FORTUNE",
    heading: "195°",
    speed: "0.0 knots",
    container: "CSVU 602145-9",
    containerType: "40' Open Top Container",
    origin: { label: "SHANGHAI", code: "POL", pct: 20 },
    destination: { label: "PIRAEUS", code: "POD", pct: 80 },
    vesselPct: 72,
    grossWeight: "22,000 KG",
    temperature: "N/A (Ambient)",
    sealNumber: "S-663118Y",
    hazardClass: "Class 9 — Misc.",
    timeline: [
      { title: "Expected Arrival — Piraeus Container Terminal", description: "Scheduled for Nov 15, 2023 • 06:00 AM", active: false },
      { title: "Customs Hold — Piraeus Authority Review", description: "Held for inspection • Nov 10, 14:00 PM", active: true },
      { title: "Suez Canal Transit Completed", description: "Passed through canal • Nov 06, 03:30 AM", active: true },
      { title: "Departed Port of Shanghai (Yangshan)", description: "Vessel departed • Oct 22, 20:00 PM", active: true },
    ],
    docs: [
      { name: "Bill of Lading", note: "Verified Oct 22", status: "Released", statusColor: "#2E7D32", statusBg: "#E8F5E9" },
      { name: "Certificate of Conformity", note: "CE marking verified", status: "Released", statusColor: "#2E7D32", statusBg: "#E8F5E9" },
      { name: "Customs Declaration", note: "Under review by Greek customs", status: "On Hold", statusColor: "#C64832", statusBg: "#FDECEA" },
    ],
  },
};

export default function OrderTrackingPage() {
  const params = useParams();
  const orderId = (params.id as string) || "";
  const data = trackingData[orderId];

  if (!data) {
    return (
      <>
        <Navbar />
        <div
          style={{
            maxWidth: 1440,
            margin: "0 auto",
            padding: "120px 40px",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: 32, fontWeight: 600, letterSpacing: "-0.04em" }}>
            Order not found
          </h1>
          <p style={{ color: "var(--text-secondary)", marginTop: 12 }}>
            No tracking data available for #{orderId}
          </p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="r-container">
        <div className="r-page-grid-2-top">
          <Sidebar active="Active Orders" />
          <main>
            {/* Page header */}
            <header
              className="r-page-header-col"
              style={{
                marginBottom: 40,
                paddingTop: 20,
              }}
            >
              <div>
                <div
                  style={{
                    color: "var(--accent-orange)",
                    fontSize: 12,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    marginBottom: 8,
                  }}
                >
                  Shipment Tracking
                </div>
                <h1 style={{ fontSize: 40, letterSpacing: "-0.04em", fontWeight: 600 }}>
                  {data.id}—{data.commodity}
                </h1>
              </div>
              <div className="r-header-actions" style={{ display: "flex", gap: 12 }}>
                <button
                  style={{
                    padding: "10px 20px",
                    borderRadius: "var(--radius-btn)",
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: "pointer",
                    border: "1px solid rgba(0,0,0,0.1)",
                    background: "transparent",
                    color: "var(--text-primary)",
                    transition: "0.2s",
                  }}
                >
                  Report Issue
                </button>
                <button
                  style={{
                    padding: "10px 20px",
                    borderRadius: "var(--radius-btn)",
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: "pointer",
                    border: "none",
                    background: "var(--accent-orange)",
                    color: "white",
                    transition: "0.2s",
                  }}
                >
                  Download Manifest
                </button>
              </div>
            </header>

            {/* Two-column tracking layout */}
            <div className="r-grid-tracking">
              {/* ── Left column ── */}
              <div>
                {/* Map card */}
                <div
                  style={{
                    background: "white",
                    borderRadius: "var(--radius-card)",
                    padding: 12,
                    marginBottom: 24,
                  }}
                >
                  <div
                    className="r-map-container"
                    style={{
                      height: 400,
                      background: "#d0cfcd",
                      borderRadius: 16,
                      position: "relative",
                      overflow: "hidden",
                      backgroundImage:
                        "radial-gradient(#bcbbb9 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  >
                    {/* Origin pin */}
                    <div
                      style={{
                        position: "absolute",
                        fontSize: 11,
                        fontWeight: 700,
                        whiteSpace: "nowrap",
                        top: "45%",
                        left: `${data.origin.pct - 2}%`,
                      }}
                    >
                      {data.origin.label} ({data.origin.code})
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        width: 8,
                        height: 8,
                        background: "var(--text-primary)",
                        borderRadius: "50%",
                        top: "50%",
                        left: `${data.origin.pct}%`,
                      }}
                    />

                    {/* Route line */}
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: `${data.origin.pct}%`,
                        width: `${data.destination.pct - data.origin.pct}%`,
                        height: 2,
                        background:
                          "repeating-linear-gradient(to right, var(--text-secondary) 0, var(--text-secondary) 10px, transparent 10px, transparent 20px)",
                      }}
                    />

                    {/* Vessel marker */}
                    <div
                      style={{
                        position: "absolute",
                        top: "48%",
                        left: `${data.vesselPct}%`,
                        transform: "translate(-50%, -50%)",
                        width: 12,
                        height: 12,
                        background: "var(--accent-orange)",
                        borderRadius: "50%",
                        boxShadow: "0 0 0 10px rgba(198, 72, 50, 0.2)",
                      }}
                    />

                    {/* Destination pin */}
                    <div
                      style={{
                        position: "absolute",
                        fontSize: 11,
                        fontWeight: 700,
                        whiteSpace: "nowrap",
                        top: "45%",
                        left: `${data.destination.pct - 2}%`,
                      }}
                    >
                      {data.destination.label} ({data.destination.code})
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        width: 8,
                        height: 8,
                        background: "var(--text-primary)",
                        borderRadius: "50%",
                        top: "50%",
                        left: `${data.destination.pct}%`,
                      }}
                    />

                    {/* Vessel info card */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: 24,
                        left: 24,
                        background: "white",
                        padding: "12px 16px",
                        borderRadius: 12,
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      }}
                    >
                      <div
                        style={{
                          fontSize: 11,
                          color: "var(--text-secondary)",
                          fontWeight: 700,
                          textTransform: "uppercase",
                        }}
                      >
                        Current Vessel
                      </div>
                      <div style={{ fontWeight: 600, fontSize: 15 }}>
                        {data.vessel}
                      </div>
                      <div
                        style={{
                          fontSize: 12,
                          color: "var(--accent-orange)",
                          marginTop: 4,
                        }}
                      >
                        Heading: {data.heading} • Speed: {data.speed}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline card */}
                <div
                  style={{
                    background: "white",
                    borderRadius: "var(--radius-card)",
                    padding: 32,
                    marginBottom: 24,
                  }}
                >
                  <h3
                    style={{
                      marginBottom: 24,
                      fontSize: 20,
                      fontWeight: 600,
                      letterSpacing: "-0.04em",
                    }}
                  >
                    Checkpoint—Timeline
                  </h3>
                  <div style={{ marginTop: 32, position: "relative" }}>
                    {data.timeline.map((item, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          gap: 20,
                          paddingBottom: 32,
                          position: "relative",
                        }}
                      >
                        {/* Connecting line */}
                        {i < data.timeline.length - 1 && (
                          <div
                            style={{
                              position: "absolute",
                              left: 5,
                              top: 15,
                              bottom: 0,
                              width: 1,
                              background: "#E0E0E0",
                            }}
                          />
                        )}
                        {/* Dot */}
                        <div
                          style={{
                            width: 12,
                            height: 12,
                            borderRadius: "50%",
                            background: item.active
                              ? "var(--accent-orange)"
                              : "#E0E0E0",
                            boxShadow: item.active
                              ? "0 0 0 4px rgba(198, 72, 50, 0.15)"
                              : "none",
                            marginTop: 4,
                            zIndex: 1,
                            flexShrink: 0,
                          }}
                        />
                        <div>
                          <h4
                            style={{
                              fontSize: 14,
                              marginBottom: 4,
                              color: item.active
                                ? "var(--text-primary)"
                                : "var(--text-secondary)",
                            }}
                          >
                            {item.title}
                          </h4>
                          <p
                            style={{
                              fontSize: 13,
                              color: "var(--text-secondary)",
                            }}
                          >
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── Right column ── */}
              <div>
                {/* Cargo details */}
                <div
                  style={{
                    background: "white",
                    borderRadius: "var(--radius-card)",
                    padding: 32,
                    marginBottom: 24,
                  }}
                >
                  <div
                    style={{
                      color: "var(--accent-orange)",
                      fontSize: 12,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Cargo Details
                  </div>
                  <h3
                    style={{
                      marginBottom: 20,
                      marginTop: 4,
                      fontSize: 20,
                      fontWeight: 600,
                      letterSpacing: "-0.04em",
                    }}
                  >
                    Container—Unit
                  </h3>

                  <div
                    style={{
                      background: "#F5F5F4",
                      padding: 24,
                      borderRadius: 16,
                      marginBottom: 24,
                      textAlign: "center",
                    }}
                  >
                    <div
                      className="r-container-id"
                      style={{
                        fontSize: 28,
                        fontWeight: 700,
                        letterSpacing: 2,
                      }}
                    >
                      {data.container}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        color: "var(--text-secondary)",
                        marginTop: 4,
                      }}
                    >
                      {data.containerType}
                    </div>
                  </div>

                  <div className="r-container-info">
                    {[
                      { label: "Gross Weight", value: data.grossWeight },
                      { label: "Temperature", value: data.temperature },
                      { label: "Seal Number", value: data.sealNumber },
                      { label: "Hazard Class", value: data.hazardClass },
                    ].map((dp) => (
                      <div key={dp.label}>
                        <label
                          style={{
                            display: "block",
                            fontSize: 11,
                            textTransform: "uppercase",
                            color: "var(--text-secondary)",
                            marginBottom: 4,
                            fontWeight: 700,
                          }}
                        >
                          {dp.label}
                        </label>
                        <span style={{ fontWeight: 600, fontSize: 14 }}>
                          {dp.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Documentation */}
                <div
                  style={{
                    background: "white",
                    borderRadius: "var(--radius-card)",
                    padding: 32,
                    marginBottom: 24,
                  }}
                >
                  <h3
                    style={{
                      marginBottom: 20,
                      fontSize: 20,
                      fontWeight: 600,
                      letterSpacing: "-0.04em",
                    }}
                  >
                    Documentation
                  </h3>
                  {data.docs.map((doc) => (
                    <div
                      key={doc.name}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "16px 0",
                        borderBottom: "1px solid rgba(0,0,0,0.05)",
                      }}
                    >
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 600 }}>
                          {doc.name}
                        </div>
                        <div
                          style={{
                            fontSize: 12,
                            color: "var(--text-secondary)",
                          }}
                        >
                          {doc.note}
                        </div>
                      </div>
                      <span
                        style={{
                          padding: "4px 12px",
                          borderRadius: 100,
                          fontSize: 11,
                          fontWeight: 600,
                          background: doc.statusBg,
                          color: doc.statusColor,
                        }}
                      >
                        {doc.status}
                      </span>
                    </div>
                  ))}
                  <button
                    style={{
                      width: "100%",
                      marginTop: 20,
                      padding: "10px 20px",
                      borderRadius: "var(--radius-btn)",
                      fontSize: 13,
                      fontWeight: 600,
                      cursor: "pointer",
                      border: "1px solid rgba(0,0,0,0.1)",
                      background: "transparent",
                      color: "var(--text-primary)",
                      transition: "0.2s",
                    }}
                  >
                    View All Docs
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
