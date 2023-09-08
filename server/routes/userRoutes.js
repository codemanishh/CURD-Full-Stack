const { createUser } = require("../controllers/userController");
const { editUser } = require("../controllers/userController");
const express = require("express");
const { home } = require("../controllers/userController");
const { deleteUser } = require("../controllers/userController");

const router = express.Router();

router.get("/", home);
router.post("/createUser", createUser);
router.put("/editUser/:id", editUser);
router.delete("/deleteUser/:id", deleteUser);

module.exports = router;