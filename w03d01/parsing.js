const obj = {
  username: 'Alice',
  password: '1234'
};

const stringified = JSON.stringify(obj);
// console.log(stringified);
// console.log(obj);
// console.log();

const parsedObj = JSON.parse(stringified);
// console.log(parsedObj);


const input = 'email=alice%40gmail.com&password=1234';

console.log(input.split('&').forEach(elem => console.log(elem.split('='))));

req.body = {
  email: 'alice@gmail.com',
  password: '1234'
}

req.body.email;
