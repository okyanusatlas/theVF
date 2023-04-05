const { calculateTotalPrice, getAllIdsInBasket, addProduct, removeProduct } = require('./basketUtils');

describe('Basket Utils', () => {
    const sampleProduct1 = { id: 1, title: 'Sample Product 1', price: 10 };
    const sampleProduct2 = { id: 2, title: 'Sample Product 2', price: 20 };

    test('calculate total price of an empty basket', () => {
        const basket = [];
        expect(calculateTotalPrice(basket)).toBe(0);
    });

    test('calculate total price of a non-empty basket', () => {
        const basket = [sampleProduct1, sampleProduct2];
        expect(calculateTotalPrice(basket)).toBe(30);
    });

    test('get all ids in basket', () => {
        const basket = [sampleProduct1, sampleProduct2];
        const ids = getAllIdsInBasket(basket);
        expect(ids).toEqual([1, 2]);
    });

    test('add product to basket', () => {
        const basket = [sampleProduct1];
        addProduct(basket, sampleProduct2);
        expect(basket.length).toBe(2);
        expect(basket).toContain(sampleProduct2);
    });

    test('remove product from basket', () => {
        const basket = [sampleProduct1, sampleProduct2];
        const updatedBasket = removeProduct(basket, sampleProduct1.id);
        expect(updatedBasket.length).toBe(1);
        expect(updatedBasket).not.toContain(sampleProduct1);
    });
});
