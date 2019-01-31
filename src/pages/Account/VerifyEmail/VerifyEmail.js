import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { userVerifyToken } from '../../../redux/actions';
import './VerifyEmail.css';
import Notifications from '../../../components/Notifications/Notifications';
import { setCookie } from '../../../helper';

class VerifyEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: props.match.params.token,
    };
  }

  async componentDidMount() {
    await setCookie('token', this.state.token, 1);
    this.props.userVerifyToken();
  }

  render() {
    return (
      <div className="VerifyEmail">
        <Notifications group="account_verify_email" />
      </div>
    );
  }

}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  userVerifyToken,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VerifyEmail));
