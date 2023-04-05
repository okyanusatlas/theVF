const { sortProductsByPrice } = require('./sortProductsByPrice');

describe('Products Utils', () => {
    const sampleProduct1 = {
        id: 1,
        title: 'Sample Product 1',
        variants: [
            { id: 11, price: 20 },
            { id: 12, price: 10 }
        ]
    };
    const sampleProduct2 = {
        id: 2,
        title: 'Sample Product 2',
        variants: [
            { id: 21, price: 40 },
            { id: 22, price: 30 }
        ]
    };
    const sampleProduct3 = {
        id: 3,
        title: 'Sample Product 3',
        variants: [
            { id: 31, price: 60 },
            { id: 32, price: 50 }
        ]
    };

    test('sort products by price ascending', () => {
        const products = [sampleProduct3, sampleProduct1, sampleProduct2];
        const sortedProducts = sortProductsByPrice(products, 'ASC');
        expect(sortedProducts).toEqual([sampleProduct1, sampleProduct2, sampleProduct3]);
    });

    test('sort products by price descending', () => {
        const products = [sampleProduct1, sampleProduct3, sampleProduct2];
        const sortedProducts = sortProductsByPrice(products, 'DESC');
        expect(sortedProducts).toEqual([sampleProduct3, sampleProduct2, sampleProduct1]);
    });

    test('sort products with equal minimum prices', () => {
        const equalPriceProduct = {
            id: 4,
            title: 'Equal Price Product',
            variants: [
                { id: 41, price: 20 },
                { id: 42, price: 10 }
            ]
        };
        const products = [sampleProduct1, equalPriceProduct];
        const sortedProducts = sortProductsByPrice(products, 'ASC');
        expect(sortedProducts).toEqual([sampleProduct1, equalPriceProduct]);
    });
});
