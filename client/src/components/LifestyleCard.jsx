function LifestyleCard({ title, subtitle, color, icon }) {
  return (
    <div
      style={{
        background: color,
        padding: "35px",
        borderRadius: "35px",
        minHeight: "220px",
        transition: "0.3s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div style={{ marginBottom: "25px" }}>
        {icon}
      </div>

      <h2>{title}</h2>

      <p
        style={{
          marginTop: "15px",
          color: "#666",
          lineHeight: "28px",
        }}
      >
        {subtitle}
      </p>
    </div>
  );
}

export default LifestyleCard;