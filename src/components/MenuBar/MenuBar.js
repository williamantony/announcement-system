import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { showModal } from '../../redux/actions';
import uuid from 'uuid/v4';
import './MenuBar.css';
import MenuBarItem from './components/MenuBarItem/MenuBarItem';
import PeopleSetName from '../People/PeopleSetName/PeopleSetName';

class MenuBar extends Component {
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
      <div className="MenuBar">
        <div className="wrapper">
        
          <div className="MenuBar__list" data-visible={!this.state.isSelected}>
            <div className="MenuBar__list__set">
              <MenuBarItem icon="menu" />
              <MenuBarItem text="Select all" />
            </div>
            <div className="MenuBar__list__set">
              <MenuBarItem text="Add member" icon="add" onClick={this.createPeople} />
              <MenuBarItem icon="filter" />
            </div>
          </div>

          <div className="MenuBar__list" data-visible={this.state.isSelected}>
            <div className="MenuBar__list__set">
              <MenuBarItem icon="menu" />
              <MenuBarItem text="Unselect all" />
            </div>
            <div className="MenuBar__list__set">
              <MenuBarItem text="Edit" icon="edit" data-active={!this.state.isMultiSelected} />
              <MenuBarItem text="Delete" icon="delete" />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MenuBar));
