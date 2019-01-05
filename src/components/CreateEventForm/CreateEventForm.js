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
            <div className="EventCard__title__label">Create Event</div>
            <textarea
              type="text"
              name="title"
              value={this.state.title}
              placeholder="Name of the Event"
              className="EventCard__title__input"
              onChange={(e) => this.handleInput(e, 'title')}
            />
          </div>
          <div className="EventCard__action">
            <div className="EventCard__action__button EventCard__action__button--clear">
              <div className="text">Clear</div>
              <div className="icon" />
            </div>
            <div className="EventCard__action__button EventCard__action__button--save">
              <div className="text">Continue</div>
              <div className="icon" />
            </div>
          </div>
        </div>

        <div className="EventCard">
          <div className="EventCard__title">
            <div className="EventCard__title__label">Choose Type</div>
            <div>
              <input type="radio" />
              One Day
            </div>
            <div>
              <input type="radio" />
              Multiple days in a row
            </div>
            <div>
              <input type="radio" />
              Multiple days, but NOT in a row
            </div>

            <hr/>

            <div>
              <input type="radio" />
              Single Session
            </div>
            <div>
              <input type="radio" />
              Multiple Sessions
            </div>
            <div>
              <input type="radio" />
              Custom
            </div>
          </div>
          <div className="EventCard__action">
            <div className="EventCard__action__button EventCard__action__button--clear">
              <div className="text">Clear</div>
              <div className="icon" />
            </div>
            <div className="EventCard__action__button EventCard__action__button--save">
              <div className="text">Continue</div>
              <div className="icon" />
            </div>
          </div>
        </div>

        <div className="EventCard">
          <div className="EventCard__title">
            <div className="EventCard__title__label">Session Name</div>
            <textarea
              type="text"
              name="title"
              value={this.state.title}
              placeholder="Name of the Session (optional)"
              className="EventCard__title__input"
              onChange={(e) => this.handleInput(e, 'title')}
            />
          </div>

          <div className="EventCard__title">
            <div className="EventCard__title__label">Date</div>
            <input
              type="date"
              name="title"
              value={this.state.title}
              placeholder="Name of the Session (optional)"
              className="EventCard__title__input"
              onChange={(e) => this.handleInput(e, 'title')}
            />
          </div>

          <div className="EventCard__title">
            <div className="EventCard__title__label">Time</div>
            <input
              type="time"
              name="title"
              value={this.state.title}
              placeholder="Name of the Session (optional)"
              className="EventCard__title__input"
              onChange={(e) => this.handleInput(e, 'title')}
            />
          </div>
          
          <div className="EventCard__title">
            <div className="EventCard__title__label">Note</div>
            <textarea
              type="text"
              name="title"
              value={this.state.title}
              placeholder="Message to the attendees (optional)"
              className="EventCard__title__input"
              onChange={(e) => this.handleInput(e, 'title')}
            />
          </div>
          
          <div className="EventCard__action">
            <div className="EventCard__action__button EventCard__action__button--clear">
              <div className="text">Clear</div>
              <div className="icon" />
            </div>
            <div className="EventCard__action__button EventCard__action__button--save">
              <div className="text">Continue</div>
              <div className="icon" />
            </div>
          </div>
        </div>

      </div>
    );
  }

}

export default CreateEventForm;
