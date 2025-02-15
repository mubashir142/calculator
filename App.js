import React, { useState } from 'react';
import Calculator from './components/Calculator';
import Display from './components/Display';
import './App.css';

function App() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);

    const handleInputChange = (value) => {
        setInput(value);
    };

    const handleCalculate = (calculationResult) => {
        setResult(calculationResult);
    };

    return (
        <div className="App">
            <h1>Calculator</h1>
            <Display input={input} result={result} />
            <Calculator onInputChange={handleInputChange} onCalculate={handleCalculate} />
        </div>
    );
}

export default App;