import React from 'react';
import './Header.css';

// let time = new Date();
// let date = time.getDate(); // working timestamp
// let month = time.getMonth();

const HeaderTitle = () => {
    return (
      <section className="HeaderTitle">
      <h1>Lambda School</h1>
        <p>@LambdaSchool</p>
        <p>·</p>
        <p>13 Mar</p>
      </section>
    );
  
  };

  export default HeaderTitle;