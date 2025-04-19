const express = require('express');
const router = express.Router();
const Trust = require('../models/Trust'); // ya jahan se bhi ho

// Example POST route
router.post('/add', async (req, res) => {
  // your logic
});

module.exports = router; // 🔴 Yeh hona mandatory hai!
