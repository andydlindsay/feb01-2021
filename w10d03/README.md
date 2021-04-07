# Intro to TypeScript

### To Do
* [x] What is TypeScript?
* [x] TypeScript CLI
* [x] Primitive Types
* [x] Arrays
* [x] Objects
* [x] Functions and Methods
* [x] Duck Typing
* [x] Generics

### What is TypeScript?
* A [superset](https://encyclopedia2.thefreedictionary.com/superset) of JavaScript
* TypeScript adds types to JavaScript
* TypeScript is [transpiled](https://scotch.io/tutorials/javascript-transpilers-what-they-are-why-we-need-them) into JavaScript as part of a build step
* **All** JavaScript is valid TypeScript
* Catches errors before they are discovered at [runtime](https://searchsoftwarequality.techtarget.com/definition/runtime) (Yay! No more `cannot read property 'x' of undefined` errors!)

### TypeScript CLI
* Installing the [TypeScript CLI](https://www.npmjs.com/package/typescript) globally is a quick way to get started
* After installation, we have access to the TypeScript compiler (or `tsc`) in the command line

```sh
# uses default settings; .js file will have the same name as .ts file
tsc index.ts # produces index.js file

# compile to named destination file
tsc index.ts --outFile my-index.js # produces my-index.js

# add the watch flag to avoid having to manually trigger the compiler
tsc index.ts --watch # watches for changes to index.ts

# the target flag allows us to specify the version of JS we are compiling to
tsc index.ts --target es6 # compiles to es6 syntax JS

tsc --init # will create a tsconfig.json file in the current directory
# after initializing, running `tsc` will use the configuration specified in the file
tsc
```

* The compiler can be customized and supports [many command line options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
* The compiler will scan our code and throw errors if any violations are found

### Primitive Types
* Types can be specified using colon (`:`) syntax immediately after the variable name

```ts
const str: string = 'hello world';
const isLoggedIn: boolean = false;
const num: number = 3.14;
```

* If we try to assign a different type to a variable, the compiler will throw an error

```ts
let numTwo: number = 4;
numTwo = 'hello';
```

```sh
error TS2322: Type '"hello"' is not assignable to type 'number'.
```

* We can specify multiple types using the pipe (`|`) operator

```ts
// numTwo can be either a string or a number
let numTwo: number | string = 4;
numTwo = 'hello'; // no error

numTwo = true; // error!
```

```sh
error TS2322: Type 'false' is not assignable to type 'string | number'.
```

### Arrays
* Arrays are just collections of a type

```ts
// let TS know that myArr will hold numbers only
const myArr: number[] = [1, 2, 3];
myArr.push(4);
myArr.push(false); // error!
```

```sh
error TS2345: Argument of type 'false' is not assignable to parameter of type 'number'.
```

### Objects
* Objects are more complex
* We create an `interface` to type an object

```ts
// the interface specifies which keys an object will have and what type the values will be
interface Author {
  name: string;
  penName: string;
  // optional params are marked with a question mark (?)
  isActive?: boolean;
  // function types need the type of the arguments and the return type
  writeBook: (title: string) => boolean;
}

const agatha: Author = {}; // error!
```

```sh
error TS2739: Type '{}' is missing the following properties from type 'Author': name, penName, writeBook
```

* **Note:** The optional param `isActive` did not appear in the list of missing properties
* **Hack:** To force TypeScript to accept a type, use the `as` keyword

```ts
const agatha: Author = {}; // error!
const stephen: Author = {} as Author; // no error
```

* Use `as` with caution as it completely removes the type safety

### Functions
* For functions, we specify the type of the arguments **and** the return type

```ts
// sayHello accepts a string as an argument and returns a string
const sayHello = (name: string): string => {
  return `Hello ${name}`;
};

// also works with the function keyword
const sayHelloFn = function(name: string): string {
  return `Hello ${name}`;
};
```

```sh
# error for not returning anything
error TS2355: A function whose declared type is neither 'void' nor 'any' must return a value.

# error for returning an incorrect type
error TS2322: Type 'true' is not assignable to type 'string'.
```

* If the function doesn't return anything, the return type is `void`

```ts
const noReturn = function(name: string): void {
  console.log(name);
};
```

* Functions that return a `Promise` (eg. `async` functions), wrap the return value in the `Promise` type

```ts
const returnsPromise = (name: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(name), 1000);
  });
};
```

### Duck Typing
> "If it looks like a duck, walks like a duck, and quacks like a duck, then it's probably a duck." - idiom
* If TypeScript can infer the type for us, then we don't need to specify it

```ts
// no need to specify string type
const name = 'Alice';
```

```ts
// works with interfaces as well
interface User {
  username: string;
  password: string;
};

// logInUser accepts a User type
const logInUser = (user: User): boolean => {
  return user.username === 'johnstamos';
};

// no type specified for potentialUser
const potentialUser = {
  username: 'johnstamos',
  password: 'pass123',
};

// no problem passing potentialUser to logInUser
const loggedIn = logInUser(potentialUser);
```

```ts
// however, if the object is missing something...
const potentialUser = {
  username: 'johnstamos'
};

const loggedIn = logInUser(potentialUser); // error
```

```sh
error TS2345: Argument of type '{ username: string; }' is not assignable to parameter of type 'User'.
  Property 'password' is missing in type '{ username: string; }' but required in type 'User'.
```

### Generics
* Generics allow us to pass a variable to a type
* We specify the variable in between greater than (`<`) and less than (`>`) signs

```ts
interface Container<Type> {
  title: string;
  contents: Type
}

const numContainer: Container<number> = {
  title: 'number container',
  contents: 7
};

const stringContainer: Container<string> = {
  title: 'string container',
  contents: 'hello'
};
```

* It is common to shorten `Type` to simply `T`

```ts
interface Container<T> {
  contents: T
}
```

### Useful Links
* [TypeScript Official Site](https://www.typescriptlang.org/)
* [TypeScript Compiler Options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
* [Sort of like a duck, but not a duck](https://birdersjourney.com/2015/03/01/nope-not-a-duck/)
* [TypeScript in 5 Minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
