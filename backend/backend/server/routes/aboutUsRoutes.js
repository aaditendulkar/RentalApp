const express = require('express');
const AboutUs = require('../models/AboutUs');

const router = express.Router();

// Get About Us info
router.get('/', async (req, res) => {
  try {
    const aboutUs = await AboutUs.findOne();
    res.status(200).json(aboutUs);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Update About Us info
router.put('/', async (req, res) => {
  try {
    const { title, description, teamMembers, companyInfo } = req.body;
    const aboutUs = await AboutUs.findOne();
    if (aboutUs) {
      aboutUs.title = title;
      aboutUs.description = description;
      aboutUs.teamMembers = teamMembers;
      aboutUs.companyInfo = companyInfo;
      await aboutUs.save();
      res.status(200).json(aboutUs);
    } else {
      const newAboutUs = new AboutUs({ title, description, teamMembers, companyInfo });
      await newAboutUs.save();
      res.status(201).json(newAboutUs);
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
