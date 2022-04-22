const express = require('express')
const logisticRoutes = require('./routes/logistic.routes')
const router = express.Router()


router.use(logisticRoutes)

module.exports = router