import { useState, useEffect } from "react";
import axios from "axios";
function AdminDashboard() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] =
  useState("");
  const [size, setSize] = useState("");
  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] =
  useState(null);
const [orders, setOrders] = useState([]);
 useEffect(() => {
  fetchProducts();
  fetchOrders();
}, []);
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
  const user = JSON.parse(
  localStorage.getItem("user")
);

if (!user?.isAdmin) {
  return <h1>Access Denied</h1>;
}

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8000/api/products"
      );

      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddProduct = async () => {
    try {
      const token =
        localStorage.getItem("token");

      await axios.post(
        "http://localhost:8000/api/products",
        {
          title,
          price,
          image,
          category,
          stock,
          description,
           size,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(
        "Product Added Successfully!"
      );

      setTitle("");
      setPrice("");
      setImage("");
      setCategory("");
      setStock("");
      setDescription("");
      setSize("");

      fetchProducts();
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Failed to add product"
      );
    }
  };

  const handleDelete = async (id) => {
    try {
      const token =
        localStorage.getItem("token");

      await axios.delete(
        `http://localhost:8000/api/products/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdateProduct =
  async () => {
    try {
      const token =
        localStorage.getItem("token");

      await axios.put(
        `http://localhost:8000/api/products/${editingId}`,
        {
          title,
          price,
          image,
          category,
          stock,
          description,
          size,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(
        "Product Updated Successfully!"
      );

      setEditingId(null);

      setTitle("");
      setPrice("");
      setImage("");
      setCategory("");
      setStock("");
      setDescription("");
      setSize("");

      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "80px" }}>
      <h1>Admin Dashboard</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          maxWidth: "500px",
          marginTop: "30px",
        }}
      >
        <h3>Total Products: {products.length}</h3>
<h3>Total Orders: {orders.length}</h3>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <input
          placeholder="Price"
          value={price}
          onChange={(e) =>
            setPrice(e.target.value)
          }
        />

        <input
          placeholder="Image URL"
          value={image}
          onChange={(e) =>
            setImage(e.target.value)
          }
        />

        <input
          placeholder="Category"
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        />
        <input
  placeholder="Size"
  value={size}
  onChange={(e) =>
    setSize(e.target.value)
  }
/>

        <input
          placeholder="Stock"
          value={stock}
          onChange={(e) =>
            setStock(e.target.value)
          }
        />
        <textarea
  placeholder="Description"
  value={description}
  onChange={(e) =>
    setDescription(e.target.value)
  }
  rows="4"
/>

        <button
  onClick={
    editingId
      ? handleUpdateProduct
      : handleAddProduct
  }
>
  {editingId
    ? "Update Product"
    : "Add Product"}
</button>
      </div>

      <h2
        style={{
          marginTop: "50px",
        }}
      >
        Products
      </h2>

      {products.map((product) => (
        <div
          key={product._id}
          style={{
            background: "#f5f5f5",
            padding: "15px",
            marginTop: "15px",
            borderRadius: "15px",
            display: "flex",
            justifyContent:
              "space-between",
            alignItems: "center",
          }}
        >
          <div>
  <h3>{product.title}</h3>
  <p>₹{product.price}</p>
  <p>{product.category}</p>
  <p>Stock: {product.stock}</p>
  <p>Size: {product.size}</p>
</div>

<div
  style={{
    display: "flex",
    gap: "10px",
  }}
>
  <button
    onClick={() => {
      setEditingId(product._id);

      setTitle(product.title);
      setPrice(product.price);
      setImage(product.image);
      setCategory(product.category);
      setStock(product.stock);
      setDescription(
        product.description || ""
      );
      setSize(
  product.size || ""
);
    }}
    style={{
      background: "#73806F",
      color: "white",
      border: "none",
      padding: "10px 15px",
      borderRadius: "10px",
      cursor: "pointer",
    }}
  >
    Edit
  </button>

  <button
    onClick={() =>
      handleDelete(product._id)
    }
    style={{
      background: "red",
      color: "white",
      border: "none",
      padding: "10px 15px",
      borderRadius: "10px",
      cursor: "pointer",
    }}
  >
    Delete
  </button>
</div>
        </div>
      ))}
      <h2
  style={{
    marginTop: "50px",
  }}
>
  Manage Orders
</h2>

{orders.map((order) => (
  <div
    key={order._id}
    style={{
      background: "#f5f5f5",
      padding: "15px",
      marginTop: "15px",
      borderRadius: "15px",
    }}
  >
    <h3>
      Order #{order._id.slice(-6)}
    </h3>

    <p>
      ₹{order.totalPrice}
    </p>

    <p>
      Current Status:
      {" "}
      {order.status}
    </p>

    <select
      value={order.status}
      onChange={async (e) => {
        const token =
          localStorage.getItem("token");

        await axios.put(
          `http://localhost:8000/api/orders/${order._id}`,
          {
            status: e.target.value,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        fetchOrders();
      }}
    >
      <option value="Processing">
        Processing
      </option>

      <option value="Shipped">
        Shipped
      </option>

      <option value="Delivered">
        Delivered
      </option>
    </select>
  </div>
))}
    </div>
  );
}

export default AdminDashboard;