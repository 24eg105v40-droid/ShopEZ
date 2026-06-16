import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import axios from "axios";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [added, setAdded] = useState(false);
const [message, setMessage] =
  useState("");
  const [product, setProduct] = useState(null);
  const handleBuyNow = async () => {
  try {
    const token =
      localStorage.getItem("token");

    await axios.post(
      "http://localhost:8000/api/orders",
      {
        products: [
          {
            product: product._id,
            quantity: 1,
          },
        ],
        totalPrice: product.price,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setMessage("✓ Order placed successfully!");
  } catch (error) {
    console.log(error);
  }
};

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) {
    return <h1>Loading...</h1>;
  }

  return (
    <div
      style={{
        padding: "80px",
        display: "flex",
        gap: "50px",
      }}
    >
      <img
  src={product.image}
  alt={product.title}
  style={{
    width: "500px",
    height: "500px",
    objectFit: "cover",
    borderRadius: "25px",
  }}
/>

      <div>
        <h1
  style={{
    fontSize: "42px",
    marginBottom: "15px",
  }}
>
  {product.title}
</h1>

<h2
  style={{
    color: "#73806F",
    fontSize: "32px",
  }}
>
  ₹{product.price}
</h2>

       <h3
  style={{
    marginTop: "30px",
    marginBottom: "10px",
  }}
>
  About This Product
</h3>

<div
  style={{
    display: "flex",
    gap: "15px",
    marginTop: "30px",
  }}
>
  <button
    onClick={() => {
      addToCart(product);
      setAdded(true);

      setTimeout(() => {
        setAdded(false);
      }, 1500);
    }}
    style={{
      padding: "15px 30px",
      border: "none",
      borderRadius: "15px",
      background: "#73806F",
      color: "white",
      cursor: "pointer",
    }}
  >
    {added
      ? "✓ Added to Cart"
      : "Add To Cart"}
  </button>

  <button
    onClick={handleBuyNow}
    style={{
      padding: "15px 30px",
      border: "1px solid #73806F",
      borderRadius: "15px",
      background: "white",
      color: "#73806F",
      cursor: "pointer",
    }}
  >
    Buy Now
  </button>
</div>
 {message && (
  <p
    style={{
      color: "green",
      marginTop: "15px",
      fontWeight: "600",
    }}
  >
    {message}
  </p>
)}
      </div>
      
    </div>
    
  );
}

export default ProductDetails;