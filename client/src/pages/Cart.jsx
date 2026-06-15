import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import axios from "axios";

function Cart() {
  const { cartItems } = useContext(CartContext);

  const [message, setMessage] =
    useState("");

  const handleCheckout = async () => {
    try {
      const token =
        localStorage.getItem("token");

      const products = cartItems.map(
        (item) => ({
          product: item._id,
          quantity: 1,
        })
      );

      const totalPrice =
        cartItems.reduce(
          (sum, item) =>
            sum + item.price,
          0
        );

      await axios.post(
        "http://localhost:8000/api/orders",
        {
          products,
          totalPrice,
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
        <h3>
          Your cart is empty
        </h3>
      ) : (
        cartItems.map(
          (item, index) => (
            <div
              key={index}
              style={{
                background: "white",
                padding: "20px",
                marginTop: "20px",
                borderRadius: "20px",
              }}
            >
              <h3>
                {item.title}
              </h3>

              <p>
                ₹{item.price}
              </p>
            </div>
          )
        )
      )}

      {cartItems.length > 0 && (
        <button
          onClick={handleCheckout}
          style={{
            marginTop: "30px",
            padding:
              "15px 30px",
            borderRadius: "15px",
            border: "none",
            cursor: "pointer",
            background:
              "#73806F",
            color: "white",
          }}
        >
          Place Order
        </button>
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