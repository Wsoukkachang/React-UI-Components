import React, {Component} from 'react'; // imported Component to make class
import './Display.css';

//re-factor to class//
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