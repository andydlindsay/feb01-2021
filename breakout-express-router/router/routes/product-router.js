const express = require('express');
const router = express.Router();
const { getProducts, getProductById } = require('../db/product-queries');

// const queries = require('../db/product-queries');
// const getProducts = queries.getProducts;

// GET /products/
router.get('/', (req, res) => {
  getProducts()
    .then((products) => {
      res.json(products);
    });
});

// GET /products/:id
router.get('/:id', (req, res) => {
  getProductById(req.params.id)
    .then((product) => {
      res.json(product);
    });
});

module.exports = router;
