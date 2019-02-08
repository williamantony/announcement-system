import React, { Component } from 'react';
import './MembersListItem.css';

class MembersListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
    };
  }

  toggleSelection = (event) => {
    event.preventDefault();
    this.setState({
      isSelected: !this.state.isSelected,
    });
  }

  render() {
    return (
      <div className="MembersListItem" data-selected={this.state.isSelected}>

        <div className="MembersListItem__selector" data-action="select" onClick={this.toggleSelection}>
          <div className="MembersListItem__selector__icon" data-action="select" />
        </div>
        <div className="MembersListItem__content">
          <div className="MembersListItem__cell">John Doe</div>
          <div className="MembersListItem__cell">Chicago</div>
        </div>
        <div className="MembersListItem__arrow" data-action="show-info">
          <div className="MembersListItem__arrow__icon" data-action="show-info" />
        </div>

      </div>
    );
  }

}

export default MembersListItem;
