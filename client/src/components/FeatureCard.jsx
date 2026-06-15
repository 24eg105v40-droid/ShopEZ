function FeatureCard({ icon, title, text, color }) {
  return (
    <div
      style={{
        background: color,
        padding: "30px",
        borderRadius: "30px"
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