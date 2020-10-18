exports = (module.exports = {});
const Month = require('../../../../utils/getMonthNames.js');
let newDate = new Date();
let Day = newDate.getUTCDate();
let Year = newDate.getUTCFullYear();
let MonthOfNumber = newDate.getMonth();
/**
 * 
 */
exports.header = ()=> `
<table class="table_full editable-bg-color bg_color_e6e6e6 editable-bg-image" bgcolor="#e6e6e6" width="100%" align="center"  mc:repeatable="castellab" mc:variant="Header" cellspacing="0" cellpadding="0" border="0">
    <!-- header -->
    <tr>
        <td>
            <!-- container -->
            <table class="table1 editable-bg-color bg_color_303f9f" bgcolor="#FEE862" width="600" align="center" border="0" cellspacing="0" cellpadding="0" style="margin: 0 auto;">
                <!-- padding-top -->
                <tr><td height="20"></td></tr>
                <tr>
                    <td>
                        <!-- Inner container -->
                        <table class="table1" width="520" align="center" border="0" cellspacing="0" cellpadding="0" style="margin: 0 auto;">
                            <tr>
                                <td>
                                    <table width="50%" align="left" border="0" cellspacing="0" cellpadding="0">
                                        <tr>
                                            <td align="left">
                                                <a href="#" class="editable-img">
                                                    <img editable="true" mc:edit="image001" src="https://i.imgur.com/eTYQzHV.png" width="68" style="display:block; line-height:0; font-size:0; border:0;" border="0" alt="logo" />
                                                </a>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td align="center">
                                    <div class="editable-img">
                                        <img editable="true" mc:edit="image003" src="https://i.imgur.com/h2vkXgR.png"  style="display:block; line-height:0; font-size:0; border:0;" border="0" alt="" />
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td mc:edit="text001" align="center" class="text_color_ffffff" style="color: #212121; font-size: 30px; font-weight: 700; font-family: lato, Helvetica, sans-serif; mso-line-height-rule: exactly;">
                                    <div class="editable-text">
                                        <span class="text_container">
                                            <multiline>
                                                Detalle del Pedido
                                            </multiline>
                                        </span>
                                    </div>
                                </td>
                            </tr>


                            <tr>
                                <td mc:edit="text002" align="center" class="text_color_ffffff" style="color: #212121	; font-size: 12px; font-weight: 300; font-family: lato, Helvetica, sans-serif; mso-line-height-rule: exactly;">
                                    <div class="editable-text">
                                        <span class="text_container">
                                            <multiline>
                                                ${Day} ${Month[MonthOfNumber]}, ${Year}
                                            </multiline>
                                        </span>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table><!-- END container -->
        </td>
    </tr>
`
/**
 * 
 */
let InitInformation = `
<tr>
    <td>
        <!-- container -->
        <table class="table1 editable-bg-color bg_color_ffffff" bgcolor="#ffffff" width="600" align="center" border="0" cellspacing="0" cellpadding="0" style="margin: 0 auto;">
            <!-- padding-top -->
            <tr><td height="60"></td></tr>

            <tr>
                <td>
                    <!-- inner container -->
                    <table class="table1" width="520" align="center" border="0" cellspacing="0" cellpadding="0" style="margin: 0 auto;">
`
/**
 * 
 */
exports.userEmail = (Nombre = '',Apellidos = '')=>`
    ${InitInformation}                        
    <tr>
        <td mc:edit="text003" align="left" class="center_content text_color_282828" style="color: #282828; font-size: 18px; font-weight: 700; font-family: lato, Helvetica, sans-serif; mso-line-height-rule: exactly;">
            <div class="editable-text">
                <span class="text_container">
                    <multiline>Hola ${Nombre} ${Apellidos} aquí está tu carrito.</multiline>
                </span>
            </div>
        </td>
    </tr>
    
    <!-- horizontal gap -->
    <tr><td height="10"></td></tr>

    <tr>
        <td mc:edit="text004" align="left" class="center_content text_color_282828" style="color: #282828; font-size: 14px;line-height: 2; font-weight: 500; font-family: lato, Helvetica, sans-serif; mso-line-height-rule: exactly;">
            <div class="editable-text" style="line-height: 2;">
                <span class="text_container">
                    <multiline>
                    Aquí está un resumen de su reciente pedido hecho el ${Day} de ${Month[MonthOfNumber]} de ${Year}.
                    </multiline>
                </span>
            </div>
        </td>
        </tr>
        <!-- horizontal gap -->
        <tr><td height="50"></td></tr>
`
/**
 * 
 */
exports.adminEmail = (name = '',Apellidos = '',Correo ='',phone = '',addresExt = '',addresInt = '',city = '',apartament = '',informationPlus = '',tipoDeDato='',DNI='',Nombre='',Ruc='',RazonSocial='')=>`
    ${InitInformation}
    <tr>
        <td mc:edit="text003" align="left" class="center_content text_color_282828" style="color: #282828; font-size: 18px; font-weight: 700; font-family: lato, Helvetica, sans-serif; mso-line-height-rule: exactly;">
            <div class="editable-text">
                <span class="text_container">
                    <multiline>${name} ${Apellidos} hizo un pedido, aquí está su carrito.</multiline>
                </span>
            </div>
        </td>
    </tr>
    <!-- horizontal gap -->
    <tr><td height="10"></td></tr>
    <tr>
        <td mc:edit="text004" align="left" class="center_content text_color_282828" style="color: #282828; font-size: 14px;line-height: 2; font-weight: 500; font-family: lato, Helvetica, sans-serif; mso-line-height-rule: exactly;">
            <div class="editable-text" style="line-height: 2;">
                <span class="text_container">
                    <multiline>
                        Aquí está un resumen del reciente pedido hecho el ${Day} de ${Month[MonthOfNumber]} de ${Year} por ${Nombre} ${Apellidos}.
                    </multiline>
                    <p>El correo del cliente: ${Correo}</p>
                    <p>El Telefono del cliente: ${phone}</p>
                    <p>Dirección del cliente: ${addresExt}</p>
                    <p> ${addresInt}</p>
                    <p>Distrito: ${city}</p>
                    <p>Departamento: ${apartament}</p>
                    <p>Información extra: ${informationPlus}</p>
                    <p>Tipo de Comprobante: ${tipoDeDato}</p>
                    ${DNI.length !== 0 ? `<p>DNI: ${DNI}</p>` : ''}
                    <p>Nombre del comprador: ${Nombre}</p>
                    ${Ruc.length !== 0 ? `<p>RUC: ${Ruc}</p>` : ''}
                    ${RazonSocial.length !== 0 ? `<p>Razón Social: ${RazonSocial}</p>` : ''}
                </span>
            </div>
        </td>
        </tr>
        <!-- horizontal gap -->
        <tr><td height="50"></td></tr>
`
/**
 * 
 */
let productImage = (image)=>`
    <table class="table1-2" width="125" align="left" border="0" cellspacing="0" cellpadding="0">
        <tr>
            <td align="center">
                <a href="#" style="border-style: none !important; display: block; border: 0 !important;" class="editable-img">
                    <img editable="true" mc:edit="image004" src="https://fotoplus.pe${image}" style="width:100%;  display:block; line-height:0; font-size:0; border:0;" border="0" alt="" />
                </a>
            </td>
        </tr>
        <!-- margin-bottom -->
        <tr><td height="30"></td></tr>
    </table>
`
/**
 * 
 */
let productName = (description)=>`
    <tr>
        <td mc:edit="text005" align="left" class="center_content text_color_282828" style="color: #282828; font-size: 14px; font-weight: 600; font-family: lato, Helvetica, sans-serif; mso-line-height-rule: exactly;">
            <div class="editable-text">
                <span class="text_container">
                    <multiline>
                        ${description}
                    </multiline>
                </span>
            </div>
        </td>
    </tr>
`
/**
 * 
 */
let productData = {
    typeData : (nameData = '')=>`
        <td mc:edit="text007" align="left" class="center_content text_color_282828" style="color: #282828; font-size: 12px; font-weight: 600; font-family: lato, Helvetica, sans-serif; mso-line-height-rule: exactly;">
            <div class="editable-text">
                <span class="text_container">
                    <multiline>${nameData}</multiline>
                </span>
            </div>
        </td>
    `,
    quantityData : (cuantity = '')=>`
        <td mc:edit="text010" align="left" class="center_content text_color_303f9f" style="color: #303f9f; font-size: 12px; font-weight: 400; font-family: lato, Helvetica, sans-serif; mso-line-height-rule: exactly;">
            <div class="editable-text">
                <span class="text_container">
                    <multiline>${cuantity}</multiline>
                </span>
            </div>
        </td>
    `
}
/**
 * 
 */
exports.product = ({name,price,quantity,image,Codigo,description,selectedProductColor} )=>`
    <tr>
        <td>
            <!-- column-1  -->
           <!-- END column-1 -->
                ${productImage(image)}
            <!-- vertical gap -->
            <table class="tablet_hide" width="40" align="left" border="0" cellspacing="0" cellpadding="0">
                <tr><td height="1"></td></tr>
            </table>

            <!-- column-2  -->
            <table class="table1-2" width="355" align="left" border="0" cellspacing="0" cellpadding="0">
                ${productName(description ? description : name)} : ${selectedProductColor}
                <!-- horizontal gap -->
                <tr><td height="5"></td></tr>
                <!-- horizontal gap -->
                <tr><td height="10"></td></tr>
                <tr>
                    <td>
                        <!-- sub-column-1  -->
                        <table class="table1-2" align="left" border="0" cellspacing="0" cellpadding="0">
                            <tr>
                            
                                ${productData['typeData']('Código')}
                                <td width="10"></td>
                                ${productData['typeData']('Cantidad')}
                                <td width="10"></td>
                                ${productData['typeData']('Precio')}
                                <td width="10"></td>
                                ${productData['typeData']('Subtotal')}
                            </tr>
                            <tr><td height="5"></td></tr>
                            <tr>
                            
                                ${productData['quantityData'](`${Codigo}`)}
                                <td width="10"></td>
                                ${productData['quantityData'](quantity)}
                                <td width="10"></td>
                                ${productData['quantityData'](`S/${price}`)}
                                <td width="10"></td>
                                ${productData['quantityData'](`S/${price*quantity}`)}
                            </tr>
                            <!-- margin-bottom -->
                            <tr><td height="20"></td></tr>
                        </table><!-- END sub-column-1 -->

                        <!-- vertical gap -->
                        <table class="tablet_hide" width="40" align="left" border="0" cellspacing="0" cellpadding="0">
                            <tr><td height="1"></td></tr>
                        </table>
                    </td>
                </tr>
                <!-- margin-bottom -->
                <tr><td height="30"></td></tr>
            </table><!-- END column-2 -->
        </td>
    </tr>
`

let footer = {
    init: (total)=> `
    <tr>
        <td>
            <!-- container -->
            <table class="table1" width="600" align="center" border="0" cellspacing="0" cellpadding="0" style="margin: 0 auto;">
                <!-- padding-top -->
                <tr><td height="40">
                    <h4 style="margin-left:20px;">Total a pagar: S/${total}</h4>
                </td></tr>

                <tr>
                    <td>
                        <!--  column-1 -->
                        <table class="table1-2" width="350" align="left" border="0" cellspacing="0" cellpadding="0">
                            <tr>
                                <td mc:edit="text032" align="left" class="center_content text_color_929292" style="color: #929292; font-size: 14px; line-height: 2; font-weight: 400; font-family: lato, Helvetica, sans-serif; mso-line-height-rule: exactly;">
                                    <div class="editable-text" style="line-height: 2;">
                                        <span class="text_container">
    `,
    end: `
                                        </span>
                                    </div>
                                </td>
                            </tr>
                            <!-- horizontal gap -->
                            <tr><td height="20"></td></tr>
                            <!-- horizontal gap -->
                            <tr><td height="10"></td></tr>
                            <!-- margin-bottom -->
                            <tr><td height="30"></td></tr>
                        </table><!-- END column-1 -->
                        <!-- vertical gap -->
                        <table class="tablet_hide" width="130" align="left" border="0" cellspacing="0" cellpadding="0">
                            <tr><td height="1"></td></tr>
                        </table>
                    </td>
                </tr>
                <!-- padding-bottom -->
                <tr><td height="70"></td></tr>
            </table><!-- END container -->
        </td>
    </tr>
</table>
    `
}
/**
 * 
 */
exports.footerUser = (total)=>`
    ${footer['init'](total)}
    <multiline>
        Esta recibiendo este email porque haz comprado en :<a href="https://www.fotoplus.pe" target="_blank"  style="color: #212121;text-decoration: none;"> fotoplus.pe</a>
    </multiline>
    ${footer['end']}
`
/**
 * 
 */
exports.footerAdm = (Nombre = '', Apellido = '',total)=>`
    ${footer['init'](total)}
    <multiline>
        Esta recibiendo este email porque ${Nombre} ${Apellido} ha comprado en :<a href="https://www.fotoplus.pe" target="_blank"  style="color: #212121;text-decoration: none;"> fotoplus.pe</a>
    </multiline>
    ${footer['end']}
`
