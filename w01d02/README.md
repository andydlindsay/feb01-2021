# W01D02 - The Dev Workflow

### To Do
- [x] Curriculum overview
- [x] Example problem workflow
- [x] Problem solving tips
- [x] Review git workflow

### Curriculum Outline
- Week 1 && 2: Fundamentals (FOCAL)
- Week 3: Web Servers
- Week 4: JavaScript in the Browser
- Week 5: Persistent Data
- Week 6: Mid-terms
- Week 7 && 8: Front-end Framework (React)
- Week 9 && 10: Legacy Codebase (Rails)
- Week 11 && 12: Final Project

### Problem Solving

> Without requirements or design, programming is the art of adding bugs to an empty text file.
>
> -- <cite>Louis Srygley</cite>

* We have a variety of different approaches available to us as problem solvers
* You will be exposed to these approaches over the course of the bootcamp

### Tips

* Work incrementally, writing and then executing small amounts of code
  * Break the problem down into a series of smaller (and easier to understand) steps
  * Small segments of code allow us to more easily see where errors/bugs are in our code
* Use proper indentation
  * Indentation helps us to see how our code is nested (eg. which lines of code are inside the function or if statement)

  ```js
  // no indentation
  const printArray = function (arr) {
  arr.forEach(function(element) {
  console.log(element);
  });
  };
  console.log('All done!');

  // proper indentation
  const printArray = function (arr) {
    arr.forEach(function(element) {
      console.log(element);
    });
  };
  console.log('All done!');
  ```

* Try to avoid copy/pasting code; type it out for yourself and try to understand what you are typing
* Errors are your friend
  * Try to decipher the error message before you Google it
  * Errors help to show us where we made a mistake and being able to read them is a valuable skill

### Logic Syntax Data (LSD)

- Logic: have I told the computer exactly what to do?
- Syntax: am I missing a curly brace?
- Data: do I have the data I think I do in the format I expect?

### Asking For Help

* Remember the 15 minute rule
* Typical research path: 
  * **Google** the error message/what you want to accomplish; make sure to add the programming language (eg. JavaScript) to your search term (eg. "remove elements from array javascript")
  * **StackOverflow** is useful for seeing multiple possible solutions to a problem (DO NOT copy and paste)
  * **Mozilla Developer Network (MDN)**... read the documentation

### Git Workflow

* To create a git repository in a directory, run `git init`
* `git status` will show you which files have been changed in the working directory
* Use `git diff` to see what specifically was changed inside each file
* To add files to the staging area, use `git add <filename>` or `git add .` to add all changes
* Commit your changes using `git commit -m 'a meaningful commit message'`
* Finally, push your code to github using `git push origin master` or `git push origin main`

**NOTE:** This workflow is great for solo coding projects. When you work as part of a team (such as during mid-terms and finals), you will use a more advanced workflow.

### For Loop with Arrays Comparison
```js
const myArr = ['10', '5', '20'];

// forEach built-in array method
myArr.forEach(function(element) {
  console.log('current element:', element);
});

// "c-style" for loop
for (let i = 0; i < myArr.length; i++) {
  console.log('current element:', myArr[i]);
}

// for..of loop gives you the value each time
for (const element of myArr) {
  console.log('current element:', element);
}

// for..in loop gives you the index each time
for (const index in myArr) {
  console.log('current element:', myArr[index]);
}
```

### Useful Links
- [Mozilla Developer Network](https://developer.mozilla.org/en-US/)
- [Node Documentation](https://nodejs.org/en/docs/)
- [Python Tutor](http://pythontutor.com/javascript.html#mode=edit)
