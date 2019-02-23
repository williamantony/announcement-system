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
    this.state = {
      customMenu: props.customMenu,
      selection: props.selection,
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
      props.isMultiSelected !== state.isMultiSelected ||
      props.selection.length !== state.selection.length
    ) {
      return {
        selection: props.selection,
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
        onDelete={() => this.events.onDelete(this.state.selection)}
      />,
      'Confirmation Required',
    );
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

const mapStateToProps = state => {
  return {
    selection: state.table.selection || [],
    isSelected: state.table.isSelected || false,
    isMultiSelected: state.table.isMultiSelected || false,
  };
};

const mapDispatchToProps = {
  showModal,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TableMenu));
