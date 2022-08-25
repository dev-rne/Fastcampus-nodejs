const express = require('express');
const router = express.Router()

router.get('/', (req,res) => {
    res.send('contact 이후 url')
})

router.get('/products', (req,res) => {
    res.send('contact products')
})

module.exports = router