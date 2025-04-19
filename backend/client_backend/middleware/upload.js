const multer = require('multer');
const path = require('path');

// Where to store and how to name the file
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // eg: 1713455678123.jpg
  }
});

const upload = multer({ storage: storage });

module.exports = upload;
