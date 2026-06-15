function CategoryCard({
  title,
  color,
  icon,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      style={{
        background: color,
        padding: "30px",
        borderRadius: "30px",
        display: "flex",
        alignItems: "center",
        gap: "15px",
        transition: "0.3s",
        cursor: "pointer",
      }}
    >
      {icon}

      <h3>{title}</h3>
    </div>
  );
}

export default CategoryCard;