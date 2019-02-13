import React from 'react';
import './TableMenuItem.css';

const TableMenuItem = ({ text, icon, onClick, ...rest }) => {
  const handleClick = typeof onClick === 'function' ? onClick : () => {};
  return (
    <div
      className={`TableMenuItem 
        ${ !text ? `TableMenuItem--no-text` : '' } 
        ${ !icon ? `TableMenuItem--no-icon` : '' }
      `}
      onClick={ handleClick }
      {...rest}
    >
      <div className="holder">
        { icon && <div className="TableMenuItem__icon" data-icon={ icon } /> }
        { text && <div className="TableMenuItem__text">{ text }</div> }
      </div>
    </div>
  );
};

export default TableMenuItem;
