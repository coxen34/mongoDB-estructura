db.providers.insertMany([
{
"_id":"prov1",
  "name": "provider1",
  "adress": {
    "street": "street1",
    "num": 1,
    "floor": 1,
    "door": 1,
    "city": "city1",
    "c.p": 11111,
    "country": "country1",
    "telefon": "111111111",
    "fax": 1111111111
  },
  "nif": "11111111P"
},
{
"_id":"prov2",
  "name": "provider2",
  "adress": {
    "street": "street2",
    "num": 2,
    "floor": 2,
    "door": 2,
    "city": "city2",
    "c.p": 22222,
    "country": "country2",
    "telefon": "222222222",
    "fax": "2222222222"
  },
  "nif": "22222222O"
},
{
"_id":"prov3",
  "name": "provider3",
  "adress": {
    "street": "street3",
    "num": 3,
    "floor": 3,
    "door": 3,
    "city": "city3",
    "c.p": 33333,
    "country": "country3",
    "telefon": "333333333",
    "fax":  "3333333333"
  },
  "nif": "33333333Y"
},
{
"_id":"prov4",
  "name": "provider4",
  "adress": {
    "street": "street4",
    "num": 4,
    "floor": 4,
    "door": 4,
    "city": "city4",
    "c.p": 44444,
    "country": "country4",
    "telefon": "444444444",
    "fax": 4444444444
  },
  "nif": "44444444P"
}
]);
db.brands.insertMany([
    {"_id":"br1","name": "brand1","id_provider":"prov1"},
    {"_id":"br2","name": "brand2","id_provider":"prov1"},
    {"_id":"br3","name": "brand3","id_provider":"prov2"},
    {"_id":"br4","name": "brand4","id_provider":"prov3"},
    {"_id":"br5","name": "brand5","id_provider":"prov4"},
    {"_id":"br6","name": "brand6","id_provider":"prov4"}
    ])
db.glasses.insertMany([
    {
    "_id":"gl1",
    "graduation": {
        "graduationLeft": 0.25,
        "graduationRight": 1
        },
    "frame": {
        "frameType": "flotant",
        "frameColor": "negre"
        },
    "glassColor": "transparent",
    "price": 24.95,
    "id_brand":"br1"
    },
    {
    "_id":"gl2",
    "graduation": {
        "graduationLeft": 0.25,
        "graduationRight": 1
        },
    "frame": {
        "frameType": "pasta",
        "frameColor": "verd"
        },
    "glassColor": "negre",
    "price": 42.9,
    "id_brand":"br2"
    },
    {
    "_id":"gl3",
    "graduation": {
        "graduationLeft": 0.5,
        "graduationRight": 1
        },
    "frame": {
        "frameType": "metàl.lica",
        "frameColor": "plata"
        },
    "glassColor": "negre",
    "price": 35,
    "id_brand":"br3"
    },
    {
    "_id":"gl4",
    "graduation": {
        "graduationLeft": 1,
        "graduationRight": 0.25
        },
    "frame": {
        "frameType": "pasta",
        "frameColor": "ocre"
        },
    "glassColor": "marron",
    "price": 53.55,
    "id_brand":"br4"
    },
    {
    "_id":"gl5",
    "graduation": {
        "graduationLeft": 1.25,
        "graduationRight": 0.25
        },
    "frame": {
        "frameType": "metàl.lica",
        "frameColor": "plata"
        },
    "glassColor": "transparent",
    "price": 100,
    "id_brand":"br5"
    },
    {
    "_id":"gl6",
    "graduation": {
        "graduationLeft": 0,
        "graduationRight": 0
        },
    "frame": {
        "frameType": "flotant",
        "frameColor": "transparent"
        },
    "glassColor": "rojo",
    "price": 150.25,
    "id_brand":"br6"
    },
    {
    "_id":"gl7",
    "graduation": {
        "graduationLeft": 0,
        "graduationRight": 0
        },
    "frame": {
        "frameType": "pasta",
        "frameColor": "marron"
        },
    "glassColor": "transparent",
    "price": 73,
    "id_brand":"br6"
    }
    ])
db.employees.insertMany([
    {"_id":"em1","name": "employee1"},
    {"_id":"em2","name": "employee2"},
    {"_id":"em3","name": "employee3"},
    {"_id":"em4","name": "employee4"}
    ])
db.costumers.insertMany([
    {
    "_id":"cost1",
    "name": "client1",
        "adress": [
        {
            "postAdress": "C/del num1 nº24",
            "C.P.": "11111",
            "city": "Barcelona",
            "phone": "333251478",
            "email": "mailto1"
        }
        ],
    "RegistDate": "2020-1-25",
    "ReferringCustomer": null
    },
    {
    "_id":"cost2",
    "name": "client2",
        "adress": [
        {
            "postAdress": "C/del num2 nº42",
            "C.P.": "22222",
            "city": "Sabadell",
            "phone": "352687458",
            "email": "mailto2"
        }
        ],
    "RegistDate": "2020-1-25",
    "ReferringCustomer":"cost1"
    },
    {
    "_id":"cost3",
    "name": "client3",
        "adress": [
        {
            "postAdress": "C/del num3 nº4",
            "C.P.": "33333",
            "city": "Sant Cugat del Vallès",
            "phone": "609687458",
            "email": "mailto3"
        }
        ],
    "RegistDate": "2020-10-12",
    "ReferringCustomer": null
    },
    {
    "_id":"cost4",
    "name": "client4",
        "adress": [
        {
            "postAdress": "Pl.del num4 nº2 ",
            "C.P.": "44444",
            "city": "Malgrat de Mar",
            "phone": "612256879",
            "email": "mailto4"
        }
        ],
    "RegistDate": "2020-9-11",
    "ReferringCustomer":"cost2"
    },
    {
    "_id":"cost5",
    "name": "client5",
        "adress": [
        {
            "postAdress": "Avinguda num5 nº13 ",
            "C.P.": "55555",
            "city": "Montgat",
            "phone": "606215874",
            "email": "mailto5"
        }
        ],
    "RegistDate": "2020-11-09",
    "ReferringCustomer": null
    }
    ])
db.sales.insertMany([
    {
    "_id":"sale1",
    id_glass: "gl1",
    id_employee:"em1",
    id_costumer: "cost2",
    saleDate: "2021-12-05"
    },
    {
    "_id":"sale2",
    id_glass: "gl2",
    id_employee:"em3",
    id_costumer: "cost4",
    saleDate: "2022-01-15"
    },
    {
    "_id":"sale3",
    id_glass: "gl3",
    id_employee:"em3",
    id_costumer: "cost1",
    saleDate: "2021-12-10"
    },
    {
    "_id":"sale4",
    id_glass: "gl4",
    id_employee:"em4",
    id_costumer: "cost3",
    saleDate: "2022-02-05"
    },
    {
    "_id":"sale5",
    id_glass: "gl4",
    id_employee:"em2",
    id_costumer: "cost5",
    saleDate: "2022-02-20"
    }
    ])
                    

                
            
        
    

