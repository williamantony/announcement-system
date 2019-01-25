import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createNotification, userRegisterEmail } from '../../../redux/actions';
import '../Account.css';
import './Registration.css';
import Notifications from '../../../components/Notifications/Notifications';

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
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
    const { firstname, lastname, email } = this.state;

    if (firstname.trim() === '') {
      this.props.createNotification('warning', 'Invalid First Name', 'account_registration');
      return false;
    }
    else if (lastname.trim() === '') {
      this.props.createNotification('warning', 'Invalid Last Name', 'account_registration');
      return false;
    }
    else if (!new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gi).test(email)) {
      this.props.createNotification('warning', 'Invalid Email Address', 'account_registration');
      return false;
    }

    return true;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      email,
      firstname,
      lastname,
    } = this.state;

    if (this.validateInput()) {
      this.props.createNotification('info', 'Signing Up', 'account_registration', 3000);
      this.props.userRegisterEmail(email, firstname, lastname, this.props.history);
    }
  }

  render() {
    return (
      <div className="Account Registration">
        <div className="Account__title">Create Account</div>
        <Notifications group="account_registration" />
        <form className="Account__form" onSubmit={this.handleSubmit}>
          <div className="Account__input__group">
            <input
              type="text"
              className="Account__input"
              name="firstname"
              placeholder="First Name"
              value={this.state.firstname}
              onChange={this.handleInput}
            />
            <input
              type="text"
              className="Account__input"
              name="lastname"
              placeholder="Last Name"
              value={this.state.lastname}
              onChange={this.handleInput}
            />
          </div>
          <div className="Account__input__group">
            <input
              type="email"
              className="Account__input"
              name="email"
              placeholder="Email Address"
              value={this.state.email}
              onChange={this.handleInput}
            />
          </div>
          <div className="Account__action">
            <input
              type="submit"
              className="Account__action__button"
              value="Register"
            />
          </div>
        </form>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  createNotification,
  userRegisterEmail,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Registration));
