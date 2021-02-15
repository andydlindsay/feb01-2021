const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT || 9876;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.static('public'));

app.set('view engine', 'ejs');

// user database
const users = {
  jstamos: {
    username: 'jstamos',
    password: '1234'
  },
  alice: {
    username: 'alice',
    password: '5678'
  }
};

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.get('/protected', (req, res) => {
  const username = req.cookies.username;
  if (!username) {
    return res.redirect('/login');
  }

  const user = users[username];
  if (!user) {
    return res.redirect('/register');
  }

  res.render('protected', { user });
});

app.get('*', (req, res) => {
  res.redirect('/login');
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = users[username];
  if (!user) {
    return res.status(401).send('No user with that username found');
  }

  if (password !== user.password) {
    return res.status(401).send('Password incorrect');
  }

  res.cookie('username', user.username);
  res.redirect('/protected');
});

app.post('/register', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  users[username] = {
    username,
    password
  };

  res.redirect('/login');
});

app.post('/logout', (req, res) => {
  res.clearCookie('username');
  res.redirect('/login');
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
