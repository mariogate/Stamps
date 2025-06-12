const express = require('express');
const { data, generateId } = require('../models/data/store');
const router = express.Router();

// POST /stamp-cards - define a new stamp programme
router.post('/', (req, res) => {
  const { merchantId, stampsRequired, rewardDesc, validity } = req.body;
  if (!merchantId || !stampsRequired) {
    return res.status(400).json({ error: 'merchantId and stampsRequired are required' });
  }

  const stampCard = {
    id: generateId(),
    merchantId,
    stampsRequired,
    rewardDesc: rewardDesc || '',
    validity: validity || null,
  };
  data.stampCards.push(stampCard);
  res.status(201).json(stampCard);
});

// GET /stamp-cards - list all stamp programmes
router.get('/', (req, res) => {
  res.json(data.stampCards);
});

module.exports = router;
