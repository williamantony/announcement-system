import React, { Component } from 'react';
import { connect } from 'react-redux';
import { destroyNotification } from '../../redux/actions';

class NotificationItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      type: props.instance.type,
      message: props.instance.message,
      isVisible: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.showNotification();
      setTimeout(this.hideNotification, 3000);
    }, 10);
  }

  showNotification = () => {
    this.setState({
      isVisible: true,
    });
  }

  hideNotification = () => {
    this.setState({
      isVisible: false,
    });
  }

  render() {
    return (
      <div
        className="NotificationItem"
        data-visible={this.state.isVisible}
        data-type={this.state.type}
      >
        <div className="NotificationItem__content">
          <div className="NotificationItem__content__block">
            <div className="NotificationItem__icon" />
            <div className="NotificationItem__text">
              { this.state.message }
            </div>
            <div className="NotificationItem__close" onClick={this.hideNotification}>
              <div className="icon">
                <div className="line" />
                <div className="line" />
              </div>
            </div>
          </div>
        </div>
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
  destroyNotification,
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationItem);
