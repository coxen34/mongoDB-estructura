db.customer.insertMany([
    {
        "_id":"c1",
        "name": "customer1",
        "last_name": "lastName1",
        "address": {
            "postal_address": "carrer nº1",
            "cp": "11111",
            "localitat": "Sant Cugat del Vallès",
            "provincia": "Barcelona",
            "telf": 111111111
        }
    },
    {
        "_id":"c2",
        "name": "customer2",
        "last_name": "lastName2",
        "address": {
            "postal_address": "carrer nº2",
            "cp": "11111",
            "localitat": "Cerdanyola del Vallès",
            "provincia": "Barcelona",
            "telf": 222222222
        }
    },
    {
        "_id":"c3",
        "name": "customer3",
        "last_name": "lastName3",
        "address": {
            "postal_address": "carrer nº3",
            "cp": "33333",
            "localitat": "Sabadell",
            "provincia": "Barcelona",
            "telf": 333333333
        }
    },
    {
        "_id":"c4",
        "name": "customer4",
        "last_name": "lastName4",
        "address": {
            "postal_address": "carrer nº4",
            "cp": "44444",
            "localitat": "Terrassa",
            "provincia": "Barcelona",
            "telf": 444444444
        }
    },
    {
        "_id":"c5",
        "name": "customer5",
        "last_name": "lastName5",
        "address": {
            "postal_address": "carrer nº5",
            "cp": "55555",
            "localitat": "Montcada",
            "provincia": "Barcelona",
            "telf": 5555555555
        }
    }
]);
// validacions x Customer
db.runCommand({
    collMod: "customer",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["name", "last_name", "address"],
        properties: {
          name: {
            bsonType: "string",
            description: "Nombre del cliente"
          },
          last_name: {
            bsonType: "string",
            description: "Apellido del cliente"
          },
          address: {
            bsonType: "object",
            required: ["postal_address", "cp", "localitat", "provincia", "telf"],
            properties: {
              postal_address: {
                bsonType: "string",
                description: "Dirección postal"
              },
              cp: {
                bsonType: "string",
                description: "Código postal"
              },
              localitat: {
                bsonType: "string",
                description: "Localidad"
              },
              provincia: {
                bsonType: "string",
                description: "Provincia"
              },
              telf: {
                bsonType: "int",
                description: "Número de teléfono"
              }
            }
          }
        }
      }
    }
  });
  //________End Customer_______
  db.employees.insertMany([
    {
       "_id":"e1",
       "name": "employee1",
       "last-name": "last_name1",
       "nif": "25987412P",
       "telf":897452158,
       "type_worker":"cocinero",
       "shop_id":"sh1"
    },
    {
       "_id":"e2",
       "name": "employee2",
       "last-name": "last_name2",
       "nif": "15479632O",
       "telf":123254874,
       "type_worker":"repartidor",
       "shop_id":"sh1"
    },
    {
      "_id":"e3",
       "name": "employee3",
       "last-name": "last_name3",
       "nif": "21521265Y",
       "telf":258745896,
       "type_worker":"repartidor",
       "shop_id":"sh1"
    },
    {
      "_id":"e4",
       "name": "employee4",
       "last-name": "last_name4",
       "nif": "89787858A",
       "telf":123321587,
       "type_worker":"repartidor",
       "shop_id":"sh2"
    },
    {
      "_id":"e5",
       "name": "employee5",
       "last-name": "last_name5",
       "nif": "21236951W",
       "telf":568749623,
       "type_worker":"cocinero",
       "shop_id":"sh2"
    },
    {
      "_id":"e6",
       "name": "employee6",
       "last-name": "last_name6",
       "nif": "89745522S",
       "telf":897452587,
       "type_worker":"cocinero",
       "shop_id":"sh3"
    },
    {
       "_id":"e7",
       "name": "employee7",
       "last-name": "last_name7",
       "nif": "56874520M",
       "telf":2548999632,
       "type_worker":"repartidor",
       "shop_id":"sh2"
    },
    {
      "_id":"e8",
       "name": "employee8",
       "last-name": "last_name8",
       "nif": "78999875I",
       "telf":222558899,
       "type_worker":"repartidor",
       "shop_id":"sh3"
    },
    {
      "_id":"e9",
       "name": "employee9",
       "last-name": "last_name9",
       "nif": "25874748G",
       "telf":887998598,
       "type_worker":"repartidor",
       "shop_id":"sh3"
    }
    ])
    //___Validacions x employees
    db.runCommand({
      collMod: "employees",
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: ["name", "nif", "telf","type_worker"],
          properties: {
            name: {
              bsonType: "string",
              description: "Nombre del trabajador"
            },
            nif: {
              bsonType: "string",
              description: "NIF del trabajador"
            },
            telf: {
              bsonType: "int",
              description: "Teléfono del trabajador"
            },
           type_worker: {
              bsonType: "string",
              enum: ["cocinero","repartidor"],
              description: "Si trabaja como cocinero o repartidor'"
            }
          }
        }
      }
    });
    // _______End employees____
    db.products.insertMany([
      {
        "_id":"p1",
        "name": "Confit de pato",
        "type": "pizza",
        "img": "https://pixabay.com/es/photos/pizza-italiano-hecho-en-casa-queso-3007395/",
        "price": 10.99,
        "category_id":"64ec6b35aeb3355808832a76"
      },
      {
        "_id":"p2",
         "name": "Caribe",
        "type": "hamburguesa",
        "img":"https://pixabay.com/es/illustrations/burger-hamburguesa-comida-delicioso-2041192/",
        "price": 8.99
      },
      {
        "_id":"p3",
         "name": "Coca-Cola",
        "type": "bebida",
       "img":"https://pixabay.com/es/vectors/cola-refresco-mockup-coca-cola-2974358/",
        "price": 2.49
      },
      {
        "_id":"p4",
         "name": "Griega",
        "type": "pizza",
        "img": "https://pixabay.com/es/photos/pizza-italiano-hecho-en-casa-queso-3007395/",
        "price": 11.99,
        "category_id":"64ec6b35aeb3355808832a74"
      },
      {
        "_id":"p5",
         "name": "Greenchy",
        "type": "hamburguesa",
       "img":"https://pixabay.com/es/illustrations/burger-hamburguesa-comida-delicioso-2041192/",
        "price": 9.99
      },
      {
        "_id":"p6",
         "name": "Fanta naranja",
        "type": "bebida",
       "img": "https://pixabay.com/es/photos/aluminio-puede-coca-cola-cilindro-87987/",
        "price": 2.49
      },
      {
        "_id":"p7",
         "name": "Rúcula",
         "type": "pizza",
         "img": "https://pixabay.com/es/photos/pizza-italiano-hecho-en-casa-queso-3007395/",
         "price": 11.99,
         "category_id":"64ec6b35aeb3355808832a75"
      },
      {
        "_id":"p8",
         "name": "Greta",
        "type": "hamburguesa",
        "img":"https://pixabay.com/es/illustrations/burger-hamburguesa-comida-delicioso-2041192/",
        "price": 9.99
      },
      {
        "_id":"p9",
         "name": "Fanta limón",
        "type": "bebida",
      "img": "https://pixabay.com/es/photos/puede-lim%C3%B3n-chapoteo-antecedentes-6626782/",
        "price": 2.49
      },
      {
        "_id":"p10",
         "name": "Gorgonzola",
        "type": "pizza",
       "img": "https://pixabay.com/es/photos/pizza-italiano-hecho-en-casa-queso-3007395/",
        "price": 11.99,
      "category_id":"64ec6b35aeb3355808832a74"
      },
      {
        "_id":"p11",
         "name": "Pollotariana",
        "type": "hamburguesa",
        "img":"https://pixabay.com/es/illustrations/burger-hamburguesa-comida-delicioso-2041192/",
        "price": 9.99
      },
      {
        "_id":"p12",
         "name": "Agua",
        "type": "bebida",
         "price":2.0
      },
      {
        "_id":"p13",
         "name": "Mexicana",
        "type": "pizza",
       "img": "https://pixabay.com/es/photos/pizza-italiano-hecho-en-casa-queso-3007395/",
        "price": 11.99,
        "category_id":"64ec6b35aeb3355808832a76"
      },
      {
        "_id":"p14",
         "name": "Pigma",
        "type": "hamburguesa",
        "img":"https://pixabay.com/es/illustrations/burger-hamburguesa-comida-delicioso-2041192/",
        "price": 9.99
      },
      {
        "_id":"p15",
         "name": "Cerveza",
        "type": "bebida",
        "price": 3.0
      },
      ]);
      //_____Validacions x products_____
      db.runCommand({
        collMod: "products",
        validator: {
          $jsonSchema: {
            bsonType: "object",
            required: ["name", "type", "price"],
            properties: {
              name: {
                bsonType: "string",
                description: "Nombre del producto"
              },
              type: {
                bsonType: "string",
                enum: ["pizza", "hamburguesa","bebida"],
                description: "Tipo de producto 'sólo acepta pizza hamburguesa o bebida'"
              },
                 price: {
                    bsonType: "double",
                    description: "Precio",
                    minimum: 1,
                    maximum: 20
      
                  }
            }
          }
        }
      });
// ____End products_____      
db.categories.insertMany([
  {
     "_id":"cy1",
     "name": "Clásicas",
     "pizzas":[
    {
      "id_pizza":"p10"
  },
  {
      "id_pizza":"p4"
    }
      ]
  },
  {
    "_id":"cy2",
     "name": "Vegetarianas",
   "pizzas":[
    {
      "id_pizza":"p7"
  }
      ]
  
   },
  {
    "_id":"cy3",
     "name": "Gourmet",
  "pizzas":[
  {
  "id_pizza":"p1"
  },
  {
  "id_pizza":"p13"
  }
  ]
   }
  ])
// _____End categories_________  
db.shops.insertMany([
  {
          "_id":"sh1",
          "address": {
          "postal_address": "carrer shop1",
          "cp": "11113",
          "localitat": "Sant Cugat del Vallès",
          "provincia": "Barcelona"
      }
  },
{
          "_id":"sh2",
          "address": {
          "postal_address": "carrer shop2",
          "cp": "11443",
          "localitat": "Cerdanyola",
          "provincia": "Barcelona"
      }
  },
{
          "_id":"sh3",
          "address": {
          "postal_address": "carrer shop3",
          "cp": "11888",
          "localitat": "Sabadell",
          "provincia": "Barcelona"
      }
  }
])
//_______Validacions x shops
db.runCommand({
collMod: "shops",
validator: {
  $jsonSchema: {
    bsonType: "object",
    required: ["address"],
    properties: {
      address: {
        bsonType: "object",
        required: ["postal_address", "cp", "localitat", "provincia"],
        properties: {
          postal_address: {
            bsonType: "string",
            description: "Dirección postal"
          },
          cp: {
            bsonType: "string",
            description: "Código postal"
          },
          localitat: {
            bsonType: "string",
            description: "Localidad"
          },
          provincia: {
            bsonType: "string",
            description: "Provincia"
          }
        }
      }
    }
  }
}
});
//_____End shops_________
db.orders.insertOne(
{
"dataOrder":null,
"delivery":null,
"storePickUp":null
}
);
//___validacions x orders_____
db.runCommand({
    collMod: "orders",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["dataOrder", "delivery", "storePickUp"],
        properties: {
                              delivery: {
            bsonType: "string",
            enum: ["si", "no"],
            description:
              "El campo delivery debe ser uno de estos dos valores: si o no"
          },
                           store_pickUp: {
            bsonType: "string",
            enum: ["si", "no"],
            description:
              "El campo store_pickUp debe ser uno de estos dos valores: si o no"
          }
  
       },
      },
    },
  });
  //___calcul total products___
  let selectedProducts = [
    {
      "product_id": "p1",
      "quantity": 1
    },
    {
      "product_id": "p3",
      "quantity": 1
    },
   ];
  
  let total_price = 0;
  for (let product of selectedProducts) {
    let productInfo = db.products.findOne({ "_id": product.product_id });
  //para garantizar que solo se sume el precio total si se encuentra la información del producto en la base de datos.
   if (productInfo) {
      total_price += productInfo.price * product.quantity;
    }
  }
  db.orders.insertOne({
    "customer_id": "c1",
     "dataOrder": "2023-01-12",
     "delivery":"si",
     "storePickUp": "no",
     "products":   selectedProducts,
     "total_price": total_price,
      "data_delivery":"",
      "worked_delivery": "e2"
   });
   //___calcul total products2___
   let selectedProducts2= [
    {
      "product_id": "p7",
      "quantity": 1
    },
    {
      "product_id": "p8",
      "quantity": 1
    },
  {
      "product_id": "p9",
      "quantity": 1
    },
  {
      "product_id": "p12",
      "quantity": 3
    }
  
   ];
  
  let total_price2 = 0;
  for (let product of selectedProducts2) {
    let productInfo = db.products.findOne({ "_id": product.product_id });
  //para garantizar que solo se sume el precio total si se encuentra la información del producto en la base de datos.
  if (productInfo) {
      total_price2 += productInfo.price * product.quantity;
    }
  }
  //creo objeto para que recoja la fecha y hora actual PERO NO ES REAL
  let deliveryDate= new Date();
  db.orders.insertOne({
   "customer_id": "c3",
    "dataOrder": "2023-02-15",
    "delivery":"si",
    "storePickUp": "no",
    "products":   selectedProducts2,
    "total_price": total_price2,
     "data_delivery":deliveryDate,
     "worked_delivery": "e2"
  });
  
   
  
  
    
  