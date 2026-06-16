function FeatureCard({ icon, title, text, color }) {
  return (
    <div
      style={{
        background: color,
        padding: "20px",
        borderRadius: "20px"
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        {icon}
      </div>

      <h3>{title}</h3>

      <p
        style={{
          marginTop: "12px",
          color: "#666"
        }}
      >
        {text}
      </p>
    </div>
  );
}

export default FeatureCard;