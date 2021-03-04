DROP TABLE IF EXISTS products;

CREATE TABLE products (
	id INT,
	product_name VARCHAR(50),
	price DECIMAL(5,2)
);

INSERT INTO products
  (id, product_name, price)
VALUES
  (1, 'Capers - Pickled', 78.07),
  (2, 'Pastry - Baked Scones - Mini', 8.24),
  (3, 'Syrup - Monin - Passion Fruit', 66.27),
  (4, 'Scallops - 20/30', 67.25),
  (5, 'Wine - Duboeuf Beaujolais', 8.64);
