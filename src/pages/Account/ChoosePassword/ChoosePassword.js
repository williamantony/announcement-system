import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNotification } from '../../../redux/actions';
import '../Account.css';
import './ChoosePassword.css';
import Notifications from '../../../components/Notifications/Notifications';

class ChoosePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      password2: '',
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
    const { password, password2 } = this.state;

    if (!new RegExp(/[a-z0-9!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{6,}/gi).test(password)) {
      this.props.createNotification('warning', 'Invalid password', 'account_choose_password');
      return false;
    }
    else if (password !== password2) {
      this.props.createNotification('warning', 'Passwords did not match', 'account_choose_password');
      return false;
    }

    return true;
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.validateInput()) {
      this.props.createNotification('info', 'Authenticating your credentials', 'account_choose_password');
      // Implement Create Password Action 
    }
  }

  render() {
    return (
      <div className="Account ChoosePassword">
        <div className="Account__title">Create Password</div>
        <Notifications group="account_choose_password" />
        <form className="Account__form" onSubmit={this.handleSubmit}>
          <div className="Account__input__group">
            <input
              type="password"
              className="Account__input"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleInput}
            />
            <input
              type="password"
              className="Account__input"
              name="password2"
              placeholder="Re-enter Password"
              value={this.state.password2}
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
  return state;
};

const mapDispatchToProps = {
  createNotification,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChoosePassword);
