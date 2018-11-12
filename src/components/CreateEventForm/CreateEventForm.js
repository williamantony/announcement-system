import React, { Component } from 'react';
import './CreateEventForm.css';
import EventTitleInput from './components/EventTitleInput/EventTitleInput';

class CreateEventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  render() {
    return (
      <div className="CreateEventForm">
        <EventTitleInput />
      </div>
    );
  }

}

export default CreateEventForm;
