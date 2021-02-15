const http = require('http');

const server = http.createServer((request, response) => {
  // console.log(request);
  // request.method // 'GET'
  // request.url // '/products'

  const requestString = `${request.method} ${request.url}`; // 'GET /products'

  switch (requestString) {
    case 'GET /':
      response.write('you are visiting the home page');
      response.end();
      break;
    case 'GET /products':
      response.write('these are all the products');
      response.end();
      break;
    default:
      response.write('404 page not found');
      response.end();
  }


  // response.write('hello from the simple server');
  // response.end();
});

server.listen(1667);
