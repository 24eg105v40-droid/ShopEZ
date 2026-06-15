import { Heart } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useState } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } =
  useContext(WishlistContext);
  const [added, setAdded] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "35px",
        boxShadow: "0 5px 20px rgba(0,0,0,0.05)",
      }}
    >
    <Link to={`/product/${product._id}`}>
  <img
    src={product.image}
    alt={product.title}
    style={{
      width: "100%",
      height: "300px",
      objectFit: "cover",
      borderRadius: "25px",
    }}
  />
</Link>

      <div
        style={{
          marginTop: "15px",
          background: "#EFEAE2",
          width: "fit-content",
          padding: "8px 15px",
          borderRadius: "20px",
          fontSize: "12px",
          fontWeight: "600",
        }}
      >
        {product.badge}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "18px",
        }}
      >
        <Link
  to={`/product/${product._id}`}
  style={{
    textDecoration: "none",
    color: "inherit",
  }}
>
  <h3>{product.title}</h3>
</Link>
<Heart
  size={18}
  onClick={() => {
    addToWishlist(product);
    setLiked(!liked);
  }}
  fill={liked ? "red" : "none"}
  color={liked ? "red" : "black"}
  style={{
    cursor: "pointer",
  }}
/>
      </div>

      <p
        style={{
          color: "#777",
          marginTop: "8px",
        }}
      >
        Curated for everyday living
      </p>

      <h2 style={{ marginTop: "15px" }}>
        ₹{product.price}
      </h2>

      <button
       onClick={() => {
  addToCart(product);
  setAdded(true);

  setTimeout(() => {
    setAdded(false);
  }, 1500);
}}
        style={{
          width: "100%",
          marginTop: "20px",
          padding: "15px",
          border: "none",
          borderRadius: "20px",
          background: "#73806F",
          color: "white",
          cursor: "pointer",
        }}
      >
        {added ? "✓ Added to Cart" : "Add To Cart"}
      </button>
    </div>
  );
}

export default ProductCard;