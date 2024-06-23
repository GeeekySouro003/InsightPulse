// Import required modules and functions
const asyncHandler = require("express-async-handler"); // Middleware for handling asynchronous functions
const Feedback = require("../models/feedBackModel"); // Feedback model
const User = require("../models/userModel"); // User model
const mongoose = require("mongoose");

const addSiteRating = asyncHandler(async (req, res) => {
  const UserId = req.user._id;

  // Extract data from request body
  const { rating } = req.body;

  // Validate input data
  if (!rating) {
    return res
      .status(400)
      .json({ success: false, error: "Rating Not Provided" });
  }

  await User.findByIdAndUpdate(UserId, { websiteRating: rating });

  return res.status(200).json({
    success: true,
    msg: " Thank you for Rating Us !!",
  });
});

const addSiteFeedback = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  // Extract data from request body
  const { title, description } = req.body;

  // Validate input data
  if (!title || !description) {
    return res
      .status(400)
      .json({ success: false, error: "Missing required fields" });
  }

  // Find the user by ID
  const user = await User.findById(userId);

  if (!user) {
    return res.status(404).json({ success: false, error: "User not found" });
  }

  // Add new feedback to the user's feedback array
  user.websiteFeedbacks.push({ title, description });

  // Save the updated user document
  await user.save();

  // Send a success response
  res
    .status(201)
    .json({ success: true, msg: "Thank you for providing feedback." });
});

module.exports = addSiteFeedback;


const addSiteBug = asyncHandler(async (req, res) => {
  
  const UserId = req.user._id;

  // Extract data from request body
  const { browser,title,description } = req.body;

  // Validate input data
  if (!browser || !title || !description) {
    return res
      .status(400)
      .json({ success: false, error: "Missing required fields" });
  }

  // Find the user by ID
  const user = await User.findById(UserId);

  if (!user) {
    return res.status(404).json({ success: false, error: "User not found" });
  }

  // Add new feedback to the user's feedback array
  user.websiteBugReport.push({ browser,title,description });

  // Save the updated user document
  await user.save();

  // Send a success response
  res
    .status(201)
    .json({ success: true, msg: "Thank you for raising Bug Report." });

});

// Controller function to add a new feedback
const addSiteSurvey = asyncHandler(async (req, res) => {
  // Extract sender details from the request user object
  const UserId = req.user._id;

  // Extract data from request body
  const { name,
    email,
    feedback,
    rating,} = req.body;

  // Validate input data
  if (!name || !email || !rating || !feedback) {
    return res
      .status(400)
      .json({ success: false, error: "Missing required fields" });
  }

  // Find the user by ID
  const user = await User.findById(UserId);

  if (!user) {
    return res.status(404).json({ success: false, error: "User not found" });
  }

  // Add new feedback to the user's feedback array
  user.surveyReport.push({ name,email,feedback,rating });

  // Save the updated user document
  await user.save();

  // Send a success response
  res
    .status(201)
    .json({ success: true, msg: "Thank you for Completing Survey." });

});

// Controller function to add a new feedback
const addFeedback = asyncHandler(async (req, res) => {
  // Extract sender details from the request user object
  const UserId = req.user._id;
  const UserEmail = req.user.email;

  // Extract data from request body
  const { companyName, message, rating } = req.body;

  // Validate input data
  if (!companyName || !message || !rating) {
    return res
      .status(400)
      .json({ success: false, error: "Missing required fields" });
  }

  // Check if user exists
  const userData = await User.findOne({ email: UserEmail });
  if (!userData) {
    return res.status(401).json({ success: false, error: "Invalid user" });
  }

  // Check if feedback already exists for the same company and sender
  const existingFeedback = await Feedback.findOne({ companyName, UserId });

  if (existingFeedback) {
    return res.status(403).json({
      success: false,
      error: "You have already given feedback for this company",
    });
  }

  // Create a new feedback instance
  const newFeedback = new Feedback({
    UserId,
    UserEmail,
    companyName,
    message,
    rating,
  });

  // Save the new feedback to the database
  await newFeedback.save();

  // Send a success response
  res.status(201).json({ success: true, data: newFeedback });
});

// Controller function to edit feedback
const editFeedback = asyncHandler(async (req, res) => {
  // Extract sender details from the request user object
  const UserId = req.user._id;
  const UserEmail = req.user.email;

  // Extract data from request body
  const { companyName, message, rating, feedbackId } = req.body;

  // Validate input data
  if (!companyName || !message || !rating || !feedbackId) {
    return res
      .status(400)
      .json({ success: false, error: "Missing required fields" });
  }

  // Check if user exists
  const userData = await User.findOne({ email: UserEmail });
  if (!userData) {
    return res.status(401).json({ success: false, error: "Invalid user" });
  }

  // Validate feedbackId
  if (!mongoose.Types.ObjectId.isValid(feedbackId)) {
    return res
      .status(400)
      .json({ success: false, error: "Invalid feedback ID" });
  }

  let updatedFeedback = await Feedback.findById(feedbackId);

  // Check if feedback exists
  if (!updatedFeedback) {
    return res
      .status(404)
      .json({ success: false, error: "Feedback not found" });
  }

  if (updatedFeedback.UserId != UserId) {
    return res.status(403).json({
      success: false,
      error: "You are not authorized to perform this action.",
    });
  }

  // Find the feedback by ID and update it
  await Feedback.findByIdAndUpdate(
    feedbackId,
    {
      UserEmail,
      UserId,
      companyName,
      message,
      rating,
    },
    { new: true }
  );

  // Send a success response with the updated feedback
  res.status(200).json({ success: true, data: updatedFeedback });
});

// Controller function to get all feedbacks for a company
const getFeedbacks = asyncHandler(async (req, res) => {
  // Extract company name from query parameters
  const { companyName } = req.params;

  if (!companyName) {
    return res
      .status(403)
      .json({ success: false, error: "Company Name is Required" });
  }

  // Fetch all feedbacks for the specified company from the database
  const feedbacks = await Feedback.find({ companyName });

  // Send response with the feedbacks
  res.json({ success: true, data: feedbacks });
});

// Controller function to delete feedback
const deleteFeedback = asyncHandler(async (req, res) => {
  // Extract sender details from the request user object
  const UserId = req.user._id;

  // Extract feedback ID from request parameters
  const { feedbackId } = req.params;

  if (!feedbackId) {
    return res
      .status(403)
      .json({ success: false, error: "Feedback Id is Required" });
  }

  // Validate feedbackId
  if (!mongoose.Types.ObjectId.isValid(feedbackId)) {
    return res
      .status(400)
      .json({ success: false, error: "Invalid feedback ID" });
  }

  // Find the feedback by ID
  const feedback = await Feedback.findById(feedbackId);

  // Check if feedback exists
  if (!feedback) {
    return res
      .status(404)
      .json({ success: false, error: "Feedback not found" });
  }

  // Check if the logged-in user is the sender of the feedback
  if (feedback.UserId != UserId) {
    return res.status(403).json({
      success: false,
      error: "You are not authorized to delete this feedback",
    });
  }

  // Delete the feedback
  await feedback.remove();

  // Send a success response
  res.json({ success: true, message: "Feedback deleted successfully" });
});

// Export controller functions for use in routes
module.exports = {
  addFeedback,
  deleteFeedback,
  editFeedback,
  getFeedbacks,
  addSiteFeedback,
  addSiteBug,
  addSiteRating,
  addSiteSurvey,
};