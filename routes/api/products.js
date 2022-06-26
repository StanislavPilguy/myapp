var express = require('express');
var router = express.Router();
var { products, categories } = require('../../store/data')




/* GET products listing. */
router.get('/', function(req, res, next) {
    res.json(products)
});

/* GET products listing. */
router.delete('/:id', function(req, res, next) {
    const id = +req.params.id;
    const product = products.find(item => item.id === id);
    if (!product) return res.send('Product not found!');
    const idx = products.findIndex(item => item.id === id);
    delete products[idx]
    res.json(id)
});

/* POST create product listing. */
router.post('/', function(req, res, next) {
    const id = products.length + 1;
    const name = req.body.name;
    const price = +req.body.price;
    const categoryId = +req.body.categoryId;
    const product = {
        id,
        name,
        price,
        categoryId,
    }
    products.push(product)
    res.json(product)
});

/* GET create product listing. */
router.patch('/:id', function(req, res, next) {
    const id = +req.params.id;
    const name = req.body.name;
    const price = +req.body.price;
    const categoryId = +req.body.categoryId;
    const product = products.find(item => item.id === +id)
    product.name = name;
    product.price = price;
    product.categoryId = categoryId;
    res.json(product)
});


/* GET product by id listing. */
router.get('/:id', function(req, res, next) {
    const productId = req.params.id;
    const product = products.find(item => item.id === +productId);
    res.json(product)
});


module.exports = router;
