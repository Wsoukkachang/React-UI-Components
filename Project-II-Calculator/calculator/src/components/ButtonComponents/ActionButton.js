import React, {Component} from 'react'; // imported Component to make class
import './Button.css';

//re-factor to class//
class ActionButton extends Component {
    render() {
        return (
        <button className={this.props.className} onClick={this.props.onClick} value={this.props.value}>{this.props.text}</button>
        )
    }
}

export default ActionButton;