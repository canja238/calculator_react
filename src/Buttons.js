import React from 'react';

function Buttons(props) {
  return (
    <div>
      <button onClick={function () { props.display("1"); }}>1</button>
      <button onClick={function () { props.display("2"); }}>2</button>
      <button onClick={function () { props.display("3"); }}>3</button>
      <button onClick={function () { props.display("+"); }}>+</button>
      <br />
      <button onClick={function () { props.display("4"); }}>4</button>
      <button onClick={function () { props.display("5"); }}>5</button>
      <button onClick={function () { props.display("6"); }}>6</button>
      <button onClick={function () { props.display("-"); }}>-</button>
      <br />
      <button onClick={function () { props.display("7"); }}>7</button>
      <button onClick={function () { props.display("8"); }}>8</button>
      <button onClick={function () { props.display("9"); }}>9</button>
      <button onClick={function () { props.display("*"); }}>*</button>
      <br />
      <button onClick={props.clear}>C</button>
      <button onClick={function () { props.display("0"); }}>0</button>
      <button onClick={props.equal}>=</button>
      <button onClick={function () { props.display("/"); }}>/</button>
    </div>
  );
}

export default Buttons;
