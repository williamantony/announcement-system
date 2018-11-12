import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    props.children.forEach(child => {
      console.log(child.props);
    });

  }

  handleSubmit = () => {
    console.log('Form');
  }
  
  render() {
    return (
      <form className="Form" onSubmit={this.handleSubmit}>
        { this.props.children }
      </form>
    );
  }
}

export default Form;
