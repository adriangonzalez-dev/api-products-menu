const {Product} = require('../models')

module.exports = {
    getProducts: async (req,res)=>{
        const {limit = 5, offset = 0} = req.query
        
        const [total, products] = await Promise.all([

            Product.countDocuments({active:true}),
            Product.find({active:true})
            .populate('category','name')
            .limit(+limit)
            .skip(+offset)
        ])

        res.status(200).json({
            total,
            products
        })
    },
    getProductsById: async (req,res)=>{
        const {id} = req.params;

        const product = await Product.findById(id)
        .populate('category','name')

        res.status(200).json({
            product
        })
    },
    createProduct: async (req,res)=>{

        const properties = {
            name: req.body.name.trim().toUpperCase(),
            description: req.body.description,
            price: +req.body.price,
            category: req.category._id,
            stock: req.body.stock,
        }

        const product = new Product(properties);

        await product.save()

        res.status(201).json({
            product
        })
    },
    updateProduct: async (req,res)=>{

        const {id} = req.params

        const properties = {
            name: req.body.name.trim().toUpperCase(),
            description: req.body.description,
            price: +req.body.price,
            category: req.category._id,
            stock: req.body.stock,
        }

        const product = await Product.findByIdAndUpdate(id, properties, {new:true})

        res.status(201).json({
            product
        })
    },

    deleteProduct: async (req,res)=>{

        const {id} = req.params

        const product = await Product.findByIdAndUpdate(id,{active:false})

        res.status(200).json({
            product
        })
    }
}

