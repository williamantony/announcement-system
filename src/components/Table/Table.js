import React, { Component } from 'react';
import TableHead from './components/TableHead/TableHead';
import TableBody from './components/TableBody/TableBody';
import TableMenu from './components/TableMenu/TableMenu';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: props.columns || null,
      rows: props.rows || null,
    };
  }

  static getDerivedStateFromProps(props, state) {
    const { rows } = props;
    if (JSON.stringify(rows) !== JSON.stringify(state.rows)) {
      return { rows };
    }
    return null;
  }

  render() {
    const { columns, rows } = this.state;

    const onEdit = this.props.onEdit || null;
    const onDelete = this.props.onDelete || null;
    const onMenu = this.props.onMenu || null;
    const customMenu = this.props.customMenu || null;

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
  }
}

export default Table;
