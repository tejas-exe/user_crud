const express = require("express");
const {
  createUser,
  deleteUser,
  fetchUser,
  editUser,
} = require("../controler/userController");
const router = express.Router();

router.get("/getUser", fetchUser);
router.post("/createUser", createUser);
router.delete("/deleteUser/:id", deleteUser);
router.put("/editUser/:id", editUser);

module.exports = router;
