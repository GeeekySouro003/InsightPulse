// Import required modules
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Define the user schema
const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true }, // User's name
    email: { type: String, unique: true, required: true }, // User's email (unique)
    password: { type: String, required: true }, // User's password
    isAdmin: {
      type: Boolean,
      required: true,
      default: false, // Default value is false
    },
    websiteRating: { type: Number },
    websiteFeedbacks: [{title:{type: String},description:{type: String}, }],
    websiteBugReport: [{browser:{ type: String },title:{ type: String },description:{ type: String }}],
    surveyReport: [
      {
        name: { type: String },
        email: { type: String },
        feedback: { type: String },
        rating: { type: Number },
      },
    ],
  },
  { timestamps: true } // Enable timestamps for createdAt and updatedAt fields
);

// Method to compare entered password with hashed password
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Middleware to hash the password before saving the user to the database
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    // Check if the password has been modified
    next();
  }

  // Generate a salt and hash the password
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Create User model using the user schema
const User = mongoose.model("User", userSchema);

// Export the User model for use in other parts of the application
module.exports = User;