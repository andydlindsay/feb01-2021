import React from 'react';
import Header from './components/Header';
import Game from './components/Game';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Game />
    </div>
  );
};

export default App;
