var express = require('express');
var router = express.Router();
var { categories, products } = require('../store/data')


/* GET categories listing. */
router.get('/', function(req, res, next) {
    res.render('categories/index', { title: 'categories', categories });
});

/* GET categories listing. */
router.get('/delete/:id', function(req, res, next) {
    const id = +req.params.id;
    const category = categories.find(item => item.id === id);
    if (!category) return res.send('Category not found!');
    const idx = categories.findIndex(item => item.id === id);
    delete categories[idx]
    products.forEach((product, index) => {
        if (product.categoryId === id) {
            delete products[index]
        }
    })
    res.redirect(`/categories`)
});

/* GET add category listing. */
router.get('/create', function(req, res, next) {
    res.render('categories/create', { title: 'Create category',  });
});

/* GET edit category by id listing. */
router.get('/edit/:id', function(req, res, next) {
    const categoryId = req.params.id;
    const category = categories.find(item => item.id === +categoryId);
    res.render('categories/edit', { title: 'Edit category', name: category.name, id: category.id });
});

/* POST edit category by id listing. */
router.post('/update', function(req, res, next) {
    const id = req.body.id;
    const name = req.body.name;
    const category = categories.find(item => item.id === +id )
    category.name = name; // req.
    res.redirect(`/categories/${id}`)
});

/* POST create category listing. */
router.post('/create', function(req, res, next) {
    const id = categories.length + 1;
    const name = req.body.name;
    const category = {
        id,
        name,
    }
    categories.push(category)
    res.redirect(`/categories`)
});


/* GET category by id listing. */
router.get('/:id', function(req, res, next) {
    const categoryId = req.params.id;
    const category = categories.find(item => item.id === +categoryId);
    const productsByCategoryId = products.filter(product => product.categoryId === +categoryId)
    res.render('categories/id', { name: category.name, products: productsByCategoryId, id: category.id });
});





module.exports = router;
