// Import required modules
const mongoose = require("mongoose"); // MongoDB object modeling tool
const dotenv = require("dotenv"); // Load environment variables from .env file
dotenv.config(); // Initialize dotenv to read .env files

// Function to connect to the MongoDB database
const connectDB = async () => {
  try {
    // Attempt to establish connection to the MongoDB database
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true, // Use new URL parser
      useUnifiedTopology: true, // Use new server discovery and monitoring engine
    });
    
    // If connection is successful, log a success message with the host information
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    // If an error occurs during connection, log the error message and exit the process
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit with a non-zero status code
  }
};

// Export the connectDB function for use in other parts of the application
module.exports = connectDB;