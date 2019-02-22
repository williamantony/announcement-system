import React from 'react';
import TableHead from './components/TableHead/TableHead';
import TableBody from './components/TableBody/TableBody';
import TableMenu from './components/TableMenu/TableMenu';

const Table = ({
  columns = null, rows = null,
  onEdit = null, onDelete = null, onMenu = null,
  customMenu = null,
}) => {
  if (!Array.isArray(columns) && !Array.isArray(rows))
    return null;

  return (
    <div className="Table">
      <TableMenu
        onEdit={onEdit}
        onDelete={onDelete}
        onMenu={onMenu}
        customMenu={customMenu}
      />
      <TableHead columns={columns} />
      <TableBody columns={columns} rows={rows} />
    </div>
  );
};

export default Table;
