const express = require('express');
const router = express.Router();
const { addToBasket, removeFromBasket, getBasket } = require('../controllers/basket.controller');

router.post('/add', (req, res) => {
    const {code, message, product} = addToBasket(req.body);
    res.status(code).json({ message, product });
});

router.delete('/remove/:productId', (req, res) => {
    const { productId } = req.params;
    const {code, message} = removeFromBasket(productId);
    res.status(code).json({ message });
});

router.get('/', (req, res) => {
    const {code, products, totalPrice} = getBasket();
    res.status(code).json({ products, totalPrice });
});

module.exports = router;
