exports = (module.exports = {});
const nodemailer = require('nodemailer');
const Template = require('./templatesEmail/confirmationEmail/confirmOrder.js');
exports.sendEmail = ({name, lastname, addressExt, addresInt,city,apartament,postalCode,phone,email,informationPlus,items,typeDatos,DNI,Nombre,RUC,RazonSocial,image})=> new Promise((resolve,reject)=>{
    let configuration = {
        host: "mail.fotoplus.pe",
        port: 587,
        auth: {
            user: "tienda@fotoplus.pe",
            pass: "elpolob121"
        },
        tls: {
            rejectUnauthorized: false
        }
    }
    
    let Transporter = nodemailer.createTransport(configuration);
    let htmlForUser = Template.header();
    let htmlForAdmin = Template.header();
    htmlForAdmin += Template.adminEmail(name, lastname,email,phone,addressExt,addresInt,city,apartament,informationPlus,typeDatos,DNI,Nombre,RUC,RazonSocial);
    htmlForUser += Template.userEmail(name, lastname)
    let total = 0;
    for (let index = 0; index < items.length; index++) {
        htmlForAdmin += Template.product(items[index]);
        htmlForUser += Template.product(items[index]);
        total = total + items[index].quantity * items[index].price;
    }
    htmlForAdmin += Template.footerAdm(name, lastname,total);
    htmlForUser += Template.footerUser(total);
    let EmailOptionsUser = {
        from: 'tienda@fotoplus.pe',
        to: email,
        subject: 'Gracias por su pedido!',
        html: htmlForUser
    };
    let EmailOptionsAdm = {
        from: 'tienda@fotoplus.pe',
        to: 'tienda@fotoplus.pe',
        subject: 'Pedido Nuevo!',
        html: htmlForAdmin
    };
    Transporter.sendMail(EmailOptionsUser,(err,info)=>{
        // console.log("error 1 ", err)
        if(err) reject(err);
        // console.log("informacion 1", info)
        Transporter.sendMail(EmailOptionsAdm,(err,info)=>{
            // console.log("error 2 ", err)
            if(err) reject(err);
            // console.log("informacion 2", info)
            resolve(info);
        })
        resolve(info);
    })
})
