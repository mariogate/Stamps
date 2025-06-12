const express = require('express');
const { data, generateId } = require('../models/data/store');
const router = express.Router();

// GET /customers/:id/stamp-cards - list customer's cards & progress
router.post('/', (req, res) => {
  const { name, profile } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }
  const customer = { id: generateId(), name, profile: profile || {} };
  data.customers.push(customer);
  res.status(201).json(customer);
});

router.get('/:id/stamp-cards', (req, res) => {
  const customerId = req.params.id;

  // compute progress by counting stamps for each card
  const progress = data.stampCards.map(card => {
    const stamps = data.transactions.filter(t => t.type === 'stamp' && t.customerId === customerId && t.stampCardId === card.id).length;
    const redemptions = data.transactions.filter(t => t.type === 'redeem' && t.customerId === customerId && t.stampCardId === card.id).length;

    return {
      cardId: card.id,
      merchantId: card.merchantId,
      stampsRequired: card.stampsRequired,
      rewardDesc: card.rewardDesc,
      stamps,
      redemptions,
    };
  });

  res.json({ customerId, progress });
});

module.exports = router;
