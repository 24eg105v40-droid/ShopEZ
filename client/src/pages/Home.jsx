import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";
import FeatureCard from "../components/FeatureCard";
import Footer from "../components/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import CollectionCard from "../components/CollectionCard";
import JournalCard from "../components/JournalCard";
import { Link } from "react-router-dom";
import {
  Truck,
  ShieldCheck,
  Package,
  Shirt,
  Laptop,
  House,
  Gem,
  Sparkles,
  Briefcase,
} from "lucide-react";
import LifestyleCard from "../components/LifestyleCard";
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

function Home() {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] =
  useState("All");
  const { search } =
  useContext(SearchContext);

useEffect(() => {
  axios
    .get("http://localhost:8000/api/products")
    .then((res) => setProducts(res.data))
    .catch((err) => console.log(err));
}, []);
const filteredProducts = products.filter(
  (product) => {
    const matchesCategory =
      selectedCategory === "All" ||
      product.category ===
        selectedCategory;

    const matchesSearch =
      product.title
        .toLowerCase()
        .includes(
          search.toLowerCase()
        );

    return (
      matchesCategory &&
      matchesSearch
    );
  }
);
const featuredProducts = products.filter(
  (product) =>
    [
      "Complete Skincare Essentials Kit",
      "Women's Summer Dress",
      "Table Lamp",
    ].includes(product.title)
);
  return (
    <>
      <Navbar />
      <Hero />


      {/* Categories */}
      <div
        style={{
          padding: "0 80px",
          marginBottom: "50px",
        }}
      >
        <h2 style={{ marginBottom: "30px" }}>Explore Categories</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "20px",
          }}
        >
          <CategoryCard
  title="Fashion"
  color="#FFE8D9"
  icon={<Shirt />}
  onClick={() => {
    setSelectedCategory("Fashion");
    document
      .getElementById("products")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }}
/>

          <CategoryCard
  title="Beauty"
  color="#EAE4FF"
  icon={<Gem />}
  onClick={() => {
    setSelectedCategory("Beauty");
    document
      .getElementById("products")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }}
/>

          <CategoryCard
  title="Electronics"
  color="#DCE8F7"
  icon={<Laptop />}
  onClick={() => {
    setSelectedCategory("Electronics");
    document
      .getElementById("products")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }}
/>

         <CategoryCard
  title="Home Decor"
  color="#DDEEDF"
  icon={<House />}
  onClick={() => {
    setSelectedCategory("Home Decor");
    document
      .getElementById("products")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }}
/>
        </div>
      </div>

{/* Products */}
<div
  id="products"
  style={{
    padding: "0 80px 80px",
  }}
>
 <h2>
  {search
    ? `Search Results (${filteredProducts.length})`
    : selectedCategory !== "All"
    ? `${selectedCategory} Products`
    : "Featured Products"}
</h2>

  <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: "30px",
  }}
>
  {(search || selectedCategory !== "All"
    ? filteredProducts
    : featuredProducts
  ).map((product) => (
    <ProductCard
      key={product._id}
      product={product}
    />
    
  ))}
</div>

   <div
    style={{
      textAlign: "center",
      marginTop: "40px",
    }}
  >
    <Link
      to="/products"
      style={{
        textDecoration: "none",
        color: "#73806F",
        fontWeight: "600",
        fontSize: "18px",
      }}
    >
      View All Products →
    </Link>
  </div>
    <p>
  Total Products:
  {" "}
  {(search || selectedCategory !== "All"
    ? filteredProducts
    : featuredProducts).length}
</p>
</div>
{/* Journal */}

<div
  style={{
    padding: "0 80px 100px",
  }}
>
  <h2
    style={{
      marginBottom: "20px",
      fontSize: "38px",
    }}
  >
    Journal
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(300px, 1fr))",
      gap: "25px",
    }}
  >
<JournalCard
  id="1"
  title="Minimal Desk Setup Ideas"
/>

<JournalCard
  id="2"
  title="Essentials For Everyday Living"
/>

<JournalCard
  id="3"
  title="Trends We Love This Season"
/>
  </div>
</div>

      {/* Features */}
      <div
        style={{
          padding: "80px",
        }}
      >
        <h2 style={{ marginBottom: "30px" }}>Why Choose ShopEZ</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "25px",
          }}
        >
          <FeatureCard
            title="Curated Selection"
            text="Handpicked products for modern lifestyles."
            color="#EAE4FF"
            icon={<Truck />}
          />

          <FeatureCard
            title="Trusted Checkout"
            text="Safe and reliable shopping experience."
            color="#DDEEDF"
            icon={<ShieldCheck />}
          />

          <FeatureCard
            title="Thoughtful Design"
            text="Carefully crafted collections you'll love."
            color="#FFE8D9"
            icon={<Package />}
          />
        </div>
      </div>

      

      <Footer />
    </>
  );
}

export default Home;