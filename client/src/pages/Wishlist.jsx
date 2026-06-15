import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";

function Wishlist() {
  const { wishlistItems } =
    useContext(WishlistContext);

  return (
    <div style={{ padding: "80px" }}>
      <h1>My Wishlist</h1>

      {wishlistItems.map((item, index) => (
        <div
          key={index}
          style={{
            background: "white",
            padding: "20px",
            marginTop: "20px",
            borderRadius: "20px",
          }}
        >
          <h3>{item.title}</h3>
          <p>₹{item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Wishlist;