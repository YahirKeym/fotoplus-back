exports = (module.exports = {});
const XLSX = require('read-excel-file/node');
let fs = require('fs');

function convertProductsToJson(){
    let File = '../../../public/excelProducts/Libro2.xlsx';
    XLSX(File).then(async (rows)=>{
        let productos = []
        let nums = 0;
        let colors = []
        let lastName = '';
        let dataRecorrido = 0;
        for await(data of rows){
            if(nums !== 0){
                let dataColors = data[32].split(',');
                if(data[0] !== lastName){
                    lastName = data[0];
                    colors.push({name:data[0],colors:[...dataColors]});
                    dataRecorrido++;
                }else{
                    // colors[dataRecorrido-1].colors = [...colors[dataRecorrido-1].colors,...dataColors]
                }
            }
            nums++;
        }
        nums = 0;
        let sizes = [];
        lastName = '';
        dataRecorrido = 0;
        for await(data of rows){
            if(data[20] === null) data[20] = 'dflt'
            data[20] = data[20].slice(0,5);
            console.log(data[0])
            if(nums !== 0){
                if(data[0] !== lastName){
                    lastName = data[0];
                    sizes.push({name:data[0], sizes:[{name:data[20],stock:9999, price:data[3],description:data[2]}]})
                    dataRecorrido++;
                }else{
                    let exist = false;
                    for await(size of sizes[dataRecorrido-1].sizes){
                        if(size.name === data[20]){
                            exist = true;
                        }
                    }
                    if(!exist){
                        sizes[dataRecorrido-1].sizes.push({name:data[20],stock:9999, price:data[3],description: data[2]});
                    }
                }
            }
            nums++;
        }
        nums = 0;
        lastName = '';
        for await(data of rows){
            if(data[0] !== "ID" && data[0] !== null){
                if(data[0] !== lastName){
                    if(data[6] === undefined || data[6] === null || data[6].length === 0){
                        data[6] = '1.jpg';
                    }
                    lastName = data[0]
                    let dataProduct = {
                        "id": `${data[12]}`,
                        "sku": `${data[12]}`,
                        "name": data[0],
                        "price": data[3],
                        "discount": 0,
                        "offerEnd": "October 5, 2020 12:11:00",
                        "new": false,
                        "rating": 4,
                        "saleCount": 54,
                        "category": [data[4]],
                        "tag": [data[4]],
                        "variation": [],
                        "image": [],
                        "Capacidad":data[28],
                        "Tipo":data[16],
                        "Codigo":data[12],
                        "shortDescription": `${data[3]}`,
                        "fullDescription": data[2]
                      }
                      let saveTamanios = []
                      for await(tamanios of sizes){
                          if(tamanios.name === data[0]){
                                saveTamanios = tamanios.sizes
                          }
                      }
                      let images = data[6].split(',');
                      for await(image of images){
                          image = image.trimStart();
                        dataProduct.image.push(`/assets/img/product/fashion/${image}`)
                      }
                      let imagen = 0;
                      for await(colores of colors){
                          if(colores.name === data[0]){
                              for await(dataColors of colores.colors){
                                  let imagenAMostrar = images[imagen] || images[0];
                                  imagenAMostrar = imagenAMostrar.trimStart();
                                    dataProduct.variation.push({
                                      color:dataColors,
                                      image: `/assets/img/product/fashion/${imagenAMostrar}`,
                                      size: saveTamanios
                                  })
                                  imagen++;
                              }
                          }
                      }
                    //   console.log(dataProduct)
                    productos.push(dataProduct)
                }
            }
                nums++;
    }
        fs.writeFile('products.json',JSON.stringify(productos),(err)=>{
            if(err) console.log(err);
            console.log('Ok')
        })
    }).catch(err=>{
        console.log(err)
    });
}
convertProductsToJson();
// {
//     "id": `${data[0]}`,
//     "sku": `${data[1]}`,
//     "name": data[2],
//     "price": data[5],
//     "discount": 0,
//     "offerEnd": "October 5, 2020 12:11:00",
//     "new": false,
//     "rating": 4,
//     "saleCount": 54,
//     "category": [data[6]],
//     "tag": [data[6]],
//     "variation": [
//         {
//             "color": "white",
//             "image": `/assets/img/product/fashion/${data[8]}`,
//             "size": [
//             {
//                 "name": "x",
//                 "stock": 3
//             },
//             {
//                 "name": "m",
//                 "stock": 2
//             },
//             {
//                 "name": "xl",
//                 "stock": 5
//             }
//             ]
//         },
//         {
//             "color": "black",
//             "image":`/assets/img/product/fashion/${data[8]}`,
//         "size": [
//         {
//             "name": "x",
//             "stock": 4
//         },
//         {
//             "name": "m",
//             "stock": 7
//         },
//         {
//             "name": "xl",
//             "stock": 9
//         },
//         {
//             "name": "xxl",
//             "stock": 1
//         }
//     ]
//       },
//       {
//         "color": "brown",
//         "image": `/assets/img/product/fashion/${data[8]}`,
//         "size": [
//           {
//             "name": "x",
//             "stock": 1
//           },
//           {
//             "name": "m",
//             "stock": 2
//           },
//           {
//             "name": "xl",
//             "stock": 4
//           },
//           {
//             "name": "xxl",
//             "stock": 0
//           }
//         ]
//       }
//     ],
//     "image": [
//       `/assets/img/product/fashion/${data[8]}`,
//       `/assets/img/product/fashion/${data[8]}`,
//       `/assets/img/product/fashion/${data[8]}`,
//       `/assets/img/product/fashion/${data[8]}`,
//       `/assets/img/product/fashion/${data[8]}`
//     ],
//     "shortDescription": data[3],
//     "fullDescription": data[4]
//   }
