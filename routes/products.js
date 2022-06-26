var express = require('express');
var router = express.Router();
var { products, categories } = require('../store/data')




/* GET products listing. */
router.get('/', function(req, res, next) {
    res.render('products/index', { title: 'products', products: products });
});

/* GET products listing. */
router.get('/delete/:id', function(req, res, next) {
    const id = +req.params.id;
    const product = products.find(item => item.id === id);
    if (!product) return res.send('Product not found!');
    const idx = products.findIndex(item => item.id === id);
    delete products[idx]
    res.redirect(`/products`)
});

/* GET create product listing. */
router.get('/create', function(req, res, next) {
    res.render('products/create', { title: 'Create product', categories });
});

/* POST create product listing. */
router.post('/create', function(req, res, next) {
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
    res.redirect(`/products/${id}`);
});

/* GET create product listing. */
router.get('/edit/:id', function(req, res, next) {
    const id = req.params.id;
    const product = products.find(item => item.id === +id)
    res.render('products/edit', {
        title: 'Edit product',
        name: product.name,
        id: product.id,
        price: product.price,
        categoryId: product.categoryId,
        categories
    });
});

/* GET create product listing. */
router.post('/update', function(req, res, next) {
    const id = +req.body.id;
    const name = req.body.name;
    const price = +req.body.price;
    const categoryId = +req.body.categoryId;
    const product = products.find(item => item.id === +id)
    product.name = name;
    product.price = price;
    product.categoryId = categoryId;
    res.redirect(`/products/${id}`)
});


/* GET product by id listing. */
router.get('/:id', function(req, res, next) {
    const productId = req.params.id;
    const product = products.find(item => item.id === +productId);
    const category = categories.find(item => item.id === product.categoryId)
    res.render('products/id', {
        name: product.name,
        price: product.price,
        categoryId: product.categoryId,
        categoryName: category.name,
        id: product.id
    });
});


module.exports = router;
