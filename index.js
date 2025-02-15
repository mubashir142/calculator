import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
function modulus(a, b) {
    return a % b;
}

function exponentiation(a, b) {
    return Math.pow(a, b);
}

console.log(modulus(10, 3)); // Output: 1
console.log(exponentiation(2, 3)); // Output: 8
