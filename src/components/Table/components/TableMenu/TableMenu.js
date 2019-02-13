import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { showModal } from '../../../../redux/actions';
import uuid from 'uuid/v4';
import './TableMenu.css';
import TableMenuItem from './components/TableMenuItem/TableMenuItem';
import PeopleSetName from '../People/PeopleSetName/PeopleSetName';

class TableMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
      isMultiSelected: false,
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

  createPeople = () => {
    const modalId = uuid();
    this.props.showModal(modalId, <PeopleSetName modalId={modalId} />, 'Add Member');
  }

  render() {
    return (
      <div className="TableMenu">
        <div className="wrapper">
        
          <div className="TableMenu__list" data-visible={!this.state.isSelected}>
            <div className="TableMenu__list__set">
              <TableMenuItem icon="menu" />
              <TableMenuItem text="Select all" />
            </div>
            <div className="TableMenu__list__set">
              <TableMenuItem text="Add member" icon="add" onClick={this.createPeople} />
              <TableMenuItem icon="filter" />
            </div>
          </div>

          <div className="TableMenu__list" data-visible={this.state.isSelected}>
            <div className="TableMenu__list__set">
              <TableMenuItem icon="menu" />
              <TableMenuItem text="Unselect all" />
            </div>
            <div className="TableMenu__list__set">
              <TableMenuItem text="Edit" icon="edit" data-active={!this.state.isMultiSelected} />
              <TableMenuItem text="Delete" icon="delete" />
            </div>
          </div>

        </div>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    isSelected: state.people.isSelected || false,
    isMultiSelected: state.people.isMultiSelected || false,
  };
};

const mapDispatchToProps = {
  showModal,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TableMenu));
