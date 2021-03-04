# BREAKOUT - Express Router

### The Router
* Express has a built-in router that allows us to store routes in separate files
* We add each route to the router object and pass this object to express as middleware

```js
const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
  // do something
});

router.post('/', (req, res) => {
  // do something
});
```

### Returning the Router
* We can simply return the router object from our router file

```js
// in my-router.js
router.get...

router.post...

module.exports = router;
```

* We require the exported object into our server file
* We pass the router to `app.use` along with an argument specifying the prefix for the routes
* If Express receives a request with this prefix, it will pass the request to the router

```js
// in server.js
const myRouter = require('./routes/my-router.js');
app.use('/my-routes', myRouter);
```

### Returning a Function
* We can also return a function that returns our router object
* This allows us to take in a parameter or dependency

```js
// in my-router.js
// export a function that takes in the database connection
module.exports = (db) => {
  router.get...

  router.post...

  return router;
};
```

* We then have to invoke the function in our server and remember to pass in any dependencies
* This works because the function returns the router object

```js
// in server.js
const dbConnection = require('./db/connection.js');

const myRouterFn = require('./routes/my-router.js');
app.use('/my-routes', myRouterFn(dbConnection));
```

### Useful Links
* [Express Router docs](https://expressjs.com/en/4x/api.html#router)
