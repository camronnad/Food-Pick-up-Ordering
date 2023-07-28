/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/users');

router.get('/', (req, res) => {
  userQueries.getUsers()
    .then(users => {
      res.json({ users });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});


router.get('/home', (req, res) => {
  userQueries.getMenu()
    .then(menuItems => {
      res.json({ menuItems });

    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.get('/order', (req, res) => {
  userQueries.getOrders()
    .then(orderItems => {
      res.json({ orderItems });

    })
    .catch(err => {
      console.log(err);
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.post('/order',(req, res) => {
  // click on ordernow button
  //send sms to restaurant
  //
})

router.post('/login', (req, res) => {
  res.render('home', );
});




module.exports = router;
