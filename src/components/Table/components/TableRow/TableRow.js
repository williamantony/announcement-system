import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createRow, setRowSelection } from '../../../../redux/actions';
import uuid from 'uuid/v4';
import history from '../../../../history';
import './TableRow.css';

class TableRow extends Component {
  constructor(props) {
    super(props);
    const values = props.values || {};
    this.state = {
      id: values._id || uuid(),
      columns: props.columns || [],
      values: values || {},
      onClick: values._onClick || null,
      isSelected: props.isSelected || false,
    };
  }

  componentDidMount() {
    this.props.createRow(this.state.id);
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
    this.props.setRowSelection(this.state.id, !this.state.isSelected);
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

const mapStateToProps = (state, props) => {
  return {
    ...(state.table.rows[props.values._id] || {
      isSelected: false,
    }),
  };
};

const mapDispatchToProps = {
  createRow,
  setRowSelection,
};

export default connect(mapStateToProps, mapDispatchToProps)(TableRow);
