import React from 'react';
import './Header.css';
import ImageThumbnail from "./ImageThumbnail";

const HeaderContainer = () => {
    return (
      <nav className="HeaderContainer"> 
      <ImageThumbnail />
        {/* <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">More</a> */}
      </nav>
    );
  
  };

  export default HeaderContainer;