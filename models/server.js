const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');


class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.categoriesRoute = '/api/categories';
        this.productsRoute = '/api/products';

        // database connection
        this.connectDB();


        // middlewares
        this.middlewares();

        // routes
        this.routes();
    }

    async connectDB() {
        await dbConnection();
    }

    middlewares() {
        // cors
        this.app.use(cors());

        // reading and parsing of the body
        this.app.use(express.json());
    }

    routes() {
        this.app.use(this.categoriesRoute, require('../routes/categories'));
        this.app.use(this.productsRoute, require('../routes/products'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Listen on port ${this.port}`);
        });
    }
}

module.exports = Server; 