const { addToBasket, removeFromBasket, getBasket } = require('./basket.controller');
const errorMessages = require('../utils/errorMessages');

const sampleProduct = {
    id: 1,
    title: 'Sample Product',
    price: 10
};

describe('Basket Controller', () => {
    afterEach(() => {
        // Clear the basket after each test
        while (getBasket().length > 0) {
            removeFromBasket(getBasket()[0].id);
        }
    });

    test('add a product to the basket', () => {
        const result = addToBasket(sampleProduct);
        expect(result.code).toBe(201);
        expect(result.message).toBe('product added');
        expect(result.product).toEqual(sampleProduct);
    });

    test('do not add a duplicate product to the basket', () => {
        addToBasket(sampleProduct);
        const result = addToBasket(sampleProduct);
        expect(result.code).toBe(400);
        expect(result.message).toBe(errorMessages.ITEM_ALREADY_IN_BASKET);
    });

    test('remove a product from the basket', () => {
        addToBasket(sampleProduct);
        const result = removeFromBasket(sampleProduct.id);
        expect(result.code).toBe(202);
        expect(result.message).toBe('Successfully removed');
    });

    test('do not remove a product from an empty basket', () => {
        const result = removeFromBasket(sampleProduct.id);
        console.log('result', result);
        expect(result.code).toBe(400);
        expect(result.message).toBe(errorMessages.NO_PRODUCT_TO_BE_REMOVED);
    });
    test('do not remove a non-existent product from the basket', () => {
        addToBasket(sampleProduct);
        const nonExistentProductId = sampleProduct.id + 1;
        const result = removeFromBasket(nonExistentProductId);
        expect(result.code).toBe(400);
        expect(result.message).toBe(errorMessages.GIVEN_ID_DOES_NOT_EXIST_IN_BASKET);
    });
});
