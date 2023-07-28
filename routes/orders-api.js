const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/users');

// Importing the orderQueries module which contains database queries related to orders.
const orderQueries = require('../db/queries/orders');

// Endpoint to get all orders
router.get('/', (req, res) => {
  orderQueries.getOrders() // This function needs to be defined in your 'orderQueries' module
    .then(orders => {
      res.json({ orders });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

// Endpoint to add a new order
router.post('/newOrder', (req, res) => {
  console.log("req.body:", req.body)
  orderQueries.addOrder()
 // This function needs to be defined in your 'orderQueries' module
    .then(order => {
      res.json({ order });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

// Endpoint to add an item to an existing order
router.post('/:orderID/item', (req, res) => {
  orderQueries.addItemToOrder(req.params.orderID, req.body) // This function needs to be defined in your 'orderQueries' module
    .then(item => {
      res.json({ item });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

// Endpoint to update an entire item in an existing order
router.post('/:orderID/item/:itemID', (req, res) => {
  orderQueries.updateItemInOrder(req.params.orderID, req.params.itemID, req.body) // This function needs to be defined in your 'orderQueries' module
    .then(item => {
      res.json({ item });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
