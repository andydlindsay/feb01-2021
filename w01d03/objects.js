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
  'grades': [87, 22, 35]
};

// object.key
// object['key']

// random access => any index/key inside without looping

console.log(studentOne);
console.log('name', studentOne.firstName);

const a = 7
const b = 5
console.log(7 + b);

const gradesKey = 'grades';

studentOne[gradesKey] // [87, 22, 35] 
studentOne[gradesKey][1]; // 22
studentOne.grades[1]; // 22
studentOne.gradesKey // undefined


console.log('grades', studentOne[gradesKey]);

// use dot notation when you know the name of property/key
// if the key is dynamic, use square bracket notation


// studentOneArray[3]; // grades

const firstName = 'Bob';
