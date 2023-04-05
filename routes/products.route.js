const express = require('express');
const router = express.Router();
const { getProducts } = require('../controllers/products.controller');

router.get('/', (req, res) => {
    const { sort } = req.query;
    const products = getProducts(sort);
    res.json(products);
});

module.exports = router;
