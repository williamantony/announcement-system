import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addEventDate } from '../../../../redux/actions';
import './EventDateInput.css';

class EventDateInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventId: props.eventId,
      value: '2018-10-01',
    };
  }

  handleInput = (event) => {
    event.preventDefault();
    const { value } = event.target;
    // this.setState({
    //   value,
    // });
    this.props.addEventDate(value, this.state.eventId);
  }

  render() {
    return (
      <div className="EventDateInput">
        <input
          type="date"
          className="EventDateInput__input"
          value={this.state.value}
          onChange={this.handleInput}
        />
      </div>
    );
  }

}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  addEventDate,
};

export default connect(mapStateToProps, mapDispatchToProps)(EventDateInput);
