const express = require('express');
const { createReview, getReviewsForUser } = require('../controllers/reviewController');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware'); // make sure you have this

router.post('/', authMiddleware, createReview);
router.get('/:userId', getReviewsForUser);

module.exports = router;
