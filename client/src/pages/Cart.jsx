import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import axios from "axios";

function Cart() {
const {
  cartItems,
  increaseQuantity,
  decreaseQuantity,
} = useContext(CartContext);
console.log(increaseQuantity);
console.log(decreaseQuantity);

  const [message, setMessage] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const handleCheckout = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:8000/api/orders",
        {
          products: [
            {
              product: selectedItem._id,
              quantity: selectedItem.quantity || 1,
            },
          ],
          totalPrice:
            selectedItem.price *
            (selectedItem.quantity || 1),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage(
        "Thank you! Your order has been placed."
      );
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Failed to place order"
      );
    }
  };

  return (
    <div
      style={{
        padding: "80px",
      }}
    >
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <h3>Your cart is empty</h3>
      ) : (
        cartItems.map((item, index) => (
          <div
            key={index}
            style={{
              background: "white",
              padding: "20px",
              marginTop: "20px",
              borderRadius: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "20px",
                alignItems: "center",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "15px",
                  objectFit: "cover",
                }}
              />

              <div>
                <h3>{item.title}</h3>

                <p style={{ color: "#888" }}>
                  Size: {item.size || "One Size"}
                </p>

                <h3
                  style={{
                    color: "#73806F",
                  }}
                >
                  ₹{item.price}
                </h3>

              <div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginTop: "10px",
  }}
>
  <button
    onClick={() =>
      decreaseQuantity(item._id)
    }
    style={{
      width: "30px",
      height: "30px",
    }}
  >
    -
  </button>

  <span>
    {item.quantity || 1}
  </span>

  <button
    onClick={() =>
      increaseQuantity(item._id)
    }
    style={{
      width: "30px",
      height: "30px",
    }}
  >
    +
  </button>
</div>

                <p>
                  Total: ₹
                  {item.price *
                    (item.quantity || 1)}
                </p>

                <button
                  onClick={() =>
                    setSelectedItem(item)
                  }
                  style={{
                    marginTop: "15px",
                    padding: "12px 20px",
                    border: "none",
                    borderRadius: "12px",
                    background: "#73806F",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        ))
      )}

      {selectedItem && (
      <div
  style={{
    background: "white",
    padding: "25px",
    borderRadius: "20px",
    marginTop: "30px",
    maxWidth: "400px",
    marginLeft: "auto",
    boxShadow:
      "0 5px 15px rgba(0,0,0,0.08)",
  }}
>
  <h2
    style={{
      marginBottom: "20px",
    }}
  >
    Order Summary
  </h2>

  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "12px",
      color: "#666",
    }}
  >
    <span>Subtotal</span>

  <span>
  ₹
  {selectedItem.price *
    (selectedItem.quantity || 1)}
</span>
    
  </div>

  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "15px",
      color: "#666",
    }}
  >
    <span>Shipping</span>

    <span>Free</span>
  </div>

  <hr />

  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      marginTop: "15px",
      fontSize: "20px",
      fontWeight: "700",
    }}
  >
    <span>Total</span>

    <span>
  ₹
  {selectedItem.price *
    (selectedItem.quantity || 1)}
</span>
  </div>

  <button
    onClick={handleCheckout}
    style={{
      width: "100%",
      marginTop: "25px",
      padding: "15px",
      border: "none",
      borderRadius: "12px",
      background: "#73806F",
      color: "white",
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
      boxShadow:
        "0 5px 15px rgba(115,128,111,0.3)",
    }}
  >
    Proceed To Checkout
  </button>
</div>
      )}

      {message && (
        <p
          style={{
            marginTop: "20px",
            color: "green",
            fontWeight: "600",
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
}

export default Cart;