import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Products from './Products';
import Nav from './Nav';

const Main = () => {
  return (
    <div>
      <h2>Main</h2>
      <Router>
        <Nav />

        <Switch>
          <Route path="/about">
            <About status="loggedIn"/>
          </Route>
          <Route path="/products" component={Products}/>
          <Route path="/" component={Home} />
        </Switch>

      </Router>
    </div>
  );
};

export default Main;
