import React, { Component } from 'react';
import { connect } from 'react-redux';
import { destroyNotification } from '../../redux/actions';

class NotificationItem extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      id: props.id,
      group: props.group,
      type: props.instance.type,
      message: props.instance.message,
      expiry: props.instance.expiry,
      isVisible: false,
    };
  }

  componentDidMount() {
    this._isMounted = true;
    this.showNotification();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  showNotification = () => {
    if (!this._isMounted) {
      return null;
    }

    setTimeout(() => {
      this.setState({
        isVisible: true,
      });
      if (this.state.expiry) {
        setTimeout(this.hideNotification, this.state.expiry);
      }
    }, 10);
  }

  hideNotification = () => {
    if (!this._isMounted) {
      return null;
    }

    this.setState({
      isVisible: false,
    });

    setTimeout(() => {
      this.props.destroyNotification(this.state.id, this.state.group);
    }, 500);
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
