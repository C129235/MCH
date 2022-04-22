const express = require('express')
const billController  = require('../controllers/bill.controller.js')

const router = express.Router()

router.post('/api/bill', billController.billSumProductsHandler)


module.exports = router