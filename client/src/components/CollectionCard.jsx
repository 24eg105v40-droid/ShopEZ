function CollectionCard({ title, image }) {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "35px",
        cursor: "pointer",
      }}
    >
      <img
        src={image}
        alt=""
        style={{
          width: "100%",
          height: "450px",
          objectFit: "cover",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "30px",
          left: "30px",
          color: "white",
        }}
      >
        <h2
          style={{
            fontSize: "35px",
          }}
        >
          {title}
        </h2>
      </div>
    </div>
  );
}

export default CollectionCard;