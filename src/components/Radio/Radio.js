import React, { Component } from 'react';
import uuid from 'uuid/v4';
import './Radio.css';

class Radio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || '',
      options: props.options || [],
    };
  }

  handleValueChange = (value) => {
    this.setState({ value });
  }

  render() {
    return (
      <div className="Radio">
        {
          this.state.options.map(item => {
            const selectedClass = (this.state.value === item.value) ? `RadioItem--selected` : ``;

            return (
              <div
                className={`RadioItem ${ selectedClass }`}
                onClick={(e) => this.handleValueChange(item.value)}
                key={uuid()}
              >
                <div className="RadioItem__button">
                  <div className="RadioItem__button__circle" />
                </div>
                <div className="RadioItem__label">
                  <div className="RadioItem__label__text">
                    { item.label }
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }

}

export default Radio;
