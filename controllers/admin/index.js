const { Router } = require('express')
const router = Router();
const ctrl = require('./admin.ctrl')

function testMiddleware(req, res, next){
    console.log('first midddleware');
    next()
}
function testMiddleware2(req, res, next){
    console.log('second midddleware');
    next()
}

router.get('/', testMiddleware, testMiddleware2, (req, res) => {
    res.send('admin app')
})

router.get('/products', ctrl.get_products);

router.get('/products/write', ctrl.get_products_write);

router.post('/products/write', ctrl.post_products_write);

module.exports = router;