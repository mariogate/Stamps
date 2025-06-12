const db = require("../models/db");
const express = require('express');
const router = express.Router();

// POST /merchants - create or update merchant profile
router.post('/', (req, res) => {
  // TODO: implement merchant creation
  res.status(201).json({ message: 'Merchant endpoint placeholder' });
});

module.exports = router;
