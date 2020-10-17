const controller = require('../../controller/shop/controller.checkout.js')
module.exports = (app)=>{
    app.post('/api/shop/checkout',controller.checkout);
}