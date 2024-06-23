const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");

router.put("/updatePassword", authController.updatePassword);

module.exports = router;