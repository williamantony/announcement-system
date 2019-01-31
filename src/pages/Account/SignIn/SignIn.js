import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createNotification, userLogin } from '../../../redux/actions';
import '../Account.css';
import './SignIn.css';
import Notifications from '../../../components/Notifications/Notifications';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleInput = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    
    this.setState({
      [name]: value,
    });
  }

  validateInput = () => {
    const { username, password } = this.state;

    if (!new RegExp(/[a-z0-9_.-]{6,}/gi).test(username)) {
      this.props.createNotification('warning', 'Invalid username', 'account_login');
      return false;
    }
    else if (!new RegExp(/[a-z0-9!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{6,}/gi).test(password)) {
      this.props.createNotification('warning', 'Invalid password', 'account_login');
      return false;
    }

    return true;
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.validateInput()) {
      this.props.createNotification('info', 'Authenticating your credentials', 'account_login');
      this.props.userLogin(this.state.username, this.state.password);
    }
  }

  render() {
    return (
      <div className="Account SignIn">
        <div className="Account__title">Sign In</div>
        <Notifications group="account_login" />
        <form className="Account__form" onSubmit={this.handleSubmit}>
          <div className="Account__input__group">
            <input
              type="text"
              className="Account__input"
              name="username"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleInput}
            />
            <input
              type="password"
              className="Account__input"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleInput}
            />
          </div>
          <div className="Account__action">
            <input
              type="submit"
              className="Account__action__button"
              value="Log In"
            />
          </div>
        </form>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    notifications: state.notifications,
  };
}

const mapDispatchToProps = {
  createNotification,
  userLogin,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn));
