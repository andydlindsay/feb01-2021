import './App.css';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
import {useState} from 'react';
import ClassBased from './components/ClassBased';
import Lifecycle from './components/Lifecycle';

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <h2>Class-based Components</h2>
      <Router>
        <Link to="/lifecycle">Lifecycle</Link>
        <Link to="/">Home</Link>

        <Switch>
          <Route path="/lifecycle" component={Lifecycle} />
          <Route path="/">
            <ClassBased counter={counter} />
          </Route>
        </Switch>

      </Router>
    </div>
  );
};

export default App;
