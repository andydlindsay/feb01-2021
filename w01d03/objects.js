// key/value storage
const studentOnefirstName = 'Alice';
const studentOneCohort = 'FEB01 2021';
const studentOneGrades = [87, 22, 35];

// const studentOneArray = [
//   'Alice', 
//   'FEB01 2021',
//   'MAY01 2021', 
//   [87, 22, 35]
// ];

const studentOne = {
  firstName: 'Alice',
  'cohort': 'FEB01 2021',
  'grades': [87, 22, 35],
  outfit: {
    shirt: 'yellow',
    pants: 'brown'
  }
};

const students = [studentOne, studentTwo];

const students = {
  studentOne: studentOne,
  studentTwo: studentTwo
};

studentOne.outfit.shirt // 'yellow'
studentOne.outfit.hat // undefined
studentOne.outfit.pants = 'green';


// object.key
// object['key']

// random access => any index/key inside without looping

console.log(studentOne);
console.log('name', studentOne.firstName);

const a = 7
const b = 5
console.log(a + b);

const gradesKey = 'firstName';
console.log('gradesKey:', gradesKey);

// lotr['you shall not pass'] // Gandalf!!!!!

studentOne[gradesKey] // [87, 22, 35] 
// studentTwo[gradesKey] // [other array]

studentOne[gradesKey][1]; // 22
studentOne.grades[1]; // 22
studentOne.gradesKey // undefined

// object.key = value
console.log();
studentOne.firstName = 'Bob';
studentOne.gradesKey = 'create a new value';
studentOne.grades.push(100); // []
console.log(studentOne);

console.log('grades', studentOne[gradesKey]);

// use dot notation when you know the name of property/key
// if the key is dynamic, use square bracket notation

// studentOneArray[3]; // grades

const firstName = 'Bob';
