import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hideModal } from '../../../../../../redux/actions';
import uuid from 'uuid/v4';
import './TableMenuDeleteConfirmation.css';
import Notifications from '../../../../../Notifications/Notifications';
import Button from '../../../../../Button/Button';

class TableMenuDeleteConfirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: props.selection || [],
    };
    this.tableName = props.tableName || uuid();
    this.modalId = props.modalId;
    this.noticeId = 'table_row_delete_confirmation';
    this.onDelete = props.onDelete || (() => {});
  }
  
  static getDerivedStateFromProps(props, state) {
    if (props.selection.length !== state.selection.length) {
      return {
        selection: props.selection,
      };
    }
    return null;
  }

  hideModal = () => {
    this.props.hideModal(this.modalId);
  }

  render() {
    const { selection } = this.state;

    return (
      <div className="TableMenuDeleteConfirmation">
        <div className="TableMenuDeleteConfirmation__notifications">
          <Notifications group={this.noticeId} />
        </div>
        <div className="TableMenuDeleteConfirmation__text">
          You are about to delete { selection.length } record{ (selection.length > 1) && 's' }.<br />
          Are you sure ?
        </div>
        <div className="TableMenuDeleteConfirmation__actions">
          <Button
            text="No"
            onClick={this.hideModal}
          />
          <Button
            text="Delete"
            color="#fff"
            backgroundColor="#e53935"
            onClick={() => this.onDelete(selection)}
          />
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state, ownProps) => {
  const table = state.table.instances[ownProps.tableName] || {
    selection: [],
  };
  return {
    selection: table.selection,
  };
};

const mapDispatchToProps = {
  hideModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(TableMenuDeleteConfirmation);
