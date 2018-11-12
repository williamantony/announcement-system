import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  renderInput = () => {
    const allowedTypes = [
      'text',
      'number',
      'tel',
      'email',
      'search',
    ];
    
    if (allowedTypes.includes(this.props.type)) {
      return (
        <input
          type={this.props.type}
          className="Input__input"
          placeholder={this.props.placeholder}
        />
      );
    }

    return null;
  }

  render() {
    return (
      <div className="Input">
        { this.renderInput() }
      </div>
    );
  }

}

export default Input;
