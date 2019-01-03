import React, { Component } from 'react';
import './CreateEventForm.css';

class CreateEventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  handleInput = (event, name) => {
    const { value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="CreateEventForm">
        <div className="EventCard">
          <div className="EventCard__title">
            <input
              type="text"
              name="title"
              value={this.state.title}
              placeholder="Name of the Event"
              className="EventCard__title__input"
              onChange={(e) => this.handleInput(e, 'title')}
            />
          </div>
          
          <div className="EventCard__action">
            <div className="EventCard__action__button">
              <div className="text">Add Date & Time</div>
              <div className="icon" />
            </div>
          </div>

        </div>
      </div>
    );
  }

}

export default CreateEventForm;
