const express = require('express')
const billRoutes = require('./routes/bill.routes')
const router = express.Router()


router.use(billRoutes)

module.exports = router