'use strict';
const express = require('express');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const bodyParser = require('body-parser');
const app = express();

//Config
app.set('port', process.env.PORT || 5000);
app.set('json spaces', 2)

//Routes
const router = require('./router')

//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(router);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument))


//Server start
app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
});
