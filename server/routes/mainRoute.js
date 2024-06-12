const express = require('express');
const route = express.Router();
const createHireUs = require('../controllers/hireUsController');
const  handleContactForm  = require('../controllers/contact-controller');
const multer = require('multer');
const handleRegistrationForm = require('../controllers/registration-controller');

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

route.post('/register', upload.single('resume'), handleRegistrationForm);
route.post('/con', handleContactForm);

route.post('/HireUs', createHireUs);

module.exports = route;
