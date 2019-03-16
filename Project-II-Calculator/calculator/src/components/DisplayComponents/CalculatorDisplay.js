import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => {
    return (
        <div className="calc-display">
            {props.display}
        </div>
    )
}

export default CalculatorDisplay;