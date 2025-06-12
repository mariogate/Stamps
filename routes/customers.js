const db = require("../models/db");
const express = require('express');
const router = express.Router();

// GET /customers/:id/stamp-cards - list customer's cards & progress
router.get('/:id/stamp-cards', (req, res) => {
  // TODO: fetch stamp card progress
  res.json({ message: 'Customer stamp cards placeholder', customerId: req.params.id });
});

module.exports = router;
