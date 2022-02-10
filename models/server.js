const express = require('express');
const cors = require('cors');


class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        // middlewares
        this.middlewares();

        // routes
        this.routes();
    }

    middlewares() {
        // public directory
        this.app.use(cors());
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.get('/api', (req, res) => {
            res.json({
                ok: true,
                "msg": "get API" 
            });
        });
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Listen on port ${this.port}`);
        });
    }
}

module.exports = Server; 