import React, { Component } from 'react';
import './CreateEventForm.css';
import Input from '../Input/Input';
import Radio from '../Radio/Radio';
import Modal from '../Modal/Modal';

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

<Modal />

        <div className="EventCard">
          <div className="EventCard__title">
            Add an event
          </div>
          <Input
            type="textarea"
            name="title"
            label="Event Name"
            placeholder="eg. Fasting Meeting"
          />
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
          <Input
            type="text"
            name="session_name"
            label="Session Name"
            placeholder="Name of the Session (optional)"
          />
          <Input
            type="date"
            name="date"
            label="Date"
            placeholder="Date"
          />
          <Input
            type="time"
            name="time"
            label="Time"
            placeholder="Time"
          />
          <Input
            type="textarea"
            name="note"
            label="Notes"
            placeholder="Message to the attendees (optional)"
          />
          
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
            Are there multiple days ?
          </div>

          <Radio
            options={[
              {
                label: 'Single day',
                value: 'Yes',
              },
              {
                label: 'Multiple days in a row',
                value: 'consecutive',
              },
              {
                label: 'Multiple non-consecutive days',
                value: 'Nonconsecutive',
              }
            ]}
          />

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
            Date of the event
          </div>
          <Input
            type="date"
            name="date"
            label="Date"
            placeholder="Date"
          />

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
            First day of the event
          </div>
          <Input
            type="date"
            name="date"
            label="Date"
            placeholder="Date"
          />

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
            Last day of the event
          </div>
          <Input
            type="date"
            name="date"
            label="Date"
            placeholder="Date"
          />

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
            Event Dates
          </div>
          <Input
            type="date"
            name="date"
            label="Start Date"
            placeholder="Date"
          />
          <Input
            type="date"
            name="date"
            label="End Date"
            placeholder="Date"
          />

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
            Event Timing
          </div>
          <Input
            type="time"
            name="time"
            label="Start Time"
            placeholder="Time"
          />

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
