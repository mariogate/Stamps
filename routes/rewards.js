const express = require('express');
const { data, generateId } = require('../models/data/store');
const router = express.Router();

// POST /rewards/redeem - claim a reward
router.post('/redeem', (req, res) => {
  const { customerId, stampCardId } = req.body;
  if (!customerId || !stampCardId) {
    return res.status(400).json({ error: 'customerId and stampCardId are required' });
  }

  const card = data.stampCards.find(c => c.id === stampCardId);
  if (!card) {
    return res.status(404).json({ error: 'Stamp card not found' });
  }

  const stamps = data.transactions.filter(t => t.type === 'stamp' && t.customerId === customerId && t.stampCardId === stampCardId).length;
  const redemptions = data.transactions.filter(t => t.type === 'redeem' && t.customerId === customerId && t.stampCardId === stampCardId).length;

  if (stamps - redemptions * card.stampsRequired < card.stampsRequired) {
    return res.status(400).json({ error: 'Not enough stamps to redeem' });
  }

  const transaction = {
    id: generateId(),
    customerId,
    stampCardId,
    type: 'redeem',
    timestamp: new Date().toISOString(),
  };
  data.transactions.push(transaction);
  res.status(200).json(transaction);
});

module.exports = router;
