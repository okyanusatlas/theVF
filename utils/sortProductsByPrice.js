const sortProductsByPrice = (products, order) => {
    const sortOrder = order === 'ASC' ? 1 : -1;
    return products.sort((a, b) => {
        const aPrice = Math.min(...a.variants.map(variant => variant.price));
        const bPrice = Math.min(...b.variants.map(variant => variant.price));
        return (aPrice - bPrice) * sortOrder;
    });
};

module.exports = { sortProductsByPrice };