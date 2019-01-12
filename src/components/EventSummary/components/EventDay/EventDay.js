import React, { Component } from 'react';
import './EventDay.css';

class EventDay extends Component {
  constructor(props) {
    super(props);

    const dateString = props.date.split('-');
    const year = dateString[0]; 
    const month = dateString[1] - 1;
    const day = dateString[2];

    this.state = {
      index: props.index,
      date: new Date(year, month, day),
    };
  }

  toDateString = () => {
    return new Date(this.state.date).toDateString();
  }
  
  render() {
    return (
      <div className="EventDay">
        <div className="EventDay__text">
          <div className="EventDay__text__label">
            DAY { this.props.index + 1 }
          </div>
          <div className="EventDay__text__date">
            { this.toDateString() }
          </div>
        </div>
        <div className="EventDay__delete-icon" />
      </div>
    );
  }

}

export default EventDay;
