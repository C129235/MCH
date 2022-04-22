const express = require('express')
const logisticController  = require('../controllers/logistic.controller.js')

const router = express.Router()

router.post('/api/logistic', logisticController.sendOrderHandler)


module.exports = router