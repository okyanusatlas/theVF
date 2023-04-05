const express = require("express");
const app = express();

const productsRoute = require("./routes/products.route");
const basketRoute = require("./routes/basket.route");

app.use(express.json());

app.use("/get-products", productsRoute);
app.use("/basket", basketRoute);

const port = process.env.PORT || 7000;

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

module.exports = app;
