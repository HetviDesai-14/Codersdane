const mongoose = require('mongoose');

const hireUsSchema = new mongoose.Schema({
  
  service: { type: String, required: true },
  budget: { type: String, required: true },
  
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
 
});

module.exports = mongoose.model('HireUs', hireUsSchema);
