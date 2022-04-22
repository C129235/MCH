const swaggerAutogen = require('swagger-autogen')()

const doc = {
    info: {
        version: "1.0.0",
        title: "Hiberus Checkout API",
        description: "Documentation of Checkout service"
    },
    host: "localhost:3000",
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "Checkout"
        }
    ],
    definitions: {
        Order: {
            clientId: "1",
            date: "2012-04-23T18:25:43.511Z",
            direction:"",
            products:[
                {
                    id: "1",
                    quantity: "12",
                    cost: "12.5"
                },
                {
                    id: "2",
                    quantity: "13",
                    cost: "5.5"
                }
            ]
        }
    }
}

const outputFile = './swagger.json'
const endpointsFiles = ['./routes/*.js']

swaggerAutogen(outputFile, endpointsFiles, doc);