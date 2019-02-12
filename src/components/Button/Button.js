import React from 'react';
import './Button.css';

const Button = ({ text = '', color = '#000000', backgroundColor = '#f5f5f5', ...rest }) => {
  const styles = {
    Button: {
      backgroundColor,
    },
    Button__text: {
      color,
    },
  };

  return (
    <button className="Button" style={ styles.Button } {...rest}>
      <div className="Button__text" style={ styles.Button__text }>{ text }</div>
    </button>
  );
};


export default Button;
