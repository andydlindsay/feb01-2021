const takesInObj = function(myObj) {
  console.log(`the breed is ${myObj.breed}`);
};

const whateverObj = {
  breed: 'labradoodle'
};

// takesInObj(whateverObj);

const takesInFunc = function(myFunc) {
  myFunc('Bob');
};

const sayHello = function(name) {
  console.log(`hello there ${name}`);
};

const addition = function (num) {
  console.log(2 + num);
};

takesInFunc(sayHello);
takesInFunc(addition);






//
