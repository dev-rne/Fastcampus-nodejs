const { Router } = require('express')
const router = Router();
const ctrl = require('./contacts.ctrl')

router.get('/', (req,res) => {
    res.send('contact 이후 url')
})

router.get('/products', ctrl.get_products)

module.exports = router