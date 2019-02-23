import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hideModal, getSelectedRows } from '../../../../../../redux/actions';
import './TableMenuDeleteConfirmation.css';
import Notifications from '../../../../../Notifications/Notifications';
import Button from '../../../../../Button/Button';

class TableMenuDeleteConfirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectionCount: props.selectionCount,
    };
    this.modalId = props.modalId;
    this.noticeId = 'table_row_delete_confirmation';
    this.onDelete = props.onDelete || (() => {});
  }
  
  static getDerivedStateFromProps(props, state) {
    if (props.selectionCount !== state.selectionCount) {
      return {
        selectionCount: props.selectionCount,
      };
    }
    return null;
  }

  componentDidMount() {
    this.props.getSelectedRows();
  }

  hideModal = () => {
    this.props.hideModal(this.modalId);
  }

  render() {
    const { selectionCount } = this.state;
    return (
      <div className="TableMenuDeleteConfirmation">
        <div className="TableMenuDeleteConfirmation__notifications">
          <Notifications group={this.noticeId} />
        </div>
        <div className="TableMenuDeleteConfirmation__text">
          You are about to delete { selectionCount } record{ (selectionCount > 1) && 's' }.<br />
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
            onClick={this.onDelete}
          />
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    selectionCount: state.table.selection.length,
  };
};

const mapDispatchToProps = {
  hideModal,
  getSelectedRows,
};

export default connect(mapStateToProps, mapDispatchToProps)(TableMenuDeleteConfirmation);
