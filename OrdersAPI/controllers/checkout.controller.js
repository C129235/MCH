const { application } = require("express");
const constants = require('./../constants');
const axios = require('axios');

async function newCheckoutHandler(req, res) {
     /* 
        #swagger.tags = ['Checkout']
        #swagger.description = 'Endpoint start a ckeckout process' 
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Checkout information.',
            required: true,
            schema: { $ref: "#/definitions/Order" }
        } 
        #swagger.responses[200] = {
            description: "Everything ok"
        } 
        #swagger.responses[400] = {
            description: "Missing body"
        } 
    */

    //Validations
    if(!Object.keys(req.body).length) {
      res.status(400).json("Body required")
    } else {
      //Bill the sum whth Bill Service
      var endpoint = constants.billApiHost+":"+constants.billApiPort+"/api/bill";
      axios.post(endpoint, req.body.products)
      .then(function (response) {
         var bill = response.data; 
         //Call Logistic service
         res.status(200).json("Chekout completed, billed "+bill+"€");
      })
      .catch(function (error) {
        console.log(error);
        res.status(500).json(error)
      });


    }    
  }

module.exports = {newCheckoutHandler}