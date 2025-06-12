const express = require('express');
const { data, generateId } = require('../models/data/store');
const router = express.Router();

// POST /stamps/issue - record a new stamp
router.post('/issue', (req, res) => {
  const { customerId, stampCardId } = req.body;
  if (!customerId || !stampCardId) {
    return res.status(400).json({ error: 'customerId and stampCardId are required' });
  }

  const stampCardExists = data.stampCards.some(card => card.id === stampCardId);
  if (!stampCardExists) {
    return res.status(404).json({ error: 'Stamp card not found' });
  }

  const transaction = {
    id: generateId(),
    customerId,
    stampCardId,
    type: 'stamp',
    timestamp: new Date().toISOString(),
  };
  data.transactions.push(transaction);
  res.status(201).json(transaction);
});

module.exports = router;
