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
            <button className="button-1" onClick={() => handleButtonClick('1')}>1</button>
                <button className="button-2" onClick={() => handleButtonClick('2')}>2</button>
                <button className="button-3" onClick={() => handleButtonClick('3')}>3</button>

                <button className="button-add" onClick={() => handleButtonClick('+')}>+</button>
                <button className="button-4" onClick={() => handleButtonClick('4')}>4</button>
                <button className="button-5" onClick={() => handleButtonClick('5')}>5</button>
                <button className="button-6" onClick={() => handleButtonClick('6')}>6</button>
                <button className="button-subtract" onClick={() => handleButtonClick('-')}>-</button>
                <button className="button-7" onClick={() => handleButtonClick('7')}>7</button>
                <button className="button-8" onClick={() => handleButtonClick('8')}>8</button>
                <button className="button-9" onClick={() => handleButtonClick('9')}>9</button>
                <button className="button-multiply" onClick={() => handleButtonClick('*')}>*</button>
                <button className="button-0" onClick={() => handleButtonClick('0')}>0</button>
                <button className="button-dot" onClick={() => handleButtonClick('.')}>.</button>
                <button className="button-divide" onClick={() => handleButtonClick('/')}>/</button>
                <button className="button-open" onClick={() => handleButtonClick('(')}>(</button>
                <button className="button-close" onClick={() => handleButtonClick(')')}>)</button>
                <button className="button-sqrt" onClick={() => handleButtonClick('Math.sqrt(')}>√</button>
                <button className="button-pow" onClick={() => handleButtonClick('Math.pow(')}>^</button>
                <button className="button-sin" onClick={() => handleButtonClick('Math.sin(')}>sin</button>
                <button className="button-cos" onClick={() => handleButtonClick('Math.cos(')}>cos</button>
                <button className="button-tan" onClick={() => handleButtonClick('Math.tan(')}>tan</button>
                <button className="button-log" onClick={() => handleButtonClick('Math.log(')}>log</button>
                <button className="button-exp" onClick={() => handleButtonClick('Math.exp(')}>exp</button>
                <button className="button-pi" onClick={() => handleButtonClick('Math.PI')}>π</button>
                <button className="button-e" onClick={() => handleButtonClick('Math.E')}>e</button>
                <button className="button-equal" onClick={() => handleButtonClick('=')}>=</button>
                <button className="button-clear" onClick={() => handleButtonClick('C')}>C</button>
                <button className="button-backspace" onClick={() => handleButtonClick('X')}>X</button>
            </div>
            <footer className="calculator-footer">
                Coded by Mugane
            </footer>
        </div>
    );
};

export default Calculator;
