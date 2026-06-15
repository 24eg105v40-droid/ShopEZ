const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  logoutUser,
  getUsers,
  updateUser,
  deleteUser,
} = require("../controllers/authController");

router.post("/logout", logoutUser);

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/", getUsers);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;