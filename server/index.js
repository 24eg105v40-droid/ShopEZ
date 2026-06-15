const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const { errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();

connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // enables cross-origin requests  [oai_citation:0‡ExpressJS](https://expressjs.com/en/resources/middleware/cors.html?utm_source=chatgpt.com)

// Home Route
app.get("/", (req, res) => {
  res.send("ShopEZ API Running");
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

// Start Server
const PORT = process.env.PORT || 8000;
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});