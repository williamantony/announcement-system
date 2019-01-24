import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  } from '../../redux/actions';
import './Notifications.css';
import NotificationItem from './NotificationItem';

class Notifications extends Component {
  constructor(props) {
    super(props);
    const group = props.group || 'primary';
    this.state = {
      group,
      instances: props.notifications[group] || {},
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      instances: props.notifications[state.group] || {},
    };
  }

  render() {
    const instances = Object.keys(this.state.instances);
    return (
      <div className="Notifications" data-empty={instances.length === 0}>
        {
          instances.map((instanceId) => (
            <NotificationItem
              key={instanceId}
              id={instanceId}
              group={this.state.group}
              instance={this.state.instances[instanceId]}
            />
          ))
        }
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    notifications: state.notifications,
  };
};

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
