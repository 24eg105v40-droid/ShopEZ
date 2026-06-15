import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Wishlist from "./pages/Wishlist";
import MyOrders from "./pages/MyOrders";
import JournalDetails from "./pages/JournalDetails";
import Products from "./pages/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
<Route
  path="/product/:id"
  element={<ProductDetails />}
/>
<Route
  path="/admin"
  element={<AdminDashboard />}
/>
<Route
  path="/orders"
  element={<MyOrders />}
/>
<Route
  path="/journal/:id"
  element={<JournalDetails />}
/>
<Route
  path="/products"
  element={<Products />}
/>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/cart" element={<Cart />} />
        <Route
  path="/wishlist"
  element={<Wishlist />}
/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;