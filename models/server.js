const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');


class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        
        this.userRoutes = '/api/users';
        this.categoriesRoute = '/api/categories';

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

        // public directory
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.userRoutes, require('../routes/users'));
        this.app.use(this.categoriesRoute, require('../routes/categories'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Listen on port ${this.port}`);
        });
    }
}

module.exports = Server; 