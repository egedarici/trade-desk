interface MarketCardProps {
  iconColor: string;
  name: string;
  signal: string;
  signalAccent?: boolean;
}

export default function MarketCard({
  iconColor,
  name,
  signal,
  signalAccent = false,
}: MarketCardProps) {
  return (
    <div
      style={{
        background: "#FFFFFF",
        padding: 20,
        borderRadius: 20,
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          background: iconColor,
          borderRadius: 8,
          marginBottom: 12,
        }}
      />
      <div style={{ fontSize: 14, fontWeight: 600 }}>{name}</div>
      <div
        style={{
          fontSize: 12,
          color: signalAccent ? "var(--accent-orange)" : "var(--text-secondary)",
        }}
      >
        {signal}
      </div>
    </div>
  );
}
