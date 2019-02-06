import React from 'react';
import './Title.css';

const Title = ({ text, style }) => (
  <div className="Title">
    <div className="wrapper">
      <div className="Title__text" style={style}>
        { text || '' }
      </div>
    </div>
  </div>
);

export default Title;
