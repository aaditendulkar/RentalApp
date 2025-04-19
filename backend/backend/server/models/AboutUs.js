const mongoose = require('mongoose');

const aboutUsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  teamMembers: [{
    name: String,
    role: String,
    image: String,
  }],
  companyInfo: {
    founded: String,
    location: String,
    mission: String,
  },
});

const AboutUs = mongoose.model('AboutUs', aboutUsSchema);

module.exports = AboutUs;
