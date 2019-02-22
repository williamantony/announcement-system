import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleSelectAllRows } from '../../../../redux/actions';
import uuid from 'uuid/v4';
import './TableHead.css';

class TableHead extends Component {
  constructor(props) {
    super(props);
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
    this.props.toggleSelectAllRows();
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

const mapStateToProps = state => {
  return {
    isAllSelected: state.table.isAllSelected,
  };
};

const mapDispatchToProps = {
  toggleSelectAllRows,
};

export default connect(mapStateToProps, mapDispatchToProps)(TableHead);
