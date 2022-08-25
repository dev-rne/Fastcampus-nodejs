const express = require('express');
const router = express.Router();

function testMiddleware(req, res, next){
    console.log('first midddleware');
    next()
}
function testMiddleware2(req, res, next){
    console.log('second midddleware');
    next()
}

router.get('/', testMiddleware, testMiddleware2, (req, res) => {
    res.send('admin 이후 url')
})

router.get('/products', (req, res) => {
    res.render('admin/product.html', {
        message: '<h1>태그가 출력됩니다.</h1>',
        online:"express"
    })
})

router.get('/products/write', (req, res) => {
    res.render('admin/write.html')
})
router.post('/products/write',(req,res) => {
    res.send(req.body)
})


module.exports = router;