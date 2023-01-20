const mercadoPago = require('mercadopago');

const credential = process.env.ACCESS_TOKEN_MP;
let server = process.env.SERVER || 'http://localhost:5000';
const success = `${server}`; //redirect en caso de exito
const failure = `${server}`; //en caso de falla
const pending = `${server}`; //en caso de quedar pendiente

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
        throw new Error(error)
    }
}

module.exports = mp;