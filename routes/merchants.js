const express = require('express');
const { data, generateId } = require('../models/data/store');
const router = express.Router();

// POST /merchants - create or update merchant profile
router.post('/', (req, res) => {
  const { name, config } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  const merchant = { id: generateId(), name, config: config || {} };
  data.merchants.push(merchant);
  res.status(201).json(merchant);
});

// GET /merchants - list merchants
router.get('/', (req, res) => {
  res.json(data.merchants);
});

// GET /merchants/:id - fetch specific merchant
router.get('/:id', (req, res) => {
  const merchant = data.merchants.find(m => m.id === req.params.id);
  if (!merchant) {
    return res.status(404).json({ error: 'Merchant not found' });
  }
  res.json(merchant);
});

module.exports = router;
