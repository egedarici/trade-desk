interface AlertItemProps {
  dotColor: string;
  title: string;
  description: string;
}

export default function AlertItem({ dotColor, title, description }: AlertItemProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: 12,
        padding: "12px 0",
        borderBottom: "1px solid #F0F0F0",
      }}
    >
      <div
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: dotColor,
          marginTop: 6,
          flexShrink: 0,
        }}
      />
      <div>
        <div style={{ fontSize: 13, fontWeight: 600 }}>{title}</div>
        <div style={{ fontSize: 12, color: "var(--text-secondary)" }}>
          {description}
        </div>
      </div>
    </div>
  );
}
