import React, { Component } from 'react';
import uuid from 'uuid/v4';
import './TableRow.css';

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: props.columns || [],
      values: props.values || [],
      isSelected: props.isSelected || false,
    };
  }

  toggleSelection = () => {
    this.setState({
      isSelected: !this.state.isSelected,
    });
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
        <div className="TableRow__content">
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

export default TableRow;
