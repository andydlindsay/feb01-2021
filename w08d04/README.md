# W08D04 - Class-based Components

### To Do
- [x] Review ES6 Classes
- [x] Intro to Class-based Components
- [x] Passing Props
- [x] Handling Events and Changes to State
- [x] Lifecycle Methods

### Review ES6 Classes
* Classes are [syntactic sugar](https://en.wikipedia.org/wiki/Syntactic_sugar) for functions that return objects
* You can make reference to the objects own properties and methods using the `this` keyword
* When a new object is created, any arguments used will be passed as parameters to the constructor method

```js
// class declaration
class Rectangle {
  constructor(length, width) {
    this.length = length; // 2
    this.width = width; // 3
  }

  area() {
    return this.length * this.width;
  }
}

const rectangle = new Rectangle(2, 3);
console.log(rectangle.area()); // 6

// class expression
const Cube = class {
  constructor(length, width, height) {
    this.length = length; // 2
    this.width = width; // 3
    this.height = height; // 4
  }

  volume() {
    return this.length * this.width * this.height;
  }
};

const cube = new Cube(2, 3, 4);
console.log(cube.volume()); // 24
```

### Class Components
* An alternative to creating functional components using ES6 classes
* Used for making stateful components prior to the release of hooks

```js
// a simple class component
class HelloWorld extends React.Component {
  render() {
    return <h1>Hello World</h1>;
  }
}
```

* State is established in the constructor

```js
class StateExample extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'hello world'
    };
  }
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
      </div>
    );
  }
}
```

### Passing Props
* Components can access props passed to them using `this.props`
* Props are passed from parent-to-child via attributes

```js
// in parent component
<HelloWorld message="hello there">
  <p>Greetings and good day</p>
</HelloWorld>

// in child
<p>Message: {this.props.message}</p>
<div>{this.props.children}</div>
```

### Handling Events and Changes to State
* Event handlers need to be bound to the component instance using the `bind` method
* Binding the method makes sure that any references to `this` inside the function will point to the component instance

```js
class BindExample extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    // do something using the `this` keyword
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}></button>
      </div>
    );
  }
}
```

* Just like with functional components, we never want to mutate state directly

```js
// this is bad
this.state.count = this.state.count + 1;
```

* Instead, we use the `setState` method to update state
* The value passed to `setState` will be _merged_ into the components state

```js
this.setState({ count: this.state.count + 1 });
```

### Lifecycle Methods
* During a components _lifecycle_, it will go through several different events such as mounting, rendering, unmounting, and updating (not necessarily in that order)
* Note: `render` and `constructor` are lifecycle methods
* The React API exposes various methods that allow us to write code that will run during these events

```js
// the component has mounted successfully
// set up timers or create socket connections in this method
componentDidMount() {}

// runs every time the component updates
// run logic that depends on state or props
componentDidUpdate() {}

// runs right before the component unmounts
// clear intervals and close connections; perform any cleanup necessary
componentWillUnmount() {}
```

![Lifecycle Methods](https://miro.medium.com/max/4560/1*EnuAy1kb9nOcFuIzM49Srw.png)

### Useful Links
- [ES6 Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [FCC: Why do we bind `this`?](https://www.freecodecamp.org/news/this-is-why-we-need-to-bind-event-handlers-in-class-components-in-react-f7ea1a6f93eb/)
- [React Docs: `setState`](https://reactjs.org/docs/react-component.html#setstate)
- [`super(props)` vs `super()`](https://overreacted.io/why-do-we-write-super-props/)
- [Lifecycle Methods](https://programmingwithmosh.com/javascript/react-lifecycle-methods/)
