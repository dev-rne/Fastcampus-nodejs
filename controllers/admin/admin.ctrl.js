const models = require('../../models')

exports.get_products = ( _, res) => {
    res.render('admin/product.html', {
        message: '<h1>태그가 출력됩니다.</h1>'
    })
}

exports.get_products_write = ( _, res) => {
    res.render('admin/write.html')
}

exports.post_products_write = (req,res) => {
    // res.send(req.body)
    models.Products.create({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    }).then(() => {
        res.redirect('/admin/products')
    })
}