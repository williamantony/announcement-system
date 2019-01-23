import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initNotification, destroyNotification } from '../../redux/actions';
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
    this.props.initNotification(group);
  }

  static getDerivedStateFromProps(props, state) {
    return {
      instances: props.notifications[state.group] || {},
    };
  }
  
  render() {
    return (
      <div className="Notifications">
        {
          Object.keys(this.state.instances).map((instanceId) => (
            <NotificationItem
              key={instanceId}
              id={instanceId}
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
  initNotification,
  destroyNotification,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
