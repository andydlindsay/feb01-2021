import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <div className="App">
      <h2>React Router Demo</h2>

      <Router>
        <Navigation />

        <Switch>
          <Route path="/about" component={About} />
          <Route path="/products" component={Products} />
          <Route path="/">
            <Home something="something else" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
