import React from 'react';
import './MenuBarItem.css';

const MenuBarItem = ({ text, icon, onClick, ...rest }) => {
  const handleClick = typeof onClick === 'function' ? onClick : () => {};
  return (
    <div className="MenuBarItem" onClick={ handleClick } {...rest}>
      <div className="holder">
        { icon && <div className="MenuBarItem__icon" data-icon={ icon } /> }
        { text && <div className="MenuBarItem__text">{ text }</div> }
      </div>
    </div>
  );
};

export default MenuBarItem;
