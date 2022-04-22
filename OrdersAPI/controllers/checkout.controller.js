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
      var billendpoint = constants.billApiHost+":"+constants.billApiPort+"/api/bill";
      axios.post(billendpoint, req.body.products)
      .then(function (response) {
         var bill = response.data; 
         req.body.totalBill=bill;
         //Call Logistic service
         var logisticendpoint = constants.logisticApiHost+":"+constants.logisticApiPort+"/api/logistic";
         axios.post(logisticendpoint, req.body.products)
         .then(function (response) {
            res.status(200).json("Checkout completed, billed "+bill+"€ and order sent");
         })
         .catch(function (error) {
           console.log(error);
           res.status(500).json(error)
         });
      })
      .catch(function (error) {
        console.log(error);
        res.status(500).json(error)
      });
    }    
  }

module.exports = {newCheckoutHandler}