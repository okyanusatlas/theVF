const calculateTotalPrice = (basket) => {
    return basket.length? basket.reduce((acc, curr) => {
        acc+= curr.price ? curr.price : 0
        return acc;
    }, 0): 0;
}
const getAllIdsInBasket = (basket) => basket.map((product) => product.id);

const addProduct = (basket, product) => {
    basket.push(product);
}
const removeProduct = (basket, productId) => {
    return basket.filter((product) => product.id !== productId);
}

module.exports = { calculateTotalPrice, getAllIdsInBasket, addProduct, removeProduct };