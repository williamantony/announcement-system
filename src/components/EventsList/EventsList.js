import React, { Component } from 'react';
import uuid from 'uuid/v4';
import './EventsList.css';

class EventsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {
          id: 1,
          name: 'Bless Chicago Convention',
          note: '',
          dates: ['Jan 5'],
        },
        {
          id: 2,
          name: 'Fasting Meeting',
          note: '',
          dates: ['Jan 10'],
        },
      ],
    };
  }

  render() {
    return (
      <div className="EventsList">
        <div className="EventsList__list">
          {
            this.state.events.map(event => {
              return (
                <div key={uuid()} className="EventsList__item">
                  <div className="EventsList__item__day">
                    <div className="EventsList__item__date">
                      { event.dates[0] }
                    </div>
                    <div className="EventsList__item__day-name">
                      Friday
                    </div>
                  </div>
                  <div className="EventsList__item__name">{ event.name }</div>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }

}

export default EventsList;
