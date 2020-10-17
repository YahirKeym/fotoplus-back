const emailServices = require('../../services/sendEmail/service.sendEmail.js');
exports = (module.exports = {});

exports.checkout = ({body},res)=>{
    emailServices.sendEmail(body).then(result=>{
        res.json({status:true});
    }).catch(err=>{
        res.json({status:err});
    });
    return;
}
