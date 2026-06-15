import { ArrowRight } from "lucide-react";

function Hero() {
  return (
    <section
      style={{
        padding: "60px 80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "60px",
      }}
    >
      <div>
        <p
          style={{
            color: "#73806F",
            marginBottom: "20px",
            fontWeight: "500",
          }}
        >
          Curated Lifestyle Collection
        </p>

        <h1
          style={{
            fontSize: "70px",
            lineHeight: "85px",
            color: "#2B2B2B",
          }}
        >
          Everything for
          <br />
          the way you live.
        </h1>

        <p
          style={{
            marginTop: "25px",
            width: "500px",
            color: "#666",
            lineHeight: "28px",
          }}
        >
          Discover fashion, beauty, electronics and home essentials
          thoughtfully selected for modern living.
        </p>

        <button
  onClick={() => {
    document
      .getElementById("products")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }}
  style={{
    padding: "18px 35px",
    borderRadius: "30px",
    border: "none",
    cursor: "pointer",
  }}
>
  Explore Collection →
</button>
      </div>

      <img
        src="https://images.unsplash.com/photo-1512436991641-6745cdb1723?w=800"
        alt=""
        style={{
          width: "500px",
          borderRadius: "40px",
        }}
      />
    </section>
  );
}

export default Hero;