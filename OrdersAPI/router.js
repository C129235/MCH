const express = require('express')
const checkoutRoutes = require('./routes/checkout.routes')
const router = express.Router()


router.use(checkoutRoutes)

module.exports = router