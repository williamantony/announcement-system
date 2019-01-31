import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userSignOut } from '../../../redux/actions';
import './SignOut.css';
import Notifications from '../../../components/Notifications/Notifications';

class SignOut extends Component {
  componentDidMount() {
    this.props.userSignOut();
  }

  render() {
    return (
      <div className="SignOut">
        <Notifications group="account_signout" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  userSignOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignOut);
