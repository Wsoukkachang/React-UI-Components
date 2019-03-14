import React from 'react';
import './Card.css';
import CardBanner from "./CardBanner";

const CardContent = () => {
    return (
      <section className="CardContent">
      <CardBanner />
      <h1>Get started with React</h1>
      <p>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
      </section>
    );
  
  };

  export default CardContent;