"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SubmitQuotationPage() {
  const router = useRouter();
  const [unitPrice, setUnitPrice] = useState("");
  const [quantity] = useState(2000);
  const [serviceFees, setServiceFees] = useState("");
  const [shippingMethod, setShippingMethod] = useState("Ocean Freight (Standard)");
  const [leadTime, setLeadTime] = useState("14 - 21 Days");
  const [incoterms, setIncoterms] = useState("FOB - Free On Board");
  const [notes, setNotes] = useState("");
  const [isDragOver, setIsDragOver] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [savedDraft, setSavedDraft] = useState(false);

  const subtotal = unitPrice ? parseFloat(unitPrice) * quantity : 0;
  const fees = serviceFees ? parseFloat(serviceFees) : 0;
  const total = subtotal + fees;

  const formatCurrency = (n: number) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD" });

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => router.push("/quotations"), 1800);
  };

  const handleSaveDraft = () => {
    setSavedDraft(true);
    setTimeout(() => setSavedDraft(false), 2500);
  };

  /* ── shared styles ── */
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

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 12,
    fontWeight: 700,
    textTransform: "uppercase",
    color: "var(--text-secondary)",
    marginBottom: 8,
  };

  if (submitted) {
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
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "60vh",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: "50%",
                background: "#E8F5E9",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 24,
                fontSize: 32,
              }}
            >
              ✓
            </div>
            <h1
              style={{
                fontSize: 32,
                letterSpacing: "-0.04em",
                fontWeight: 600,
                marginBottom: 12,
              }}
            >
              Quotation Submitted
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: 14 }}>
              Your bid for QT-4429 has been submitted. Redirecting to
              quotations…
            </p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

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
        {/* ── Header ── */}
        <div
          style={{
            padding: "60px 0 40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div>
            <Link
              href="/quotations"
              style={{
                fontSize: 14,
                color: "var(--text-secondary)",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 24,
              }}
            >
              ← Back to Quotations
            </Link>
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
              Quotation Inquiry #QT-4429
            </div>
            <h1
              style={{
                fontSize: 40,
                letterSpacing: "-0.04em",
                fontWeight: 600,
              }}
            >
              Construction Supplies—MENA
            </h1>
          </div>
          <div style={{ textAlign: "right" }}>
            <span
              style={{
                fontSize: 11,
                padding: "4px 10px",
                background: "#F0F0EF",
                borderRadius: 4,
                fontWeight: 600,
              }}
            >
              DUE IN 03:42:11
            </span>
          </div>
        </div>

        {/* ── Grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr",
            gap: 40,
            paddingBottom: 100,
          }}
        >
          {/* ── Left column: Form ── */}
          <div>
            <div
              style={{
                background: "white",
                borderRadius: "var(--radius-card)",
                padding: 40,
                marginBottom: 24,
              }}
            >
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                {/* Pricing Breakdown */}
                <div style={{ marginBottom: 40 }}>
                  <h3
                    style={{
                      fontSize: 18,
                      letterSpacing: "-0.04em",
                      fontWeight: 600,
                      marginBottom: 24,
                      paddingBottom: 12,
                      borderBottom: "1px solid rgba(0,0,0,0.05)",
                    }}
                  >
                    Pricing Breakdown
                  </h3>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 20,
                    }}
                  >
                    <div style={{ marginBottom: 24 }}>
                      <label style={labelStyle}>Unit Price (USD)</label>
                      <input
                        type="number"
                        placeholder="0.00"
                        value={unitPrice}
                        onChange={(e) => setUnitPrice(e.target.value)}
                        style={inputStyle}
                        onFocus={(e) =>
                          (e.currentTarget.style.borderColor =
                            "var(--accent-orange)")
                        }
                        onBlur={(e) =>
                          (e.currentTarget.style.borderColor =
                            "rgba(0,0,0,0.1)")
                        }
                      />
                    </div>
                    <div style={{ marginBottom: 24 }}>
                      <label style={labelStyle}>Quantity</label>
                      <input
                        type="number"
                        value={quantity}
                        readOnly
                        style={{
                          ...inputStyle,
                          background: "#F0F0EF",
                          cursor: "not-allowed",
                        }}
                      />
                    </div>
                  </div>
                  <div style={{ marginBottom: 24 }}>
                    <label style={labelStyle}>Additional Service Fees</label>
                    <input
                      type="number"
                      placeholder="Customs, handling, etc."
                      value={serviceFees}
                      onChange={(e) => setServiceFees(e.target.value)}
                      style={inputStyle}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor =
                          "var(--accent-orange)")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor =
                          "rgba(0,0,0,0.1)")
                      }
                    />
                  </div>
                </div>

                {/* Logistics & Delivery */}
                <div style={{ marginBottom: 40 }}>
                  <h3
                    style={{
                      fontSize: 18,
                      letterSpacing: "-0.04em",
                      fontWeight: 600,
                      marginBottom: 24,
                      paddingBottom: 12,
                      borderBottom: "1px solid rgba(0,0,0,0.05)",
                    }}
                  >
                    Logistics &amp; Delivery
                  </h3>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 20,
                    }}
                  >
                    <div style={{ marginBottom: 24 }}>
                      <label style={labelStyle}>Shipping Method</label>
                      <select
                        value={shippingMethod}
                        onChange={(e) => setShippingMethod(e.target.value)}
                        style={inputStyle}
                      >
                        <option>Ocean Freight (Standard)</option>
                        <option>Ocean Freight (Express)</option>
                        <option>Air Freight</option>
                        <option>Land Transport</option>
                      </select>
                    </div>
                    <div style={{ marginBottom: 24 }}>
                      <label style={labelStyle}>Estimated Lead Time</label>
                      <select
                        value={leadTime}
                        onChange={(e) => setLeadTime(e.target.value)}
                        style={inputStyle}
                      >
                        <option>14 - 21 Days</option>
                        <option>21 - 30 Days</option>
                        <option>30+ Days</option>
                      </select>
                    </div>
                  </div>
                  <div style={{ marginBottom: 24 }}>
                    <label style={labelStyle}>Incoterms</label>
                    <select
                      value={incoterms}
                      onChange={(e) => setIncoterms(e.target.value)}
                      style={inputStyle}
                    >
                      <option>FOB - Free On Board</option>
                      <option>CIF - Cost, Insurance, Freight</option>
                      <option>DDP - Delivered Duty Paid</option>
                      <option>EXW - Ex Works</option>
                    </select>
                  </div>
                </div>

                {/* Documentation */}
                <div style={{ marginBottom: 40 }}>
                  <h3
                    style={{
                      fontSize: 18,
                      letterSpacing: "-0.04em",
                      fontWeight: 600,
                      marginBottom: 24,
                      paddingBottom: 12,
                      borderBottom: "1px solid rgba(0,0,0,0.05)",
                    }}
                  >
                    Documentation
                  </h3>
                  <div
                    onDragOver={(e) => {
                      e.preventDefault();
                      setIsDragOver(true);
                    }}
                    onDragLeave={() => setIsDragOver(false)}
                    onDrop={(e) => {
                      e.preventDefault();
                      setIsDragOver(false);
                    }}
                    style={{
                      border: `2px dashed ${isDragOver ? "var(--accent-orange)" : "rgba(0,0,0,0.1)"}`,
                      borderRadius: 12,
                      padding: 32,
                      textAlign: "center",
                      cursor: "pointer",
                      transition: "0.2s",
                      background: isDragOver ? "#FDF9F8" : "transparent",
                    }}
                  >
                    <p
                      style={{
                        fontSize: 14,
                        color: "var(--text-primary)",
                        fontWeight: 500,
                      }}
                    >
                      Click or drag files to upload
                    </p>
                    <p
                      style={{
                        fontSize: 12,
                        marginTop: 4,
                        color: "var(--text-secondary)",
                      }}
                    >
                      Technical Specs, Certifications, or Compliance docs
                      (PDF, JPG up to 10MB)
                    </p>
                  </div>
                </div>

                {/* Notes to Buyer */}
                <div>
                  <h3
                    style={{
                      fontSize: 18,
                      letterSpacing: "-0.04em",
                      fontWeight: 600,
                      marginBottom: 24,
                      paddingBottom: 12,
                      borderBottom: "1px solid rgba(0,0,0,0.05)",
                    }}
                  >
                    Notes to Buyer
                  </h3>
                  <textarea
                    rows={4}
                    placeholder="Specify any material grade details or special handling conditions..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    style={{
                      ...inputStyle,
                      resize: "vertical",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor =
                        "var(--accent-orange)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor =
                        "rgba(0,0,0,0.1)")
                    }
                  />
                </div>
              </form>
            </div>
          </div>

          {/* ── Right column: Summary ── */}
          <div>
            <div
              style={{
                background: "var(--bg-dark)",
                color: "white",
                borderRadius: "var(--radius-card)",
                padding: 32,
                position: "sticky",
                top: 100,
              }}
            >
              <h3
                style={{
                  marginBottom: 24,
                  fontSize: 20,
                  letterSpacing: "-0.04em",
                  fontWeight: 600,
                }}
              >
                Quote Summary
              </h3>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "12px 0",
                  fontSize: 14,
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <span style={{ color: "var(--text-on-dark-secondary)" }}>
                  Subtotal ({quantity.toLocaleString()} units)
                </span>
                <span>{formatCurrency(subtotal)}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "12px 0",
                  fontSize: 14,
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <span style={{ color: "var(--text-on-dark-secondary)" }}>
                  Logistics &amp; Handling
                </span>
                <span>{formatCurrency(fees)}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "12px 0",
                  fontSize: 14,
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <span style={{ color: "var(--text-on-dark-secondary)" }}>
                  Insurance ({incoterms.split(" - ")[0]})
                </span>
                <span>Included</span>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "24px 0",
                  fontSize: 24,
                  fontWeight: 600,
                  marginTop: 12,
                }}
              >
                <span>Total Bid</span>
                <span>{formatCurrency(total)}</span>
              </div>

              <div
                style={{
                  marginTop: 24,
                  paddingTop: 24,
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <button
                  onClick={handleSubmit}
                  style={{
                    width: "100%",
                    marginBottom: 12,
                    padding: "14px 28px",
                    borderRadius: "var(--radius-btn)",
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "none",
                    background: "var(--accent-orange)",
                    color: "white",
                    transition: "0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background =
                      "var(--accent-orange-hover)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background =
                      "var(--accent-orange)")
                  }
                >
                  Submit Quotation
                </button>
                <button
                  onClick={handleSaveDraft}
                  style={{
                    width: "100%",
                    padding: "14px 28px",
                    borderRadius: "var(--radius-btn)",
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "transparent",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "white",
                    transition: "0.2s",
                  }}
                >
                  {savedDraft ? "✓ Draft Saved" : "Save Draft"}
                </button>
              </div>

              <p
                style={{
                  fontSize: 11,
                  color: "var(--text-on-dark-secondary)",
                  marginTop: 20,
                  textAlign: "center",
                }}
              >
                By submitting, you agree to the Trade—Desk Terms of Service
                and Master Supply Agreement.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
