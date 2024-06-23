// Import required module
const jwt = require("jsonwebtoken"); // JSON Web Token implementation for Node.js

// Function to generate a JSON Web Token (JWT) for a given user ID
const generateToken = (id) => {
  // Generate a JWT containing the user ID payload, signed with a secret key
  // The token expires after 30 days (adjust as needed)
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// Export the generateToken function for use in other parts of the application
module.exports = generateToken;