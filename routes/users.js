/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

router.post('/login', (req, res) => {
  res.redirect('/users/user');
});

router.get('/user', (req, res) => {
  res.render('user'); // this would render your 'users.ejs' file
});


module.exports = router;
