const errorMessages = require('../utils/errorMessages');
const { calculateTotalPrice, getAllIdsInBasket, addProduct, removeProduct } = require('../utils/basketUtils');
//always start with empty basket and total should also always start with 0
let basket = [];

const addToBasket = (product) => {
    //we can add a lot of possible guards to ensure our api safety is top class,
    // like price should be an int and greater than 0 etc.
    //however since this is a demo application, I'm introducing only one flag
    //potential guards; ensure given product has always an id, title and price
    const allIds = getAllIdsInBasket(basket);
    //a guard to ensure  duplicated ids can't be added
    if(allIds.includes(product.id)) return {code: 400, message: errorMessages.ITEM_ALREADY_IN_BASKET}
    addProduct(basket, product);
    return {code: 201, message: 'product added', product};
};
const removeFromBasket = (productId) => {
    if(basket.length === 0) {
        return {code: 400, message: errorMessages.NO_PRODUCT_TO_BE_REMOVED};
    }
    const allIds = getAllIdsInBasket(basket);
    if(!allIds.includes(productId)) return {code: 400, message: errorMessages.GIVEN_ID_DOES_NOT_EXIST_IN_BASKET};
    basket = removeProduct(basket, productId);

    return {code: 202, message: 'Successfully removed'};
};

const getBasket = () => {
    //return all products and total price
    const totalPrice = calculateTotalPrice(basket);
    return {code:200, products: basket, totalPrice}
};

module.exports = { addToBasket, removeFromBasket, getBasket };
