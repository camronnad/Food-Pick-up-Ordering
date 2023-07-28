

INSERT INTO users (name, email, password, address)
VALUES ('Jack', 'jack@gmail.com', 'pass', '509, 3400, Francis Road, Langley BC, V8 9TD'),
       ('Amy', 'amy@gmail.com', 'pass', '509, 3400, Francis Road, Langley BC, V8 9TD');

INSERT INTO orders (user_id, created_time, completed_time)
VALUES (1, NOW(), NOW() + INTERVAL '30 minutes'),
       (2, NOW(), NOW() + INTERVAL '30 minutes'),
       (3, NOW(), NOW() + INTERVAL '30 minutes');

INSERT INTO menu (name, price)
VALUES
  ('Cheese Burger', 9.99),
  ('Chicken Burger', 8.49),
  ('Mushroom Burger', 7.99),
  ('Fries', 3.99),
  ('Soda', 1.99),
  ('Pepsi', 1.49),
  ('Lemonade', 1.99);


INSERT INTO order_items (order_id, menu_item_id, quantity)
VALUES
  (1, 1, 2),
  (1, 4, 3),
  (1, 5, 2);
