const mercadoPago = require('mercadopago');

const credential = process.env.ACCESS_TOKEN_MP;
let server = process.env.SERVER || 'http://localhost:5000';
const success = `${server}/api/orders/feedback`; //redirect en caso de exito
const failure = `${server}/api/orders/feedback`; //en caso de falla
const pending = `${server}/api/orders/feedback`; //en caso de quedar pendiente

const mp = async (items,cuotes,shipping) => {
    try {
        //preferencias de api
        mercadoPago.configure({
            access_token: credential
        })

        let config = {
            items,
            back_urls:{
                success,
                failure,
                pending
            },
            payment_methods:{
                installments: cuotes
            },
            auto_return: 'approved',
            shipments:{
                cost: shipping,
                mode: 'not_specified'
            }
        }

        let preference = await mercadoPago.preferences.create(config);
        return preference;
    } catch (error) {
        console.log(error)
    }
}

module.exports = mp;