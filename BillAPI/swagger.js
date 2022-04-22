const swaggerAutogen = require('swagger-autogen')()

const doc = {
    info: {
        version: "1.0.0",
        title: "Hiberus Bill API",
        description: "Documentation of Bill service"
    },
    host: "localhost:4000",
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "Bill"
        }
    ],
    definitions: {
        products:[
            {
                id: 1,
                quantity: 12,
                cost: 12.5
            },
            {
                id: 2,
                quantity: 13,
                cost: 5.5
            }
        ]
    }
}

const outputFile = './swagger.json'
const endpointsFiles = ['./routes/*.js']

swaggerAutogen(outputFile, endpointsFiles, doc);