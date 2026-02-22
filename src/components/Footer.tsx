export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--bg-dark)",
        color: "var(--text-on-dark)",
        padding: "60px 40px",
      }}
    >
      <div className="r-container" style={{ padding: 0 }}>
        <div className="r-footer-inner">
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
            Yorka
            <span style={{ color: "var(--accent-orange)" }}>—</span>
            Global
          </div>
          <div
            style={{
              fontSize: 12,
              color: "var(--text-on-dark-secondary)",
            }}
          >
            © 2026 Secure Trading Environment.
          </div>
        </div>
      </div>
    </footer>
  );
}
