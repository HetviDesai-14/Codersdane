const Registration = require('../models/registration-model');

const handleRegistrationForm = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, domain, time, date ,LinkdienLink,
      GithubLink} = req.body;
    const resume = req.file ? req.file.path : '';

    const newRegistration = new Registration({
      fullName,
      email,
      phoneNumber,
      resume,
      domain,
      time,
      date,
      LinkdienLink,
      GithubLink
    });

    const savedRegistration = await newRegistration.save();
    res.json({ msg: 'Registration successful!', data: savedRegistration });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = handleRegistrationForm;
