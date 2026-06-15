import { useEffect, useState } from "react";
import axios from "axios";

function MyOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token =
          localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:8000/api/orders",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setOrders(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOrders();
  }, []);

return (
  <div
    style={{
      padding: "80px",
      minHeight: "100vh",
      background: "#FAF8F5",
    }}
  >
    <h1
      style={{
        marginBottom: "30px",
      }}
    >
      My Orders
    </h1>

    {orders.length === 0 ? (
      <h3>No Orders Yet</h3>
    ) : (
      orders.map((order) => (
        <div
          key={order._id}
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "25px",
            marginBottom: "20px",
            boxShadow:
              "0 5px 20px rgba(0,0,0,0.05)",
          }}
        >
          <h3>
            Order #{order._id.slice(-6)}
          </h3>
          <p>
  Date:{" "}
  {new Date(
    order.createdAt
  ).toLocaleDateString()}
</p>

          <p
            style={{
              marginTop: "10px",
              color: "#666",
            }}
          >
            Total Amount: ₹
            {order.totalPrice}
          </p>

          <p
            style={{
              color: "#73806F",
              fontWeight: "600",
            }}
          >
  Status: <strong>{order.status}</strong>
</p>
        </div>
      ))
    )}
  </div>
);
}

export default MyOrders;