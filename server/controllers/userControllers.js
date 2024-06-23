// Import required modules and functions
const asyncHandler = require("express-async-handler"); // Middleware for handling asynchronous functions
const User = require("../models/userModel"); // User model
const generateToken = require("../config/generateToken"); // Function to generate JWT token

// Controller function to register a new user
const registerUser = asyncHandler(async (req, res) => {
  // Extract user data from request body
  const { name, email, password } = req.body;

  // Check if required fields are provided
  if (!name || !email || !password) {
    res.status(400); // Bad request status code
    throw new Error("Please enter all fields"); // Throw an error
  }

  // Check if user with the same email already exists
  const userExists = await User.findOne({ email });

  // If user exists, throw an error
  if (userExists) {
    res.status(400); // Bad request status code
    throw new Error("User already exists"); // Throw an error
  }

  // Create a new user
  const user = await User.create({
    name,
    email,
    password,
  });

  // If user is created successfully, send a response with user details and JWT token
  if (user) {
    res.status(201).json({
      _id: user._id,
      msg: "Registered Successfully",
      rating:user.websiteRating,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id), // Generate JWT token for the user
    });
  } else {
    res.status(400); // Bad request status code
    throw new Error("User not found"); // Throw an error
  }
});

// Controller function to authenticate a user
const authUser = asyncHandler(async (req, res) => {
  // Extract email and password from request body
  const { email, password } = req.body;

  // Find user by email in the database
  const user = await User.findOne({ email });

  // If user is found and password matches, send a response with user details and JWT token
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      msg: "Login Successfully",
      rating:user.websiteRating,
      isAdmin: user.isAdmin,
      name: user.name,
      email: user.email,
      token: generateToken(user._id), // Generate JWT token for the user
    });
  } else {
    res.status(401); // Unauthorized status code
    throw new Error("Invalid email or password"); // Throw an error
  }
});

const getUserData = asyncHandler(async (req, res) => {
  const UserId = req.user._id;

  const user = await User.findById(UserId);

  if (!user) {
    return res.json({
      msg: "User Not Found",
    });
  }

  return res.status(200).json({
    _id: user._id,
    msg: "User Fetched Successfully",
    rating:user.websiteRating,
    isAdmin: user.isAdmin,
    name: user.name,
    email: user.email,
    token: generateToken(user._id), // Generate JWT token for the user
  });
});

// Getting all users
const getAllUsers = asyncHandler(async (req, res)=>{
  const users = await User.find({})
  res.json(users);

});

// logging out the user
const logoutUser = asyncHandler(async(req, res)=>{
  res.cookie('jwt', '', {
      httpOnly: true,
      expires: new Date(0),
  })

  res.status(200).json({message: "loged out successfully"})
});

// Export controller functions for use in routes
module.exports = { registerUser, authUser, getUserData, getAllUsers, logoutUser };