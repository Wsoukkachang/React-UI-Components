import React from 'react';
import './Card.css';
import CardContent from './CardContent';

let cardContainer = document.querySelector('.CardContainer');

//working on click event for whole CardContainer class

// cardContainer.addEventListener('click', () => {
//     window.open('https://www.reactjs.org'); 
// });

const CardContainer = () => {
    return (
      <section className="CardContainer"> 
      <CardContent />
      </section>
    );
  
  };

  export default CardContainer;