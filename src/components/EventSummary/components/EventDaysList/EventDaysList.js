import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';
import './EventDaysList.css';
import EventDay from '../EventDay/EventDay';

class EventDaysList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventId: props.eventId,
      dates: [],
    };
  }

  componentDidMount() {
    this.setState({
      dates: this.props.dates[this.state.eventId] || [],
    });
  }

  render() {
    return (
      <div className="EventDaysList">
        {
          this.state.dates.map((date, index) => {
            return (
              <EventDay
                key={uuid()}
                date={date}
                index={index}
              />
            );
          })
        }
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    dates: state.eventdates,
  };
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(EventDaysList);
