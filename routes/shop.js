const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();


// router.get('/limited', shopController.limitProducts);

// router.get('/', shopController.getIndex);

router.get('/products', shopController.getAllProducts);

// router.get('/products/:productId', shopController.getProduct);

// router.get('/cart', shopController.getCart);

//  router.post('/cart', shopController.postCart);

// router.delete('/cart-delete-item/:id', shopController.postCartDeleteProduct);

// router.get('/orders', shopController.getOrders);

// router.get('/checkout', shopController.getCheckout);

// router.post('/CreateOrder',shopController.postOrder)

module.exports = router;
