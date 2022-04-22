const express = require('express')
const checoutController  = require('../controllers/checkout.controller.js')

const router = express.Router()

router.post('/api/checkout', checoutController.newCheckoutHandler)


module.exports = router