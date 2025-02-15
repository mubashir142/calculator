import React, { useState } from 'react';
import Display from './Display';

const Calculator = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [operator, setOperator] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');

    const handleCalculate = () => {
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);

        if (isNaN(number1) || isNaN(number2)) {
            setError('Please enter valid numbers.');
            return;
        }

        let calculationResult;

        switch (operator) {
            case '+':
                calculationResult = number1 + number2;
                break;
            case '-':
                calculationResult = number1 - number2;
                break;
            case '*':
                calculationResult = number1 * number2;
                break;
            case '/':
                if (number2 !== 0) {
                    calculationResult = number1 / number2;
                } else {
                    setError('Error! Division by zero.');
                    return;
                }
                break;
            default:
                setError('Error! Invalid operator.');
                return;
        }

        setResult(calculationResult);
        setError('');
    };

    return (
        <div>
            <Display num1={num1} num2={num2} operator={operator} result={result} error={error} />
            <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="First number" />
            <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Second number" />
            <input type="text" value={operator} onChange={(e) => setOperator(e.target.value)} placeholder="Operator (+, -, *, /)" />
            <button onClick={handleCalculate}>Calculate</button>
        </div>
    );
};

export default Calculator;