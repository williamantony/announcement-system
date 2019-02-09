import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './MenuBar.css';
import MenuBarItem from './components/MenuBarItem/MenuBarItem';

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

  render() {
    return (
      <div className="MenuBar">
        <div className="wrapper">
        
          <div className="MenuBar__list" data-visible={!this.state.isSelected}>
            <div className="MenuBar__list__set">
              <MenuBarItem text="Add member" icon="add" />
            </div>
            <div className="MenuBar__list__set">
              <MenuBarItem icon="filter" />
            </div>
          </div>

          <div className="MenuBar__list" data-visible={this.state.isSelected}>
            <div className="MenuBar__list__set">
              <MenuBarItem text="Edit" icon="edit" data-active={!this.state.isMultiSelected} />
              <MenuBarItem text="Delete" icon="delete" />
            </div>
            <div className="MenuBar__list__set">
              <MenuBarItem icon="menu" />
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

};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MenuBar));
