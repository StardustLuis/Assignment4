// Dependencies 
var express = require('express'); 
var router = express.Router();
// Models 
var Product = require('../models/product');
// Routes 
router.route('/LK').post(function (req, res) {
    var p = new Product();
    p.id = req.body.id;
    p.name = req.body.name;
    p.attribute = req.body.attribute;
    p.power = req.body.power;
    p.save(function (err) {
        if (err) {
            res.send(err);
        }
        res.send({ message: 'Product Created !' })
    })
});

router.route('/products').get(function (req, res) {
    Product.find(function (err, products) {
        if (err) {
            res.send(err);
        }
        res.send(products);
    });
});
// Return router 
module.exports = router;