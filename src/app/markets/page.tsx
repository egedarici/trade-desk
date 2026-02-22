"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const watchlist = [
  { name: "WTI Crude", price: "$84.32", category: "Energy", change: "+1.24%", up: true },
  { name: "Wheat (CBT)", price: "$572.50", category: "Soft Agri", change: "-0.05%", up: false },
  { name: "LME Copper", price: "$8,124.00", category: "Industrial", change: "+2.11%", up: true },
  { name: "Natural Gas", price: "$2.84", category: "Energy", change: "-4.12%", up: false },
];

const chartBars = [40, 55, 45, 70, 65, 85, 75, 95, 80, 60, 50, 40];
const chartDates = ["SEP 15", "SEP 22", "SEP 29", "OCT 06", "OCT 13", "OCT 20"];

const metricsData = [
  { label: "Daily Volume", value: "1.24M MT", note: "↑ 14.2% vs avg", noteColor: "#2E7D32" },
  { label: "30D Volatility", value: "8.42%", note: "Standard deviation", noteColor: "var(--text-secondary)" },
  { label: "Open Interest", value: "$4.22B", note: "↓ 2.1% from prev", noteColor: "#C64832" },
];

const trendRows = [
  { metric: "Relative Strength (RSI)", current: "62.4", avg: "54.1", sentiment: "Bullish", sentimentColor: "#2E7D32" },
  { metric: "Fibonacci Support", current: "$82.10", avg: "$81.85", sentiment: "Stable", sentimentColor: "var(--text-secondary)" },
  { metric: "Bollinger Spread", current: "Narrowing", avg: "Medium", sentiment: "Neutral", sentimentColor: "#C64832" },
];

const newsFeed = [
  { time: "14m ago", headline: "OPEC+ signal continued supply cuts through Q4" },
  { time: "2h ago", headline: "EU wheat yields forecast lower due to erratic rain" },
];

const timeFilters = ["1D", "1W", "1M", "1Y", "ALL"];

export default function MarketsPage() {
  const [activeFilter, setActiveFilter] = useState("1M");
  const [activeWatchlistIdx, setActiveWatchlistIdx] = useState(0);

  return (
    <>
      <Navbar />
      <div className="r-container">
        <div className="r-page-grid-2-top">
          <Sidebar active="Market Intelligence" />
          <main>
            {/* Page header */}
            <header
              className="r-page-header-col"
              style={{
                padding: "20px 0 40px",
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
                  Global Markets
                </div>
                <h1
                  style={{
                    fontSize: 40,
                    letterSpacing: "-0.04em",
                    fontWeight: 600,
                  }}
                >
                  Market—Analysis.
                </h1>
              </div>
              <div className="r-time-filters">
                {timeFilters.map((f) => (
                  <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    style={{
                      padding: "6px 16px",
                      borderRadius: 100,
                      fontSize: 12,
                      fontWeight: 600,
                      cursor: "pointer",
                      border: "1px solid transparent",
                      background:
                        f === activeFilter ? "var(--bg-dark)" : "#F5F5F4",
                      color: f === activeFilter ? "white" : "var(--text-primary)",
                      transition: "all 0.2s",
                    }}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </header>

            {/* Market grid */}
            <div className="r-grid-market">
              {/* ── Left column ── */}
              <div>
                {/* Watchlist */}
                <div
                  style={{
                    background: "var(--bg-dark)",
                    color: "white",
                    borderRadius: "var(--radius-card)",
                    padding: 24,
                    marginBottom: 24,
                  }}
                >
                  <div
                    style={{
                      fontSize: 16,
                      fontWeight: 600,
                      letterSpacing: "-0.04em",
                      marginBottom: 16,
                    }}
                  >
                    Watchlist
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 4,
                    }}
                  >
                    {watchlist.map((item, idx) => (
                      <div
                        key={item.name}
                        onClick={() => setActiveWatchlistIdx(idx)}
                        style={{
                          padding: 16,
                          borderRadius: 12,
                          cursor: "pointer",
                          background:
                            idx === activeWatchlistIdx
                              ? "rgba(255,255,255,0.05)"
                              : "transparent",
                          borderLeft:
                            idx === activeWatchlistIdx
                              ? "3px solid var(--accent-orange)"
                              : "3px solid transparent",
                          transition: "all 0.2s",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <span style={{ fontWeight: 600 }}>{item.name}</span>
                          <span>{item.price}</span>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            fontSize: 11,
                            marginTop: 4,
                            color: "var(--text-on-dark-secondary)",
                          }}
                        >
                          <span>{item.category}</span>
                          <span
                            style={{
                              color: item.up ? "#2E7D32" : "#C64832",
                              fontWeight: 600,
                            }}
                          >
                            {item.change}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button
                    style={{
                      width: "100%",
                      marginTop: 24,
                      padding: "10px 20px",
                      borderRadius: "var(--radius-btn)",
                      fontSize: 12,
                      fontWeight: 600,
                      cursor: "pointer",
                      border: "none",
                      background: "rgba(255,255,255,0.1)",
                      color: "white",
                      transition: "background 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background =
                        "rgba(255,255,255,0.15)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background =
                        "rgba(255,255,255,0.1)")
                    }
                  >
                    + Add Asset
                  </button>
                </div>

                {/* News Feed */}
                <div
                  style={{
                    background: "white",
                    borderRadius: "var(--radius-card)",
                    padding: 24,
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
                    News Feed
                  </div>
                  <div
                    style={{
                      marginTop: 16,
                      display: "flex",
                      flexDirection: "column",
                      gap: 20,
                    }}
                  >
                    {newsFeed.map((n) => (
                      <div key={n.headline}>
                        <div
                          style={{
                            fontSize: 11,
                            color: "var(--text-secondary)",
                            marginBottom: 4,
                          }}
                        >
                          {n.time}
                        </div>
                        <h4
                          style={{
                            fontSize: 14,
                            lineHeight: 1.3,
                            fontWeight: 600,
                            letterSpacing: "-0.04em",
                          }}
                        >
                          {n.headline}
                        </h4>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── Right column ── */}
              <div>
                {/* Chart card */}
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
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: 32,
                    }}
                  >
                    <div>
                      <h2
                        style={{
                          fontSize: 28,
                          letterSpacing: "-0.04em",
                          fontWeight: 600,
                        }}
                      >
                        WTI Crude Oil (Spot)
                      </h2>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "baseline",
                          gap: 12,
                          marginTop: 8,
                        }}
                      >
                        <span style={{ fontSize: 32, fontWeight: 700 }}>
                          $84.32
                        </span>
                        <span
                          style={{
                            fontSize: 16,
                            color: "#2E7D32",
                            fontWeight: 600,
                          }}
                        >
                          +1.03 (1.24%) ▲
                        </span>
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
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
                        Market Status
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                          fontSize: 14,
                          fontWeight: 600,
                          color: "#2E7D32",
                          justifyContent: "flex-end",
                        }}
                      >
                        <span
                          style={{
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            background: "#2E7D32",
                            display: "inline-block",
                          }}
                        />
                        Trading Open
                      </div>
                    </div>
                  </div>

                  {/* Bar chart with trend line */}
                  <div
                    style={{
                      width: "100%",
                      height: 340,
                      position: "relative",
                      marginTop: 20,
                      display: "flex",
                      alignItems: "flex-end",
                      gap: 8,
                    }}
                  >
                    {chartBars.map((h, i) => (
                      <div
                        key={i}
                        style={{
                          flex: 1,
                          height: `${h}%`,
                          background:
                            i === 7
                              ? "var(--accent-orange)"
                              : "var(--bg-light)",
                          borderRadius: "4px 4px 0 0",
                          transition: "height 0.3s ease",
                        }}
                      />
                    ))}
                    <svg
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        pointerEvents: "none",
                      }}
                      viewBox="0 0 1000 340"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0,280 Q250,150 500,100 T1000,50"
                        fill="none"
                        stroke="var(--accent-orange)"
                        strokeWidth="3"
                      />
                    </svg>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: 16,
                      color: "var(--text-secondary)",
                      fontSize: 11,
                      fontWeight: 600,
                    }}
                  >
                    {chartDates.map((d) => (
                      <span key={d}>{d}</span>
                    ))}
                  </div>
                </div>

                {/* Metric cards */}
                <div className="r-grid-metrics-3">
                  {metricsData.map((m) => (
                    <div
                      key={m.label}
                      style={{
                        background: "#F5F5F4",
                        padding: 24,
                        borderRadius: 16,
                      }}
                    >
                      <div
                        style={{
                          fontSize: 12,
                          color: "var(--text-secondary)",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {m.label}
                      </div>
                      <div
                        style={{
                          fontSize: 24,
                          fontWeight: 700,
                          margin: "4px 0",
                        }}
                      >
                        {m.value}
                      </div>
                      <div style={{ fontSize: 12, color: m.noteColor }}>
                        {m.note}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Trend Analysis Table */}
                <div
                  style={{
                    background: "white",
                    borderRadius: "var(--radius-card)",
                    padding: 32,
                  }}
                >
                  <div
                    style={{
                      fontSize: 20,
                      fontWeight: 600,
                      letterSpacing: "-0.04em",
                      marginBottom: 24,
                    }}
                  >
                    Trend—Analysis Summary
                  </div>
                  <div className="r-table-wrap">
                  <table
                    style={{ width: "100%", borderCollapse: "collapse", minWidth: 500 }}
                  >
                    <thead>
                      <tr>
                        {[
                          "Metric",
                          "Current Value",
                          "Moving Avg (50D)",
                          "Sentiment",
                          "Action",
                        ].map((col) => (
                          <th
                            key={col}
                            style={{
                              textAlign: "left",
                              fontSize: 12,
                              textTransform: "uppercase",
                              color: "var(--text-secondary)",
                              padding: "0 0 16px 0",
                              borderBottom: "1px solid rgba(0,0,0,0.05)",
                            }}
                          >
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {trendRows.map((row) => (
                        <tr key={row.metric}>
                          <td
                            style={{
                              padding: "16px 0",
                              fontSize: 14,
                              fontWeight: 600,
                              borderBottom: "1px solid rgba(0,0,0,0.05)",
                            }}
                          >
                            {row.metric}
                          </td>
                          <td
                            style={{
                              padding: "16px 0",
                              fontSize: 14,
                              borderBottom: "1px solid rgba(0,0,0,0.05)",
                            }}
                          >
                            {row.current}
                          </td>
                          <td
                            style={{
                              padding: "16px 0",
                              fontSize: 14,
                              borderBottom: "1px solid rgba(0,0,0,0.05)",
                            }}
                          >
                            {row.avg}
                          </td>
                          <td
                            style={{
                              padding: "16px 0",
                              fontSize: 14,
                              borderBottom: "1px solid rgba(0,0,0,0.05)",
                            }}
                          >
                            <span
                              style={{
                                color: row.sentimentColor,
                                fontWeight: 600,
                              }}
                            >
                              {row.sentiment}
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "16px 0",
                              fontSize: 14,
                              borderBottom: "1px solid rgba(0,0,0,0.05)",
                            }}
                          >
                            <button
                              style={{
                                padding: "6px 14px",
                                borderRadius: "var(--radius-btn)",
                                fontSize: 11,
                                fontWeight: 600,
                                cursor: "pointer",
                                border: "1px solid rgba(0,0,0,0.1)",
                                background: "transparent",
                                color: "var(--text-primary)",
                                transition: "0.2s",
                              }}
                            >
                              Details
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  </div>
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
