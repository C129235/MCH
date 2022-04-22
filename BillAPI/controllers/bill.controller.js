async function billSumProductsHandler(req, res) {
     /* 
        #swagger.tags = ['Bill']
        #swagger.description = 'Endpoint to sum productos' 
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'List of products.',
            required: true,
            schema: { $ref: "#/definitions/products" }
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
      var bill = 0;
      req.body.forEach(element => bill=+ element.quantity*element.cost);
      res.status(200).json(bill)
    }    
  }

module.exports = {billSumProductsHandler}