// Import required modules and model
const jwt = require("jsonwebtoken");
const User = require("../models/userModel.js"); // Assuming UserModel is defined in userModels.js
const asyncHandler = require("express-async-handler");

// Middleware to protect routes by verifying JWT token
exports.Protect = asyncHandler(async (req, res, next) => {
  let token;

  // Check if authorization header is present and starts with "Bearer"
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Extract token from the authorization header
      token = req.headers.authorization.split(" ")[1];

      // Verify the token and decode its payload
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Find user by decoded ID and exclude password field
      req.user = await User.findById(decoded.id).select("-password");

      next(); // Proceed to the next middleware or route handler
    } catch (error) {
      // Handle token verification errors
      res.status(401); // Unauthorized status code
      throw new Error("Not authorized, token failed"); // Throw error
    }
  }

  // If no token is found in the authorization header
  if (!token) {
    res.status(401); // Unauthorized status code
    throw new Error("Not authorized, no token"); // Throw error
  }
});