import React, {Component} from 'react'; // imported Component to make class
import './Button.css';


class NumberButton extends Component {
    render() {
        return (
        <button className={this.props.buttonStyle} onClick={this.props.onClick} value={this.props.value}>{this.props.text}</button>
        )
    }
}

export default NumberButton;