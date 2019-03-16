import React, {Component} from 'react'; // imported Component to make class
import './Display.css';

class CalculatorDisplay extends Component {
    render() {
        const string = this.props.data.join('');

        return (
            <div className="calc-display">
                {string}
            </div>
            )
        }
    }

export default CalculatorDisplay;