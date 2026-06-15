import { Link } from "react-router-dom";

function JournalCard({ title, id }) {
  return (
    <Link
      to={`/journal/${id}`}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
     <div
  style={{
    background: "white",
    padding: "35px",
    borderRadius: "30px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.05)",
    minHeight: "140px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  }}
>
        <p
          style={{
            color: "#777",
            marginBottom: "15px",
          }}
        >
          Journal
        </p>

        <h3
  style={{
    fontSize: "22px",
    lineHeight: "1.3",
  }}
>
  {title}
</h3>
      </div>
    </Link>
  );
}

export default JournalCard;