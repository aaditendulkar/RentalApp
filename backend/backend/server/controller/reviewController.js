const Review = require('../models/Review');

const createReview = async (req, res) => {
  try {
    const { reviewee, item, rating, comment } = req.body;
    const reviewer = req.user._id; // from auth middleware

    const review = new Review({ reviewer, reviewee, item, rating, comment });
    await review.save();

    res.status(201).json({ message: 'Review submitted successfully', review });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getReviewsForUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const reviews = await Review.find({ reviewee: userId }).populate('reviewer', 'username');

    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createReview,
  getReviewsForUser,
};
