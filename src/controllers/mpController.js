const {request,response} = require('express');
const mp = require('../helpers/mp')

module.exports = {
    process: async (req=request, res=response) => {
        try {
            //a items se agrega la propiedad currency id para la moneda con un map
            /* let items = [{
                id:23,
                title:'alfajores',
                currency_id:'ARS',
                unit_price:100, //en esta propiedad ponemos el precio de la unidad
                quantity:2,//aca va la cantidad del producto
            }]
             */
            const {items} = req.body;

            let link = await mp(items, 3, 1635)

            res.status(200).json({
                link : link.body.init_point
            })

        } catch (error) {
            console.log(error)
        }
    },
    feedback:(req=request, res=response)=>{
        console.log(req.query)
    }
}