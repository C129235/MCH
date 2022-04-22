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
    */
    
    //Bill the sum whth Bill Service
    //Call Logistic service
    res.status(200).json(req.body)
 
  }

module.exports = {newCheckoutHandler}