import React from 'react';
import './Header.css';
import ImageThumbnail from "./ImageThumbnail";
import HeaderContent from "./HeaderContent";

const HeaderContainer = () => {
    return (
      <section className="HeaderContainer"> 
      <ImageThumbnail />
      <HeaderContent />
      </section>
    );
  
  };

  export default HeaderContainer;