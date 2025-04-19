const express = require('express');
const router = express.Router();
const { addTrustPoints, getUserTrustPoints } = require('../controllers/trustController');
const { protect } = require('../middleware/authmiddleware');

router.post('/add', protect, addTrustPoints);
router.get('/:userId', getUserTrustPoints);

module.exports = router;
