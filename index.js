const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const merchantsRoute = require('./routes/merchants');
const stampCardsRoute = require('./routes/stampCards');
const customersRoute = require('./routes/customers');
const stampsRoute = require('./routes/stamps');
const rewardsRoute = require('./routes/rewards');
const analyticsRoute = require('./routes/analytics');

app.use(express.json());

app.use('/merchants', merchantsRoute);
app.use('/stamp-cards', stampCardsRoute);
app.use('/customers', customersRoute);
app.use('/stamps', stampsRoute);
app.use('/rewards', rewardsRoute);
app.use('/analytics', analyticsRoute);

app.get('/', (req, res) => {
  res.send('STLR Stamps API');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
