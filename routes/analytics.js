const express = require('express');
const { data } = require('../models/data/store');
const router = express.Router();

// GET /analytics - fetch usage statistics
router.get('/', (req, res) => {
  const totalStamps = data.transactions.filter(t => t.type === 'stamp').length;
  const totalRedemptions = data.transactions.filter(t => t.type === 'redeem').length;
  const merchants = data.merchants.length;
  const customers = data.customers.length;

  res.json({
    merchants,
    customers,
    totalStamps,
    totalRedemptions,
  });
});

module.exports = router;
