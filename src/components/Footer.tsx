export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--bg-dark)",
        color: "var(--text-on-dark)",
        padding: "60px 40px",
      }}
    >
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: 40,
          }}
        >
          <div
            style={{
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              display: "flex",
              alignItems: "center",
              gap: 4,
              color: "white",
            }}
          >
            Trade
            <span style={{ color: "var(--accent-orange)" }}>—</span>
            Desk
          </div>
          <div
            style={{
              fontSize: 12,
              color: "var(--text-on-dark-secondary)",
            }}
          >
            © 2023 Secure Trading Environment. System Latency: 14ms
          </div>
        </div>
      </div>
    </footer>
  );
}
