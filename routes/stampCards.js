const db = require("../models/db");
const express = require('express');
const router = express.Router();

// POST /stamp-cards - define a new stamp programme
router.post('/', (req, res) => {
  // TODO: implement stamp-card creation
  res.status(201).json({ message: 'Stamp card endpoint placeholder' });
});

module.exports = router;
