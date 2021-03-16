import {useState} from 'react';
import './App.css';
import Header from './components/Header';
// import Visitors from './components/Visitors';
import Pizza from './components/Pizza';

const App = () => {
  const [heading] = useState(`Pat's Pizza Place`);

  return (
    <div className="App">
      {/* <Header heading="Hello World" /> */}
      {/* <Header heading="Proof of Concept" /> */}
      <Header heading={heading} />
      {/* <Visitors /> */}
      <Pizza />
    </div>
  );
};

export default App;
