import React from 'react';
import './Footer.css';

import commenticon from "./img/Comment-Icon.png"
import loveicon from "./img/Love-Icon.png"
import messageicon from "./img/Message-Icon.png"
import shareicon from "./img/Share-Icon.png"

// button.onclick = function() {
//     count += 1;
//     button.innerHTML = "" + count;
//   };


const Footer= () => {
    return (
      <section className="Footer">
      <img src={commenticon} className="CommentIcon"/>

      <img src={loveicon} className="LoveIcon"/>
      <img src={messageicon} className="MessageIcon"/>
      <img src={shareicon} className="ShareIcon"/>
      </section>
    );
  
  };

  export default Footer;
