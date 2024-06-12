const { Schema, model } = require('mongoose');

const registrationSchema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  resume: { type: String, required: true },
  domain: { type: String, required: true },
  time: { type: String, required: true },
  date: { type: String, required: true },
  GithubLink: { type: String, required: true },
  LinkdienLink: { type: String, required: true }
});

const Registration = model('Registration', registrationSchema);

module.exports = Registration;
