import React from 'react';
import uuid from 'uuid/v4';
import TableRow from '../TableRow/TableRow';

const TableBody = ({ columns = null, rows = null }) => {
  if (!Array.isArray(columns) && !Array.isArray(rows))
    return null;

  return (
    <div className="TableBody">
      {
        rows.map(row => (
          <TableRow
            key={uuid()}
            columns={columns}
            values={row}
          />
        ))
      }
    </div>
  );
};

export default TableBody;
