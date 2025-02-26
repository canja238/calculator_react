import './App.css';
import React, { useState } from 'react';
import Buttons from './Buttons';

function App() {
  const [input, setInput] = useState("");

  function display(value) {
    setInput(input + value);
  }

  function clear() {
    setInput("");
  }

  function equal() {
    try {
      setInput(eval(input).toString()); // Not recommended, but works
    } catch {
      setInput("error");
    }
  }

  return (
    <div className='container'>
      <input type='text' value={input} disabled />
      <br />
      <Buttons display={display} clear={clear} equal={equal} />
    </div>
  );
}

export default App;
