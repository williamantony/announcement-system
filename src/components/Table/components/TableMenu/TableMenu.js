import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { showModal } from '../../../../redux/actions';
import uuid from 'uuid/v4';
import './TableMenu.css';
import TableMenuItem from './components/TableMenuItem/TableMenuItem';
import TableMenuDeleteConfirmation from './components/TableMenuDeleteConfirmation/TableMenuDeleteConfirmation';

class TableMenu extends Component {
  constructor(props) {
    super(props);
    this.tableName = props.tableName || uuid();
    this.state = {
      customMenu: props.customMenu,
      isSelected: props.isSelected,
      isMultiSelected: props.isMultiSelected,
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

  onDelete = () => {
    const modalId = uuid();
    this.props.showModal(
      modalId,
      <TableMenuDeleteConfirmation
        modalId={modalId}
        tableName={this.tableName}
        onDelete={(selection) => this.events.onDelete(selection)}
      />,
      'Confirmation Required',
    );
  }

  onEdit = (e) => {
    if (!this.state.isMultiSelected) {
      this.events.onEdit(e);
    }
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
                onClick={(e) => this.onEdit(e)}
              />
              <TableMenuItem
                text="Delete"
                icon="delete"
                onClick={(e) => this.onDelete(e)}
              />
              <TableMenuItem icon="menu" onClick={(e) => this.events.onMenu(e)} />
            </div>
          </div>

        </div>
      </div>
    );
  }

}

const mapStateToProps = (state, ownProps) => {
  const table = state.table.instances[ownProps.tableName] || {
    selection: [],
  };
  const isSelected = table.selection.length !== 0;
  const isMultiSelected = table.selection.length > 1;
  return {
    isSelected,
    isMultiSelected,
  };
};

const mapDispatchToProps = {
  showModal,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TableMenu));
