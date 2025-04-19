const Booking = require('../models/Booking');
const User = require('../models/User');
const Item = require('../models/Item');
const Review = require('../models/Review');

exports.getStats = async (req, res) => {
  try {
    const userCount = await User.countDocuments();
    const itemCount = await Item.countDocuments();
    const bookingCount = await Booking.countDocuments();
    const reviewCount = await Review.countDocuments();

    res.json({
      users: userCount,
      items: itemCount,
      bookings: bookingCount,
      reviews: reviewCount
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch analytics data' });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, '-password'); // Hide password
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};
