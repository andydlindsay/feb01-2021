const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bcrypt = require('bcryptjs');
const methodOverride = require('method-override');

const app = express();
const port = process.env.PORT || 9876;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(express.static('public'));
// app.use(cookieParser());
app.use(cookieSession({
  name: 'feb01',
  keys: ['anything', 'you want']
}));

app.use(methodOverride('_method'));

// app.use((req, res, next) => {
//   req.method // 'GET'  'POST'
//   if (req.query._method) {
//     req.method = req.query._method;
//   }
// })

app.set('view engine', 'ejs');

// user database
const users = {
  jstamos: {
    username: 'jstamos',
    password: '$2a$10$irK6PXV0EWslIxhBPDckGeGQI7hFDZXM6pTXHr26emwHymDcG0LfS'
  },
  alice: {
    username: 'alice',
    password: '$2a$10$irK6PXV0EWslIxhBPDckGeGQI7hFDZXM6pTXHr26emwHymDcG0LfS'
  }
};

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.get('/protected', (req, res) => {
  // const username = req.cookies.username;
  const username = req.session.username;
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

app.patch('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = users[username];
  if (!user) {
    return res.status(401).send('No user with that username found');
  }

  // compare passwords
  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      // res.cookie('username', user.username);
      req.session.username = user.username;
      return res.redirect('/protected');
    } else {
      return res.status(401).send('Password incorrect');
    }
  });
  
});

app.post('/register', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {

      users[username] = {
        username,
        password: hash
      };

      console.log(users);

      res.redirect('/login');

    });
  });
});

app.post('/logout', (req, res) => {
  res.clearCookie('username');
  res.redirect('/login');
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
