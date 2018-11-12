import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createEvent } from '../../../../redux/actions';
import uuid from 'uuid/v4';
import './EventTitleInput.css';

class EventTitleInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventId: uuid(),
      title: '',
      events: props.events,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (state.events.length !== props.events.length) {
      return {
        events: props.events,
      };
    }
    return null;
  }

  handleInput = (event) => {
    event.preventDefault();
    this.setState({
      title: event.target.value,
    });
  }

  handleClick = () => {
    console.log(this.props.events);
    this.props.createEvent(this.state.eventId, this.state.title, this.props.history)
      .then(() => {
        this.props.history.push('/login');
      });

  }
 
  render() {
    console.log('render');
    return (
      <div className="EventTitleInput">
        <input type="text" placeholder="Event Title" value={this.state.title} onChange={this.handleInput} />
        <input type="button" value="Create Event" onClick={this.handleClick} />
      </div>
    );
  }

}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  createEvent,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventTitleInput));
