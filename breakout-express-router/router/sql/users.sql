DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50),
  password VARCHAR(50)
);

INSERT INTO users 
  (username, password)
VALUES
  ('jstamos', '1234'),
  ('alice', 'abcd'),
  ('bob', '5678'),
  ('carol', 'efgh'),
  ('dean', '4321');
