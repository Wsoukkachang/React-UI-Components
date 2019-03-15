import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';
import ActionButton from './components/ButtonComponents/ActionButton';

const numbers = [
  {text: 1},
  {text: 2},
  {text: 3},
  {text: 4},
  {text: 5},
  {text: 6},
  {text: 7},
  {text: 7},
  {text: 9}
]

const math = [
  {text: "÷"},
  {text: "x"},
  {text: "-"},
  {text: "="}
]

const App = () => {
  return (
    <div>
      {numbers.map((button) => (
      <NumberButton text={numbers.text}/>
      ))
      }
      
      {math.map((button) => (
      <ActionButton text={math.text}/>
      ))
      }
    </div>
  );
};

export default App;
