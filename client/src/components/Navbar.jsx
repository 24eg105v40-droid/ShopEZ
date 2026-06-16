import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { SearchContext } from "../context/SearchContext";
import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  Heart,
  ShoppingBag,
  User,
} from "lucide-react";

function Navbar() {
  const { cartItems } = useContext(CartContext);
  const { search, setSearch } =
    useContext(SearchContext);
     const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (
<nav
  style={{
    position: "sticky",
    top: "0",
    zIndex: "1000",

    backdropFilter: "blur(15px)",
    WebkitBackdropFilter:
      "blur(15px)",

    background:
      "rgba(243, 219, 219, 0.65)",

    borderBottom:
      "1px solid rgba(255,255,255,0.3)",

    boxShadow:
      "0 8px 32px rgba(0,0,0,0.05)",

    display: "flex",
    alignItems: "center",
    padding: "20px 80px",
  }}
>
      <h1
        style={{
          fontSize: "30px",
          fontWeight: "700",
        }}
      >
        ShopEZ
      </h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          marginLeft: "auto",
        }}
      >
        <Search size={18} />

        <input
          placeholder="Search products..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);

            document
              .getElementById("products")
              ?.scrollIntoView({
                behavior: "smooth",
              });
          }}
          style={{
            border: "none",
            outline: "none",
            background: "transparent",
            width: "150px",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          marginLeft: "20px",
        }}
      >
        <Link to="/wishlist">
          <Heart size={20} />
        </Link>

        <Link to="/orders">
          Orders
        </Link>

        <Link to="/cart">
          <div style={{ position: "relative" }}>
            <ShoppingBag size={20} />

            <span
              style={{
                position: "absolute",
                top: "-8px",
                right: "-8px",
                background: "#73806F",
                color: "white",
                width: "18px",
                height: "18px",
                borderRadius: "50%",
                fontSize: "11px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {cartItems.length}
            </span>
          </div>
        </Link>

 {user ? (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "10px",
    }}
  >
    <User size={20} />
    <span>{user.name}</span>

    {user.isAdmin && (
      <Link
        to="/admin"
        style={{
          textDecoration: "none",
          color: "#73806F",
          fontWeight: "600",
        }}
      >
        Admin
      </Link>
    )}

    <button
  onClick={() => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/");
  }}
      style={{
        border: "none",
        padding: "6px 12px",
        borderRadius: "10px",
        cursor: "pointer",
        background: "#73806F",
        color: "white",
      }}
    >
      Logout
    </button>
  </div>
) : (
  <Link to="/login">
    <User size={20} />
  </Link>
)}
      </div>
    </nav>
  );
}

export default Navbar;