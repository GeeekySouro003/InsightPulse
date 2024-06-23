// Import required modules
const mongoose = require("mongoose");

// Define the feedback schema
const feedbackSchema = new mongoose.Schema({
  // Sender information
  UserId: {
    type: String,
    required: true,
  },
  UserEmail: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  // Feedback details
  companyName: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  // Additional information
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Create Feedback model using the feedback schema
const Feedback = mongoose.model("Feedback", feedbackSchema);

// Export the Feedback model for use in other parts of the application
module.exports = Feedback;