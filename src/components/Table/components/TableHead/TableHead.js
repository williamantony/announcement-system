import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectAllTableRows } from '../../../../redux/actions';
import uuid from 'uuid/v4';
import './TableHead.css';

class TableHead extends Component {
  constructor(props) {
    super(props);
    this.tableName = props.tableName || uuid();
    this.state = {
      columns: props.columns || [],
      isAllSelected: false,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.isAllSelected !== state.isAllSelected) {
      return {
        isAllSelected: props.isAllSelected,
      };
    }
    return null;
  }

  toggleSelectAll = () => {
    this.props.selectAllTableRows(this.tableName);
  }

  render() {
    return (
      <div className="TableHead">
        <div className="TableHead__row">
          <div
            className="TableHead__row__selector"
            data-selected={this.state.isAllSelected}
            onClick={this.toggleSelectAll}
          >
            <div className="TableHead__row__selector__icon" />
          </div>
          <div className="TableHead__row__content">
            {
              this.state.columns.map(column => (
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
  }
}

const mapStateToProps = (state, ownProps) => {
  const table = state.table.instances[ownProps.tableName] || {};
  const rows = table.rows || [];
  const selection = table.selection || [];
  const isAllSelected = (rows.length === selection.length);
  return {
    isAllSelected,
  };
};

const mapDispatchToProps = {
  selectAllTableRows,
};

export default connect(mapStateToProps, mapDispatchToProps)(TableHead);
