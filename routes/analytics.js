const db = require("../models/db");
const express = require('express');
const router = express.Router();

// GET /analytics - fetch usage statistics
router.get('/', (req, res) => {
  // TODO: implement analytics retrieval
  res.json({ message: 'Analytics placeholder' });
});

module.exports = router;
