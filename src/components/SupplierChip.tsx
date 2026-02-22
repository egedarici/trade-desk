interface SupplierChipProps {
  logoColor?: string;
  name: string;
  badge: string;
}

export default function SupplierChip({
  logoColor = "#D6D5D3",
  name,
  badge,
}: SupplierChipProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: 12,
        background: "#F8F8F7",
        borderRadius: 12,
        marginBottom: 8,
      }}
    >
      <div
        style={{
          width: 32,
          height: 32,
          background: logoColor,
          borderRadius: 6,
          flexShrink: 0,
        }}
      />
      <div>
        <div style={{ fontSize: 13, fontWeight: 600 }}>{name}</div>
        <div style={{ fontSize: 11, color: "var(--text-secondary)" }}>
          {badge}
        </div>
      </div>
    </div>
  );
}
