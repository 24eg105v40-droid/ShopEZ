const express = require("express");
const router = express.Router();

const {
  createOrder,
  getOrders,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");

const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, createOrder);
router.get("/", protect, getOrders);
router.put("/:id", protect, updateOrder);
router.delete("/:id", protect, deleteOrder);

module.exports = router;