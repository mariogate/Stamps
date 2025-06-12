const { v4: uuidv4 } = require('uuid');

const data = {
  merchants: [],
  stampCards: [],
  customers: [],
  transactions: [],
};

// Helper functions for creating IDs
function generateId() {
  return uuidv4();
}

module.exports = {
  data,
  generateId,
};
