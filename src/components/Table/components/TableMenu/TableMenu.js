import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { showModal } from '../../../../redux/actions';
import './TableMenu.css';
import TableMenuItem from './components/TableMenuItem/TableMenuItem';

class TableMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customMenu: props.customMenu,
      isSelected: false,
      isMultiSelected: false,
    };
    this.events = {
      onEdit: props.onEdit || (() => {}),
      onDelete: props.onDelete || (() => {}),
      onMenu: props.onMenu || (() => {}),
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.isSelected !== state.isSelected ||
      props.isMultiSelected !== state.isMultiSelected) {
      return {
        isSelected: props.isSelected,
        isMultiSelected: props.isMultiSelected,
      };
    }
    return null;
  }

  render() {
    return (
      <div className="TableMenu">
        <div className="wrapper">
        
          <div className="TableMenu__list" data-visible={!this.state.isSelected}>
            <div className="TableMenu__list__set">
              <TableMenuItem icon="search" />
            </div>
            <div className="TableMenu__list__set">
              { this.state.customMenu }
              <TableMenuItem icon="menu" />
            </div>
          </div>

          <div className="TableMenu__list" data-visible={this.state.isSelected}>
            <div className="TableMenu__list__set">
              <TableMenuItem icon="search" />
            </div>
            <div className="TableMenu__list__set">
              <TableMenuItem
                text="Edit"
                icon="edit"
                data-active={!this.state.isMultiSelected}
                onClick={(e) => this.events.onEdit(e)}
              />
              <TableMenuItem
                text="Delete"
                icon="delete"
                onClick={(e) => this.events.onDelete(e)}
              />
              <TableMenuItem icon="menu" onClick={(e) => this.events.onMenu(e)} />
            </div>
          </div>

        </div>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    isSelected: state.table.isSelected || false,
    isMultiSelected: state.table.isMultiSelected || false,
  };
};

const mapDispatchToProps = {
  showModal,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TableMenu));
