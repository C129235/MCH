async function sendOrderHandler(req, res) {
     /* 
        #swagger.tags = ['Logistic']
        #swagger.description = 'Endpoint to send orders by logistic service' 
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Order.',
            required: true,
            schema: { $ref: "#/definitions/order" }
        } 
        #swagger.responses[200] = {
            description: "Order sent"
        } 
        #swagger.responses[400] = {
            description: "Missing body"
        } 
    */

    //Validations
    if(!Object.keys(req.body).length) {
      res.status(400).json("Body required")
    } else {
      res.status(200).json("Order sent")
    }    
  }

module.exports = {sendOrderHandler}