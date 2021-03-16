# W07D02 - Immutable Update Patterns

### To Do
- [x] Recap: Components, Props, and State
- [x] Immutable Update Patterns with Arrays and Objects
- [x] Updating Complex State

### Recap: Components, Props, and State
- Components:
  - The building blocks of a React application
  - Encapsulate application behaviour/logic in its own isolated container
  - By encapsulating behaviour, underlying complexity is abstracted away into a simple interface
  - Allows reuse of components in different parts of the application
  - A large application is built up from many of these small pieces
- Props:
  - Data that is passed into a component from outside itself
  - Received as an argument to the component function
- State:
  - Data that is local to the component
  - Can be passed down to child components as props
  - For state to persist in a functional component, we need to use the `useState` hook

### Immutable Update Patterns
- Immutability is an important concept in functional programming
- From [Wikipedia](https://en.wikipedia.org/wiki/Persistent_data_structure):
> In computing, a persistent data structure is a data structure that always preserves the previous version of itself when it is modified. Such data structures are effectively immutable, as their operations do not (visibly) update the structure in-place, but instead always yield a new updated structure.
- ie. try not to mutate data directly; instead, overwrite it with all new data (clone it and change it)

### Benefits of Immutability
- Immutable data structures are simpler to construct, test, and use
- Immutable data is side-effect free (avoids weird bugs in our app)
- Makes it possible to compare the current data to the previous version to see what has changed ([the delta](https://hsm.stackexchange.com/questions/2254/why-was-delta-delta-chosen-to-represent-change-of-a-quantity))

### Immutable Data Patterns with Arrays and Objects
- Arrays and objects in JavaScript are stored as references which means that we can easily change the original object/array without meaning to

```js
const myObj = { name: 'Alice' };
const otherObj = myObj; // otherObj has the same reference as myObj
otherObj.name = 'Bob';
console.log(myObj); // { name: 'Bob' } oops!!
```

- Array methods that don't return a new array are not "pure" (ie. they mutate the original array)

```js
// mutate the array in place
array.sort();
array.pop();
array.push();
array.splice();

// don't change the original array
const newArr = array.concat();
const newArr = array.map();
const newArr = array.filter();
const newArr = array.slice();
```

- It is a better idea to copy the array/object and then update it

```js
// copy an array with the spread operator
const myArr = [1, 2, 3];
const copy = [ ...myArr ];
copy.push(4); // myArr is not affected

// works the same for objects
const myObj = { name: 'Alice' };
const newObj = { ...myObj };
newObj.name = 'Bob'; // myObj not affected

// it's possible to overwrite keys in a single step
const myObj = { name: 'Alice', age: 27 };
const newObj = { ...myObj, name: 'Bob' };
console.log(newObj); // { name: 'Bob', age: 27 }
```

- The spread operator makes a shallow copy only (the reference to child objects/arrays is copied instead of duplicating the object/array)

```js
const objOne = {
  key: 'value',
  childObj: {
    name: 'Alice',
    likes: ['pizza']
  }
};

// shallow copy
const objTwo = {...objOne};

objTwo.childObj.name = 'Bob';
console.log(objOne.childObj.name); // 'Bob' ooooops!!

objTwo.childObj.likes.push('pineapple');
console.log(objOne.childObj.likes); // ['pizza', 'pineapple'] uh oh
```

- To make sure that we get a true copy, we need to spread each child object and array

```js
const objOne = {
  key: 'value',
  childObj: {
    name: 'Alice',
    likes: ['pizza']
  }
};

// deep copy
const objTwo = { 
  ...objOne,
  childObj: {
    ...objOne.childObj,
    likes: [
      ...objOne.childObj.likes
    ]
  }
};

objTwo.childObj.name = 'Bob';
console.log(objOne.childObj.name); // 'Alice' 😅

objTwo.childObj.likes.push('pineapple');
console.log(objOne.childObj.likes); // ['pizza']
```

### Updating Complex State
- It is common to maintain complex state in a component (eg. object, array, object with arrays/objects inside it)
- Updating complex state can be challenging
- We need to remember to copy the previous state before updating it

```js
const [numbers, setNumbers] = React.useState([1, 2, 3]);

// setNumbers can take either a value or a callback function
// the callback function is passed the previous state as an argument (prevNumbers)
setNumbers((prevNumbers) => {
  const newState = [...prevNumbers, 4];

  // previous state is not affected
  console.log(prevNumbers); // [1, 2, 3]
  console.log(newState); // [1, 2, 3, 4]

  return newState;
});
```

### Useful Links
- [Wikipedia: Persistent Data](https://en.wikipedia.org/wiki/Persistent_data_structure)
- [Why Does "Delta" Represent Change?](https://hsm.stackexchange.com/questions/2254/why-was-delta-delta-chosen-to-represent-change-of-a-quantity)
- [ES6 Spread Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
