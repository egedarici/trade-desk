"use client";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function SettingsPage() {
  const [saved, setSaved] = useState(false);

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 12,
    fontWeight: 700,
    textTransform: "uppercase",
    color: "var(--text-secondary)",
    marginBottom: 8,
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: 12,
    border: "1px solid rgba(0,0,0,0.1)",
    fontFamily: "inherit",
    fontSize: 14,
    background: "#F9F9F8",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <>
      <Navbar />
      <div className="r-container">
        <div className="r-page-grid-2">
          <Sidebar active="Settings" />
          <main style={{ maxWidth: 720 }}>
            <h1
              style={{
                fontSize: 32,
                letterSpacing: "-0.04em",
                fontWeight: 600,
                marginBottom: 32,
              }}
            >
              Settings
            </h1>

            <section
              style={{
                background: "white",
                borderRadius: "var(--radius-card)",
                padding: 40,
                marginBottom: 24,
              }}
            >
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  letterSpacing: "-0.04em",
                  marginBottom: 24,
                  paddingBottom: 12,
                  borderBottom: "1px solid rgba(0,0,0,0.05)",
                }}
              >
                Company Profile
              </h3>
              <div className="r-grid-form-2">
                <div style={{ marginBottom: 24 }}>
                  <label style={labelStyle}>Company Name</label>
                  <input
                    type="text"
                    defaultValue="Atlas Logistics Ltd."
                    style={inputStyle}
                  />
                </div>
                <div style={{ marginBottom: 24 }}>
                  <label style={labelStyle}>Registration No.</label>
                  <input
                    type="text"
                    defaultValue="TR-2019-84421"
                    style={inputStyle}
                  />
                </div>
              </div>
              <div style={{ marginBottom: 24 }}>
                <label style={labelStyle}>Primary Contact Email</label>
                <input
                  type="text"
                  defaultValue="trade@atlaslogistics.com"
                  style={inputStyle}
                />
              </div>
              <div style={{ marginBottom: 24 }}>
                <label style={labelStyle}>Preferred Incoterms</label>
                <select style={inputStyle} defaultValue="CIF">
                  <option>FOB - Free On Board</option>
                  <option value="CIF">CIF - Cost, Insurance, Freight</option>
                  <option>DDP - Delivered Duty Paid</option>
                  <option>EXW - Ex Works</option>
                </select>
              </div>
            </section>

            <button
              onClick={() => {
                setSaved(true);
                setTimeout(() => setSaved(false), 2000);
              }}
              style={{
                padding: "14px 28px",
                borderRadius: "var(--radius-btn)",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                border: "none",
                background: "var(--accent-orange)",
                color: "white",
                transition: "background 0.2s",
              }}
            >
              {saved ? "✓ Saved" : "Save Changes"}
            </button>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
