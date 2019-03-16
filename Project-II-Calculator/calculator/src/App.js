import React, {Component} from 'react'; // imported Component to make class //
import update from 'immutability-helper'; // imported for states/ updates //
import math from 'mathjs'; // imported for math functions //
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const numbers = [
  {text: 7, value: "7"},
  {text: 8, value: "8"},
  {text: 9, value: "9"},
  {text: 4, value: "4"},
  {text: 5, value: "5"},
  {text: 6, value: "6"},
  {text: 1, value: "1"},
  {text: 2, value: "2"},
  {text: 3, value: "3"}
]

const symbols = [
  {text: "÷", value: "/"},
  {text: "x", value: "*"},
  {text: "-", value: "-"},
  {text: "+", value: "+"},
  {text: "=", value: "equal"}
]

class App extends Component {
  constructor() {
    super();
    this.state = { operations: [] };
  }

  // math operations //
  calculateOperations = () => {
    let result = this.state.operations.join('');

    if (result) {
      result = math.eval(result);

      result = math.format(result, { precision: 14 });

      this.setState({
        operations: [result],
      })
    }
  }

  // on mouse clicks//
  handleClick = e => {
    const value = e.target.getAttribute('value')
    switch (value) {
      case 'clear':
        this.setState({
          operations: [],
        })
        break
      case 'equal':
        this.calculateOperations()
        break
      default:
        const newOperations = update(this.state.operations, { $push: [value],});

        this.setState({
          operations: newOperations,
        });
        break
    }
  }

  // can use with keyboard presses //
  onKeyPress = e => {
    const value = e.key;

    const allowed = [
      '1', '2', '3', '4',
      '5', '6', '7', '8',
      '9', '0', '+', '-', '*', '/', '=', '.',
      'Enter', 'equal', 'Escape', 'C',
      'Backspace'
    ];

    if (allowed.includes(value)) {
      switch (value) {
        case 'Escape':
          this.setState({
            operations: [],
          })
          break
        case 'Backspace':
          const backSpaceOperations = this.state.operations;
          backSpaceOperations.pop()
          this.setState({
            operations: backSpaceOperations,
          })
          break
        case '=':
        case 'Enter':
          this.calculateOperations()
          break
        default:
          const newOperations = update(this.state.operations, {
            $push: [value],
          })
          this.setState({
            operations: newOperations,
          })
          break
      }
    }
  }

  componentWillMount = (e) => {
    document.addEventListener("keydown", this.onKeyPress.bind(this));
  }

  //used to render//
  render () {

    return (
      <div className="container">
      <div className="calc-display"><CalculatorDisplay data={this.state.operations}/></div>
      
      <div className="clear-container"><ActionButton buttonStyle={'clear-button'} onClick={this.handleClick} onKeyPress={this.onKeyPress} text={'clear'} value={'clear'}/></div>
      
      <div className="symbols-container">
        {symbols.map((symbol) => (
        <NumberButton buttonStyle={'symbol-button'} onClick={this.handleClick} onKeyPress={this.onKeyPress} text={symbol.text} value={symbol.value}/>
        ))
        }
      </div>
  
      <div className="numbers-container">
        {numbers.map((number) => (
        <NumberButton buttonStyle={'number-button'} onClick={this.handleClick} onKeyPress={this.onKeyPress} text={number.text} value={number.value}/>
        ))
        }
      </div>
      
      <div className="zero-container"><ActionButton buttonStyle={'zero-button'} onClick={this.handleClick} onKeyPress={this.onKeyPress} text={0} value={0} /></div>
      </div> // !container//
        );
  }
};

export default App;
