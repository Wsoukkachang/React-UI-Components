import React, {Component} from 'react'; // imported Component to make class
import './Card.css';
import CardContent from './CardContent';


// made a class ---to be able to use the click function when div is clicked
class CardContainer extends Component {
    // cardClick function
    cardClick = () => {
        let cardStuff= document.querySelector(".cardStuff");
        
        cardStuff.addEventListener("click", () => {
            window.open("https://www.reactjs.org"); 
        });
    }

    // used to render
    render () {
        return (
            <div className= "cardStuff" onClick={this.cardClick}>
            <section className="CardContainer"> 
            <CardContent />
            </section>
            </div>
        );
    };
};

  export default CardContainer;