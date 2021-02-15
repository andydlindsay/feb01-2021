const express = require('express');
const app = express();
const port = 6543;

// GET /
app.get('/', (req, res) => {
  res.send('hello from the express server');
});

// GET /products
app.get('/products', (req, res) => {
  res.send('these are all the products (Express)');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
