type StatusType = "transit" | "pending";

interface StatusBadgeProps {
  status: StatusType;
  label: string;
}

const statusStyles: Record<StatusType, React.CSSProperties> = {
  transit: {
    background: "#E3F2FD",
    color: "#1976D2",
  },
  pending: {
    background: "#FFF3E0",
    color: "#E65100",
  },
};

export default function StatusBadge({ status, label }: StatusBadgeProps) {
  return (
    <span
      style={{
        ...statusStyles[status],
        padding: "4px 10px",
        borderRadius: 4,
        fontSize: 11,
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.02em",
      }}
    >
      {label}
    </span>
  );
}
