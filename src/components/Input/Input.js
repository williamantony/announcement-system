import React, { Component } from 'react';
import uuid from 'uuid/v4';
import './Input.css';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uuid(),
      type: props.type || '',
      name: props.name || '',
      label: props.label || '',
      placeholder: props.placeholder || '',
      value: props.value || '',
      otherProps: props.otherProps || {},
      isFocused: false,
      refs: {
        input: React.createRef(),
      },
    };
  }

  handleInput = (event) => {
    const { value } = event.target;
    this.setState({ value });
  }

  handleFocus = (event) => {
    this.setState({
      isFocused: true,
    });
  }

  handleBlur = (event) => {
    this.setState({
      isFocused: false,
    });
  }

  handleResize = (event) => {
    const { target } = event;
    target.style.height = `${target.scrollHeight - 25}px`;
    target.style.resize = 'vertical';
  }

  handleTabFocus = (event) => {
    this.state.refs.input.current.focus();
  }

  renderInput = () => {
    const {
      id,
      type,
      name,
      placeholder,
      value,
      otherProps,
      refs,
    } = this.state;

    const allowedTypes = [
      'text',
      'date',
      'time',
      'number',
      'tel',
      'email',
      'search',
    ];

    const commonProps = {
      ref: refs.input,
      id: id,
      className: `Input__input Input__input--${ type }`,
      type,
      name,
      value,
      placeholder,
      onChange: this.handleInput,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      ...otherProps,
    };
    
    if (type === 'textarea') {
      return (
        <textarea
          {...commonProps}
          onKeyPress={this.handleResize}
        />
      );
    }
    
    if (allowedTypes.includes(type)) {
      return (
        <input {...commonProps} />
      );
    }

    return null;
  }

  render() {
    const isInputFocused = (this.state.isFocused) ? 'Input__line__line--focused' : '';
    const lineClassName = `Input__line__line ${ isInputFocused }`;

    return (
      <div className="Input" tabIndex="0" onFocus={this.handleTabFocus}>
        <label className="Input__holder" htmlFor={this.state.id}>
          <div className="Input__label">{ this.state.label }</div>
          { this.renderInput() }
          <div className="Input__line">
            <div className={ lineClassName } />
          </div>
        </label>
      </div>
    );
  }

}

export default Input;
