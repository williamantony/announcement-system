import React, { Component } from 'react';
import './CreateEvent.css';
import CreateEventForm from '../../../components/CreateEventForm/CreateEventForm';

class CreateEvent extends Component {
  
  render() {
    return (
      <div className="CreateEvent">
        <CreateEventForm />
      </div>
    );
  }

}

export default CreateEvent;
