import React from 'react';
import TableHead from './components/TableHead/TableHead';
import TableBody from './components/TableBody/TableBody';
import TableMenu from './components/TableMenu/TableMenu';

const Table = ({ columns = null, rows = null }) => {
  if (!Array.isArray(columns) && !Array.isArray(rows))
    return null;

  return (
    <div className="Table">
      <TableMenu />
      <TableHead columns={columns} />
      <TableBody columns={columns} rows={rows} />
    </div>
  );
};

export default Table;
