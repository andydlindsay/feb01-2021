import {useRef, useState} from 'react';

const Focus = () => {
  const inputRef = useRef();
  const counterRef = useRef();

  const [counter, setCounter] = useState(0);

  counterRef.current = counter;

  const clickHandler = () => {
    inputRef.current.focus();
  };

  const launchAlert = () => {
    setTimeout(() => {
      alert(`the current count is ${counterRef.current}`);
    }, 3000);
  };

  return (
    <div>
      <h2>useRef practice</h2>

      <div>
        <input ref={inputRef} />
        <button onClick={clickHandler}>Set focus on the input</button>
      </div>

      <div>
        <h2>Count: {counter}</h2>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
        <button onClick={launchAlert}>Launch Alert</button>
      </div>
    </div>
  );
};

export default Focus;
