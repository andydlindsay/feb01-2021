import React, { useState } from 'react'
import Computer from './Computer'
import Player from './Player'
import Result from './Result'

const Game = () => {
  const [state, setState] = useState({
    compSelection: null,
    playerSelection: null,
    status: 'Waiting',
    cheating: false
  });
  
  return (
    <div>
      <main className="game">
        <Computer state={state} />
        <Player state={state} setState={setState} />
      </main>
      <Result status={state.status} />
    </div>
  );
};

export default Game;
