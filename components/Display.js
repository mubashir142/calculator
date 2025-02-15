import React from 'react';

const Display = ({ input, result }) => {
    return (
        <div className="display">
            <h2>Input: {input}</h2>
            <h2>Result: {result}</h2>
        </div>
    );
};

export default Display;