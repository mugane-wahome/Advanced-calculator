// src/Calculator.js
import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
    const [display, setDisplay] = useState('0');

    const handleButtonClick = (value) => {
        if (value === '=') {
            try {
                const result = eval(display);
                setDisplay(result.toString());
            } catch (error) {
                setDisplay('Error');
            }
        } else if (value === 'C') {
            setDisplay('0');
        } else if (value === 'X') {
            setDisplay(display.length > 1 ? display.slice(0, -1) : '0');
        } else {
            setDisplay(display === '0' ? value : display + value);
        }
    };

    return (
        <div className="calculator">
            <input type="text" value={display} readOnly />
            <div className="buttons">
                <button onClick={() => handleButtonClick('7')}>7</button>
                <button onClick={() => handleButtonClick('8')}>8</button>
                <button onClick={() => handleButtonClick('9')}>9</button>
                <button onClick={() => handleButtonClick('+')}>+</button>
                <button onClick={() => handleButtonClick('4')}>4</button>
                <button onClick={() => handleButtonClick('5')}>5</button>
                <button onClick={() => handleButtonClick('6')}>6</button>
                <button onClick={() => handleButtonClick('-')}>-</button>
                <button onClick={() => handleButtonClick('1')}>1</button>
                <button onClick={() => handleButtonClick('2')}>2</button>
                <button onClick={() => handleButtonClick('3')}>3</button>
                <button onClick={() => handleButtonClick('*')}>*</button>
                <button onClick={() => handleButtonClick('0')}>0</button>
                <button onClick={() => handleButtonClick('.')}>.</button>
                <button onClick={() => handleButtonClick('/')}>/</button>
                <button onClick={() => handleButtonClick('(')}>(</button>
                <button onClick={() => handleButtonClick(')')}>)</button>
                <button onClick={() => handleButtonClick('Math.sqrt(')}>√</button>
                <button onClick={() => handleButtonClick('Math.pow(')}>^</button>
                <button onClick={() => handleButtonClick('Math.sin(')}>sin</button>
                <button onClick={() => handleButtonClick('Math.cos(')}>cos</button>
                <button onClick={() => handleButtonClick('Math.tan(')}>tan</button>
                <button onClick={() => handleButtonClick('Math.log(')}>log</button>
                <button onClick={() => handleButtonClick('Math.exp(')}>exp</button>
                <button onClick={() => handleButtonClick('Math.PI')}>π</button>
                <button onClick={() => handleButtonClick('Math.E')}>e</button>
                <button onClick={() => handleButtonClick('=')}>=</button>
                <button onClick={() => handleButtonClick('C')}>C</button>
                <button onClick={() => handleButtonClick('X')}>X</button>
            </div>
            <footer className="calculator-footer">
                Coded by Mugane
            </footer>
        </div>
    );
};

export default Calculator;
