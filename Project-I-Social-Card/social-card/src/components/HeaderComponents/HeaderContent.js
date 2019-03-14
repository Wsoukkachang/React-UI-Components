import React from 'react';
import './Header.css';
import HeaderTitle from "./HeaderTitle";

const HeaderContent = () => {
    return (
      <section className="HeaderContent">
      <HeaderTitle />
      <p className = "top-p"> Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!</p>
      </section>
    );
  
  };

  export default HeaderContent;