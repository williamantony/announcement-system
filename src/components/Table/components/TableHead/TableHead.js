import React from 'react';
import uuid from 'uuid/v4';
import './TableHead.css';

const TableHead = ({ columns = null }) => {
  if (!Array.isArray(columns))
    return null;

  return (
    <div className="TableHead">
      <div className="TableHead__row">
        <div className="TableHead__row__selector" />
        <div className="TableHead__row__content">
          {
            columns.map(column => (
              <div
                key={uuid()}
                className="TableHead__row__content__item"
                style={column.headStyle}
              >
                { column.name }
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default TableHead;
