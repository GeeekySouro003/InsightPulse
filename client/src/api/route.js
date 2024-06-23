// Base URL for the backend server
export const HOST = "http://localhost:80";

// Authentication APIs
export const SIGNUP_API = `${HOST}/api/user/register`; // Endpoint to register a new user (send name, email, and password)
export const LOGIN_API = `${HOST}/api/user/login`; // Endpoint to login (send email and password)
export const GET_USER_DATA = `${HOST}/api/user/getUserData`; // Endpoint to getUserData (send token in bearer)

// Feedback APIs
export const ADD_SITE_RATING = `${HOST}/api/feeback/addSiteRating`;
export const ADD_SITE_FEEDBACK = `${HOST}/api/feeback/addSiteFeedback`;
export const ADD_SITE_BUG = `${HOST}/api/feeback/addSiteBug`;
export const ADD_SITE_SURVEY = `${HOST}/api/feeback/addSiteSurvey`;
export const ADD_FEEDBACK = `${HOST}/api/feeback/addFeedback`; // Endpoint to add feedback (send companyName, message, and rating in an object, and token in the bearer)
export const EDIT_FEEDBACK = `${HOST}/api/feeback/editFeedback`; // Endpoint to edit feedback (send feedbackId, companyName, message, and rating in an object, and token in the bearer)
export const GET_FEEDBACK = `${HOST}/api/feeback/getFeedbacks`; // Endpoint to get feedback (send Feedback Id in Params and token in the bearer)
export const DELETE_FEEDBACK = `${HOST}/api/feeback/deleteFeedback`; // Endpoint to delete feedback (send Company Name in Params and token in the bearer)