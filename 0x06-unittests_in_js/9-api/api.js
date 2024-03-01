const express = require('express');

const app = express();
const port = 7865;

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});
app.get('/cart/:id', (req, res) => {
  const { id } = req.params;
  try {
    if (!Number(id)) {
      return res.status(404).send('');
    }
    return res.status(200).send(`Payment methods for cart :${Number(id)}`);
  } catch (err) {
    return res.status(404);
  }
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
