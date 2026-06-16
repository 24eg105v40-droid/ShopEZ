import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";

function Wishlist() {
  const {
    wishlistItems,
    removeFromWishlist,
  } = useContext(WishlistContext);
  console.log("Wishlist:", wishlistItems);

  const { addToCart } =
    useContext(CartContext);
const handleMoveToCart = (
  item,
  index
) => {
  console.log("Before:", wishlistItems);

  addToCart(item);
  removeFromWishlist(index);

  console.log("Clicked");
};

  return (
    <div style={{ padding: "80px" }}>
      <h1>My Wishlist</h1>

      {wishlistItems.length === 0 ? (
        <h3>Your wishlist is empty</h3>
      ) : (
        wishlistItems.map(
          (item, index) => (
            <div
              key={index}
              style={{
                background: "white",
                padding: "20px",
                marginTop: "20px",
                borderRadius: "20px",
                boxShadow:
                  "0 5px 20px rgba(0,0,0,0.05)",
              }}
            >
              <h3>{item.title}</h3>

              <p>
                ₹{item.price}
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent:
                    "flex-end",
                  marginTop: "15px",
                }}
              >
                <button
                  onClick={() =>
                    handleMoveToCart(
                      item,
                      index
                    )
                  }
                  style={{
                    background:
                      "linear-gradient(135deg, #73806F, #A3B18A)",
                    color: "white",
                    border: "none",
                    padding:
                      "12px 18px",
                    borderRadius:
                      "12px",
                    cursor: "pointer",
                    fontWeight:
                      "600",
                  }}
                >
                  Move To Cart
                </button>
              </div>
            </div>
          )
        )
      )}
    </div>
  );
}

export default Wishlist;