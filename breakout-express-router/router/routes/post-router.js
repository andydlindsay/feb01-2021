const express = require('express');
const router = express.Router();

const routerFn = (db) => {

  // GET /posts/
  router.get('/', (req, res) => {
    db.query('SELECT * FROM posts;')
      .then((response) => {
        const posts = response.rows;
        res.json(posts);
      });
  });

  // GET /posts/:id
  router.get('/:id', (req, res) => {
    db.query('SELECT * FROM posts WHERE id = $1;', [req.params.id])
      .then((response) => {
        const post = response.rows[0];
        res.json(post);
      });
  });

  return router;
};

module.exports = routerFn;

// module.exports = () => {};
