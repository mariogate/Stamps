const db = require("../models/db");
const express = require('express');
const router = express.Router();

// POST /rewards/redeem - claim a reward
router.post('/redeem', (req, res) => {
  // TODO: implement reward redemption logic
  res.status(200).json({ message: 'Reward redeemed placeholder' });
});

module.exports = router;
