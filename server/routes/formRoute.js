const express = require('express');
const router = express.Router();
const formController = require("../controller/formController.js");

router.post("/submit", formController.submitForm);
router.get('/forms', formController.getAllForms);

module.exports = router;