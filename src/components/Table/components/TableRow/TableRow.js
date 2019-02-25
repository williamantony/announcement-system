import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectTableRow } from '../../../../redux/actions';
import uuid from 'uuid/v4';
import history from '../../../../history';
import './TableRow.css';

class TableRow extends Component {
  constructor(props) {
    super(props);
    const values = props.values || {};
    this.tableName = props.tableName || uuid();
    this.state = {
      id: props.rowId || uuid(),
      columns: props.columns || [],
      values: values || {},
      onClick: values._onClick || null,
      isSelected: props.isSelected || false,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.isSelected !== state.isSelected) {
      return {
        isSelected: props.isSelected,
      };
    }
    return null;
  }

  onClick = () => {
    const { onClick } = this.state;
    if (!onClick) return false;
    history.push(onClick);
  };

  toggleSelection = () => {
    this.props.selectTableRow(this.tableName, this.state.id);
  }

  render() {
    const {
      columns,
      values,
      isSelected,
    } = this.state;

    return (
      <div className="TableRow" data-selected={isSelected}>
        <div className="TableRow__selector" data-action="select" onClick={this.toggleSelection}>
          <div className="TableRow__selector__icon" data-action="select" />
        </div>
        <div className="TableRow__arrow" />
        <div className="TableRow__content" onClick={this.onClick}>
          {
            columns.map(column => (
              <div key={uuid()} className="TableRow__cell" style={column.style}>{ values[column.name] }</div>
            ))
          }
        </div>
      </div>
    );
  }

};

const mapStateToProps = (state, ownProps) => {
  const table = state.table.instances[ownProps.tableName];
  const isSelected = table.selection
    .findIndex(item => item === ownProps.rowId) !== -1;
  return {
    isSelected,
  };
};

const mapDispatchToProps = {
  selectTableRow,
};

export default connect(mapStateToProps, mapDispatchToProps)(TableRow);
