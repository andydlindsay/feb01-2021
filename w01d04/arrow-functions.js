// part of ES6

// function myFunc () {}

// const myFunc = function () {};

const arrow = () => {};
// there are issues with `this` in arrow functions

const myObj = {
  name: 'amazing',
  sayMyName: function() {
    console.log(this.name)
  },
  sayMyNameArrow: () => {
    console.log(myObj.name);
  },
  subObj: {
    someKey: 'hello',
    subObjArrow: () => {
      console.log(myObj.name);
    }
  }
};

myObj.sayMyName();
myObj.sayMyNameArrow();

myObj.subObj.subObjArrow();


///
