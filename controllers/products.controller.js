const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const { sortProductsByPrice } = require('../utils/sortProductsByPrice');
const getProducts = (sort) => {
    const rawData = fs.readFileSync(productsFilePath);
    const { products } = JSON.parse(rawData);
    if (sort) {
        const allowedSortingFields = ['id', 'title', 'price'];
        const [field, order] = sort.split(':');

        if(!allowedSortingFields.includes(field)) return products; //Do not sort anything unless given field isn't allowed

        if (field === 'title' && (order === 'ASC' || order === 'DESC')) {
            const sortOrder = order === 'ASC' ? 1 : -1;
            products.sort((a, b) => (a[field].localeCompare(b[field])) * sortOrder);
        } else if (field === 'price' && (order === 'ASC' || order === 'DESC')) {
            sortProductsByPrice(products, order);
        }
        //if given order isn't ASC or DESC just return products without any sorting
    }

    return products;
};
module.exports = { getProducts };
