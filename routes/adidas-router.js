const router = require('express').Router()
const {
    getAdidas
} = require('../controllers/adidas-ctrl')

router.get('/',getAdidas)

module.exports = router