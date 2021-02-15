const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 6543;

// middleware
// app.use((req, res, next) => {
//   console.log(`incoming request to ${req.method} ${req.url}`);
//   // res.send('done with middleware');
//   // if (!authorized) {
//   //   res.redirect('/login');
//   // }
//   next();
// });
app.use(morgan('dev')); // (req, res, next) => {}

// const morganMiddleware = morgan('dev');
// app.use(morganMiddleware);

// GET /
app.get('/', (req, res) => {
  // res.send('hello from the express server'); // returns a string
  // res.json({ username: 'Alice', password: '1234' }); // returns json
  res.sendFile(`${__dirname}/index.html`); // return the file we choose
  // res.render('template'); // server-side rendering
});

// GET /products
app.get('/products', (req, res) => {
  res.send('these are all the products (Express)');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
