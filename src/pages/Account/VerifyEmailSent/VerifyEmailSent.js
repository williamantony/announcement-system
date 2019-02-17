import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userSentEmailVerify } from '../../../redux/actions';
import './VerifyEmailSent.css';
import Notifications from '../../../components/Notifications/Notifications';

class VerifyEmailSent extends Component {
  constructor(props) {
    super(props);
    const { firstname, email, token } = props.user.registration;
    this.state = {
      firstname,
      email,
      token,
    };
  }

  componentDidMount() {
    const { firstname, email, token } = this.state;
    this.props.userSentEmailVerify(firstname, email, token);
  }

  printEmail = () => {
    const { email } = this.state;
    return email ? <span>of <span className="email">{ email }</span></span> : null;
  }

  render() {
    return (
      <div className="Account VerifyEmailSent">
        <div className="Account__title">Success</div>
        <div className="Account__text">
          Your account has been created successfuly.
        </div>
        <Notifications group="account_verify_email_sent" />
        <div className="Account__text">
          To continue, we have to confirm the ownership of the email address provided.
          Please check your email inbox { this.printEmail() } and follow the instructions to verify your email account.
          <br />
        </div>
        <div className="Account__action">
          <button className="Account__action__button">Resend Email</button>
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  userSentEmailVerify,
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmailSent);
