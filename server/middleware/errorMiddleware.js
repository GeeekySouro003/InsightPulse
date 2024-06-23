// Middleware for handling 404 errors (resource not found)
const notFound = (req, res, next) => {
  // Create a new Error object with a descriptive message including the requested URL
  const error = new Error(`Not Found - ${req.originalUrl}`);
  // Set the HTTP status code to 404 (Not Found)
  res.status(404);
  // Pass the error to the next middleware in the chain
  next(error);
};

// Middleware for handling general errors
const errorHandler = (err, req, res, next) => {
  // Determine the appropriate HTTP status code based on the response status code
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  // Set the HTTP status code in the response
  res.status(statusCode);
  // Send a JSON response with the error message
  res.json({
    message: err.message // Include the error message in the response
  });
};

// Export the middleware functions for use in other parts of the application
module.exports = { notFound, errorHandler };