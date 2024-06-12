const HireUs = require('../models/HireUs');

const createHireUs = async (req, res) => {
  try {
    const {user} = req.body;
    const newHireRequest = new HireUs(user);
   const saveddaata =  await newHireRequest.save();
    res.json(saveddaata);
  } catch (error) {
    res.json(error);
  }
};

module.exports = createHireUs;