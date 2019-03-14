import React from 'react';
import './Header.css';
import moment from 'moment';

const timestamp = moment().format("D MMM");

const HeaderTitle = () => {
    return (
      <section className="HeaderTitle">
      <h1>Lambda School</h1>
        <p>@LambdaSchool</p>
        <p>·</p>
        <p>{timestamp}</p>
      </section>
    );
  
  };

  export default HeaderTitle;