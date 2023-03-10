const express = require('express');
const path = require('path');
const cors = require('cors');
const {dbConnection} = require('../db/connection');
const { categoryRoutes,
        productsRoutes,
        uploadFilesRoutes,
        orderRoutes} = require('../routes');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT

        //paths
        this.paths = {
            categories: '/api/categories',
            products: '/api/products',
            orders: '/api/orders',
            files: '/api/uploads',
        }

        //Database Connection
        this.dbConnect()

        //middlewares
        this.middlewares();

        //mis rutas
        this.routes();
    }

    async dbConnect (){
        await dbConnection()
    }

    routes() {
        this.app.use( this.paths.categories, categoryRoutes );
        this.app.use( this.paths.products, productsRoutes );
        this.app.use( this.paths.files, uploadFilesRoutes );
        this.app.use( this.paths.orders, orderRoutes);
    }

    listen() {
        this.app.listen(this.port,()=>{
            console.log(`Servidor abierto en puerto ${this.port}`)
        })
    }

    middlewares() {
        //CORS
        this.app.use(cors({
            origin:'https://menu-pedidos-agdev.netlify.app',
            optionsSuccessStatus:200
        }));
        
        //Lectura y parseo del body
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}))

        
    }
}

module.exports = Server