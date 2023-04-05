# ExpressJS Products and Basket Application

This is a simple ExpressJS project. It uses a local JSON file to store product information and provides endpoints for product management and a shopping basket.

## Features

- Four endpoints:
    1. `/get-products` - GET endpoint to retrieve products with optional sorting by title or price. sorting for price would sort all variants of a specific product to be sorted
    2. `/basket/add` - POST endpoint to add a product to the basket.
    3. `/basket/remove` - DELETE endpoint to remove a product from the basket.
    4. `/basket` - GET endpoint to list all items in the basket.
- Modularised controller and route structure.
- Unit tests with Jest for testing individual functions.


## Getting Started

1. Install dependencies: npm install
2. Run the application: npm start:dev
3. Run tests: npm test

## Future Notes
1. There are countless amount of guards that could be added to increase the security level of the API
2. For better code structure, consistency tools like ESLint and Prettier could be added
3. For understandable Api documentation Swagger could be used