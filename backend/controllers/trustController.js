const Trust = require('../models/Trust');

const addTrustPoints = async (req, res) => {
  const { userId, role, action } = req.body;

  let points = 0;
  let reason = '';

  if (role === 'renter') {
    switch (action) {
      case 'returned_on_time': points = 50; reason = 'Returned on time'; break;
      case 'returned_in_good_condition': points = 100; reason = 'Returned in good condition'; break;
      case 'returned_damaged': points = -100; reason = 'Returned damaged'; break;
      case 'returned_late': points = -25; reason = 'Returned late'; break;
    }
  } else if (role === 'owner') {
    switch (action) {
      case 'renter_satisfied': points = 100; reason = 'Renter satisfied'; break;
      case 'product_not_working': points = -50; reason = 'Product not working'; break;
    }
  }

  try {
    const trust = new Trust({ userId, role, points, reason });
    await trust.save();
    res.status(201).json({ message: 'Points updated', trust });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getUserTrustPoints = async (req, res) => {
  const { userId } = req.params;
  try {
    const records = await Trust.find({ userId });
    const totalPoints = records.reduce((sum, record) => sum + record.points, 0);
    res.status(200).json({ totalPoints, history: records });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { addTrustPoints, getUserTrustPoints };

