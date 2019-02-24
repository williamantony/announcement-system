import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTable, updateTable } from '../../redux/actions';
import uuid from 'uuid/v4';
import TableHead from './components/TableHead/TableHead';
import TableBody from './components/TableBody/TableBody';
import TableMenu from './components/TableMenu/TableMenu';

class Table extends Component {
  constructor(props) {
    super(props);
    this.name = props.name || uuid();
    this.state = {
      columns: props.columns || [],
      rows: props.rows || [],
    };
  }

  static getDerivedStateFromProps(props, state) {
    const { columns, rows, _columns, _rows } = props;

    if (!!rows && !!columns && (
      JSON.stringify(rows) !== JSON.stringify(state.rows) ||
      JSON.stringify(columns) !== JSON.stringify(state.columns)
    )) return { columns, rows };

    if (!!_rows && !!_columns && (
      JSON.stringify(_rows) !== JSON.stringify(state.rows) ||
      JSON.stringify(_columns) !== JSON.stringify(state.columns)
    )) return { columns, rows: _rows };

    return null;
  }

  componentDidMount() {
    const tableConfig = {
      columns: this.state.columns,
      rows: this.state.rows,
    };
    this.props.createTable(this.name, tableConfig);
  }

  componentDidUpdate() {
    this.props.updateTable(this.name, this.state);
  }

  render() {
    const { columns, rows } = this.state;

    const onEdit = this.props.onEdit || null;
    const onDelete = this.props.onDelete || null;
    const onMenu = this.props.onMenu || null;
    const customMenu = this.props.customMenu || null;

    if (columns.length === 0 && rows.length === 0)
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
        <TableBody columns={columns} rows={rows} tableName={this.name} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const table = state.table.instances[ownProps.name];
  if (!!table) {
    return {
      _columns: table.columns,
      _rows: table.rows,
    };
  }
  return {};
};

const mapDispatchToProps = {
  createTable,updateTable
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
