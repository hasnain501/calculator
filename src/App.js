import React, { useState } from 'react';
import './App.css';  

function App() {
  const [display, setDisplay] = useState('');

 
  const handleAppend = (char) => {
    setDisplay(display + char);
  };


  const handleClear = () => {
    setDisplay('');
  };

 
  const handleDelete = () => {
    setDisplay(display.slice(0, -1));
  };


  const handleCalculate = () => {
    try {
     
      const result = eval(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

 
  const handlePercent = () => {
    let result = parseFloat(display);
    if (!isNaN(result)) {
      setDisplay((result / 100).toString());
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={display} disabled />
      <div>
        <button className="clear" onClick={handleClear}>C</button>
        <button className="delete" onClick={handleDelete}>DEL</button>
        <button className="operator" onClick={handlePercent}>%</button>
        <button className="operator" onClick={() => handleAppend('/')}>/</button>
      </div>
      <div>
        <button onClick={() => handleAppend('7')}>7</button>
        <button onClick={() => handleAppend('8')}>8</button>
        <button onClick={() => handleAppend('9')}>9</button>
        <button className="operator" onClick={() => handleAppend('*')}>*</button>
      </div>
      <div>
        <button onClick={() => handleAppend('4')}>4</button>
        <button onClick={() => handleAppend('5')}>5</button>
        <button onClick={() => handleAppend('6')}>6</button>
        <button className="operator" onClick={() => handleAppend('-')}>-</button>
      </div>
      <div>
        <button onClick={() => handleAppend('1')}>1</button>
        <button onClick={() => handleAppend('2')}>2</button>
        <button onClick={() => handleAppend('3')}>3</button>
        <button className="operator" onClick={() => handleAppend('+')}>+</button>
      </div>
      <div>
        <button onClick={() => handleAppend('0')}>0</button>
        <button onClick={() => handleAppend('.')}>.</button>
        <button onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
}

export default App;
