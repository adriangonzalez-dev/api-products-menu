const {request,response} = require('express');
const {Order} = require('../models');

module.exports = {
    createOrder: async (req=request, res=response) => {
        const {chart, paid, subtotal} = req.body; 

        try {
            let idProducts = chart.map(product=>{
                return {
                    id: product._id,
                    cant: product.cant
                }
            });

            let newOrder = new Order({
                paid,
                subtotal,
                products:idProducts
            });

            let order = await newOrder.save();


            res.status(200).json({
                status: 200,
                order
            })


        } catch (error) {
            console.log(error)
        }
    }
}