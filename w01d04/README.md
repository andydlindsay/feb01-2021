# W01D04 - Callbacks!

### To Do
- [x] Functions as values
- [x] Function calling vs function passing
- [x] Callbacks and higher order functions
- [x] Anonymous functions
- [x] Arrow functions
- [x] Make our own higher order function

```js
const sayHello = () => {
  return `hello there`;
};

const myOtherVar = sayHello(); // hello there
const myOtherVar = sayHello;

const higherOrderFn = (fn) => {
  // do something
};

higherOrderFn(sayHello);
higherOrderFn(sayHello());

assertEqual(head([1, 2, 3]), 1);
```

### Callback
* A function that gets passed to another function to be invoked by that function

* anonymous function is a function that doesn't have a name


ECMAScript
European Computer Manufacturers Association












# 
