// Import required modules and controllers
const express = require("express");
const { registerUser, authUser, logoutUser ,getUserData} = require("../controller/userControllers");

// Create a new router instance
const router = express.Router();

const {Protect} = require('../middleware/authMiddleware')

// Define routes and corresponding controller methods
router.route("/register").post(registerUser); // POST request to register a new user
router.post("/login", authUser); // POST request to authenticate a user
router.get("/getUserData",Protect, getUserData); // POST request to authenticate a user
router.post('/logout', logoutUser); // POST request to logout the user

// Export the router for use in other parts of the application
module.exports = router;