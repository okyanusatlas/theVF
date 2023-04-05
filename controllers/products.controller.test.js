const { getProducts } = require('./products.controller');

describe('Products Controller', () => {
    test('get all products', () => {
        const products = getProducts();
        expect(products.length).toBeGreaterThan(0);
    });

    test('sort products by title ascending', () => {
        const products = getProducts('title:ASC');
        for (let i = 1; i < products.length; i++) {
            expect(products[i].title.localeCompare(products[i - 1].title)).toBeGreaterThanOrEqual(0);
        }
    });

    test('sort products by title descending', () => {
        const products = getProducts('title:DESC');
        for (let i = 1; i < products.length; i++) {
            expect(products[i].title.localeCompare(products[i - 1].title)).toBeLessThanOrEqual(0);
        }
    });

});
