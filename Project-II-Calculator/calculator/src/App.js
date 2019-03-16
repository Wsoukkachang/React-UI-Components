import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const numbers = [
  {text: 7},
  {text: 8},
  {text: 9},
  {text: 4},
  {text: 5},
  {text: 6},
  {text: 1},
  {text: 2},
  {text: 3}
]

const symbols = [
  {text: "÷"},
  {text: "x"},
  {text: "-"},
  {text: "+"},
  {text: "="}
]

const App = () => {
  return (
    <div className="container">
    <div className="calc-display"><CalculatorDisplay display={0} /></div>
    <div className="clear-container"><ActionButton buttonStyle={'clear-button'} text={'clear'}/></div>
    
    <div className="symbols-container">
      {symbols.map((symbol) => (
      <NumberButton buttonStyle={'symbol-button'} text={symbol.text} />
      ))
      }
    </div>

    <div className="numbers-container">
      {numbers.map((number) => (
      <NumberButton buttonStyle={'number-button'} text={number.text}/>
      ))
      }
    </div>
    
    <div className="zero-container"><ActionButton buttonStyle={'zero-button'} text={0}/></div>
    </div> // !container//
      );
};

export default App;
