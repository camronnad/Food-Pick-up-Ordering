const db = require('../connection');

// Fetch all orders from the 'orders' table.
const getOrders = () => {
  return db.query('SELECT * FROM orders;')
    .then(data => {
      return data.rows;
    });
};

// Add a new order. This will require a user id and will insert the current timestamp into 'created_time'.
const addOrder = () => {
  return db.query('INSERT INTO orders(user_id, created_time) VALUES(1, NOW()) RETURNING *;') //userId hardcoded as 1
    .then(data => {
      return data.rows[0];
    });
};

const getMenuItems = () => {
  return db.query('SELECT * FROM menu;')
    .then(data => {
      return data.rows;
    });
};

// Add an item to an existing order. This will need an order id, a menu item id, and a quantity.
const addItemToOrder = (orderId, menuItemId, quantity) => {
  return db.query('INSERT INTO order_items(order_id, menu_item_id, quantity) VALUES($1, $2, $3) RETURNING *;',
                  [orderId, menuItemId, quantity])
    .then(data => {
      return data.rows[0];
    });
};

// Update an item in an existing order. This will need the order item id, the menu item id, and the new quantity.
const updateItemInOrder = (orderId, orderItemId, menuItemId, quantity) => {
  return db.query('UPDATE order_items SET menu_item_id = $1, quantity = $2 WHERE id = $3 AND order_id = $4 RETURNING *;',
                  [menuItemId, quantity, orderItemId, orderId])
    .then(data => {
      return data.rows[0];
    });
};




module.exports = { getOrders, addOrder, getMenuItems, addItemToOrder, updateItemInOrder };
