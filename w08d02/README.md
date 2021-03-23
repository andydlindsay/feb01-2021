# W08D02 - Real World React

### To Do
- [x] React Router
- [x] Advanced Routing
- [x] Styled Components
- [x] `useContext` Redux-replacer
- [x] `useRef`
- [x] Component Libraries

### React Router
* Uses the `react-router-dom` package
* Inside of a `Router` component, you can use `Link` components to provide clickable links to the user
* Inside of a `Switch`, the first `Route` whose `path` attribute matches the path the user is trying to visit gets rendered
* Outside of a `Switch`, any `Route` whose `path` matches will render

```jsx
<Router>
  <Link to="/">Home</Link>
  <Link to="/about">About</Link>
  <Link to="/products">Products</Link>

  <Switch>
    <Route path="/about">
      <About />
    </Route>
    { /* alternative syntax */ }
    <Route path="/products" component={Products} />
    { /* you can specify that a route must match specifically with the exact attribute */ }
    <Route path="/" exact component={Home} />
  </Switch>
<Router>
```

### Advanced Routing
* It is possible to nest `react-router` components
* So that we can programmatically have access to the url the user has visited and any parameters (eg. `productId`), `react-router-dom` gives us a _custom hook_
* `useParams` gives child components access to the parameters in the url

```jsx
// dynamic routing in parent component
const Products = () => {
  return (
    <div>
      <nav>
        <Link to={`/products/2`}>Product #2</Link><br/>
        <Link to={`/products/3`}>Product #3</Link><br/>
        <Link to={`/products/4`}>Product #4</Link><br/>
        <Link to={`/products/5`}>Product #5</Link>
      </nav>

      <Switch>
        <Route path={`/products/:productId`}>
          <Product />
        </Route>
        <Route path="/products">
          <h3>Please select a product above</h3>
        </Route>
      </Switch>
    </div>
  );
};
```

```jsx
// parameters inside child component
const Product = () => {
  const params = useParams();

  return (
    <div>
      <h2>Product {params.productId}</h2>
    </div>
  );
};
```

### Programmatic Routing
* `react-router` gives us another _custom hook_ that allows us to programmatically navigate through our app
* `useHistory` gives us an object with a method called `push` which accepts a string

```js
import {useHistory} from 'react-router-dom';

// useHistory gives us back a history object
const history = useHistory();

// update the current url to '/about'
history.push('/about');
```

### Styled Components
* Styled components allow us to embed our styles inside our JavaScript
* Uses the `styled-components` package
* Syntax is kinda weird...

```js
import styled from 'styled-components';

const Paragraph = styled.p`
  color: pink;
  font-size: 24px;
  text-decoration: underline;
`;

// inside component return
<Paragraph>I look soooo good!</Paragraph>
```

* Styled components can also accept props for conditional styling

```js
const Custom = styled.h2`
  background: ${ props => props.electric ? 'black' : 'white' };
  color: ${ props => props.electric ? 'yellow' : 'darkgrey' };

  text-decoration: underline;
`;

// inside component return
<Custom>Basic</Custom>
<Custom electric>I'm Electric!!!</Custom>
```

### `useContext`
* `useContext` can be used to share state without having to pass props from parent to child
* Any component that needs access to the shared state can simply import the context and pass it to `useContext`

```js
// in a separate file, create the context to be shared
const MessageContext = React.createContext();

// in the parent component, wrap all children in the context provider
return (
  <div>
    <MessageContext.Provider value={{ message: 'hello world' }}>
      <ChildOne />
      <ChildTwo />
    </MessageContext.Provider>
  </div>
);

// consume the context in another component through useContext
import MessageContext from './MessageContext');
const context = React.useContext(MessageContext);

// or with destructuring
const { message } = React.useContext(MessageContext);
```

### `useRef`
* Allows us to programmatically make reference to an element or value
* `useRef` returns the same object on every render so we have a consistent reference
* References are attached to elements using the `ref` attribute
* The `.current` property of a reference contains the DOM node or value the `ref` is attached to
* React updates this value every time the component is re-rendered

```jsx
// DOM node reference
const UseRef = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <label htmlFor="input-field">Input Field:</label>
      <input type="text" id="input-field" ref={inputRef} />

      <button type="button" onClick={handleClick}>Apply Focus</button>
    </div>
  );
};
```

```jsx
// current value reference
const UseRef = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef();
  countRef.current = count;

  const handleAlert = () => {
    setTimeout(() => {
      alert(countRef.current);
    }, 3000);
  };

  return (
    <div>
      <div>
        <p>{count}</p>
        <button onClick={() => setCount(count => count + 1)}>Increment</button>
        <button onClick={handleAlert}>Show Alert</button>
      </div>
    </div>
  );
};
```

### Component Libraries
* Why build it yourself if someone else already has??
* Component libraries give us easy access to ready-built components that we can plug into our application
* We can use as much or as little of the component library as we want
* Some examples are [Material-UI](https://material-ui.com/) and [Ant Design](https://ant.design/) 

### Useful Links
* [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
* [Styled Components](https://styled-components.com/docs/basics)
* [Top React UI Frameworks (opinionated)](https://www.codeinwp.com/blog/react-ui-component-libraries-frameworks/)
* [State Reducer Pattern](https://kentcdodds.com/blog/the-state-reducer-pattern-with-react-hooks)
* [Tagged Template Literals](https://codeburst.io/javascript-es6-tagged-template-literals-a45c26e54761)
