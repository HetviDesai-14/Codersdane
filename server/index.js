const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const app = express();
const multer = require('multer');
const Route = require('./routes/mainRoute');

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 8000;
const URL = process.env.MONGODB_URI;

mongoose.connect(URL)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

  // Multer setup for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1 * 1000 * 1000 }, // 1MB limit
  fileFilter: function (req, file, cb) {
    const filetypes = /jpeg|jpg|png/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb('Error: File upload only supports the following filetypes - ' + filetypes);
  }
});

app.use('/api', Route);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});








// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const Routes = require('./routes/hireUsRoutes');
// const dotenv = require('dotenv');
// const app = express();

// const contactRoute = require('./routes/contact-route');

// app.use(bodyParser.json());
// app.use(express.json());
// app.use(cors());
// dotenv.config();

// const PORT = process.env.PORT || 8000;  // Use PORT from environment variables or default to 8000
// const URL = process.env.MONGODB_URI;


// mongoose.connect(URL)
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error('MongoDB connection error:', err));


// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


// app.use('/api', Routes);

