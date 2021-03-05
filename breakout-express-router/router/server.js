require('dotenv').config();

const db = require('./db/db');

const express = require('express');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));

const productRouter = require('./routes/product-router.js');
const postRouterFn = require('./routes/post-router.js');

app.use('/products', productRouter);
app.use('/posts', postRouterFn(db));

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
