// method === function inside an object
// inside of method, `this` refers to the object itself

const hasWorms = function() {
  console.log('this', this);
  if (this.worms) {
    console.log('this dog has wormz!!');
  } else {
    console.log('nope!');
  }
};

hasWorms();
console.log();

const dog = {
  breed: 'samoyed labradoodle x',
  worms: true,
  log: console.log,
  sayBreed: function() {
    const myVar = 'hello';
    console.log(`the dog's breed is: ${this.breed}`);
  },
  deworm: function() {
    this.worms = false;
  }
};

const myVar = 'hello';
console.log(myVar);
console.log('hello');

dog.hasWorms = hasWorms(); // undefined
dog.hasWorms = hasWorms;
// dog.hasWorms = function() {
//   console.log('this', this);
//   if (this.worms) {
//     console.log('this dog has wormz!!');
//   } else {
//     console.log('nope!');
//   }
// };;
// console.log(dog);

// dog.sayBreed();
dog.hasWorms();
// dog.deworm();
// dog.hasWorms();
