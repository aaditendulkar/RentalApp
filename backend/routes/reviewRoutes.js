const express = require('express');
const router = express.Router();
const { createReview, getReviewsForUser } = require('../controllers/reviewController');
const { protect } = require('../middleware/authmiddleware'); // ✅ Use named export

// 🔐 Protected route to submit review
router.post('/', protect, createReview);

// 🌐 Public route to get all reviews for a user
router.get('/:userId', getReviewsForUser);

module.exports = router;
