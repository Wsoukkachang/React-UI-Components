import React from 'react';
import './Footer.css';

import commenticon from "./img/Comment-Icon.png";
import shareicon from "./img/Share-Icon.png";
import loveicon from "./img/Love-Icon.png";
import messageicon from "./img/Message-Icon.png";


// myfunction() {
//     count += 1;
//     button.innerHTML = "" + count;
//   };


const Footer= () => {
    return (
      <section className="Footer">
      <button><img src={commenticon} alt="comment icon" className="commenticon" onClick={this.myfunction} />0</button>
      <button><img src={shareicon} alt="share icon" className="shareicon"  onClick={this.myfunction} />6</button>
      <button><img src={loveicon} alt="love icon" className="loveicon" onClick={this.myfunction} />4</button>
      <button><img src={messageicon} alt="message icon" className="messageicon" onClick={this.myfunction} />0</button>
      </section>
    );
  
  };

  export default Footer;
