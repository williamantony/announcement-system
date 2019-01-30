import React, { Component } from 'react';
import { withRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { userVerifyToken } from '../../redux/actions';
import { getCookie } from '../../helper';

class RouteCheck extends Component {
  constructor(props) {
    super(props);
    this.routes = {
      public: [
        '/login',
        '/register',
      ],
      private: [
        '/dashboard',
        '/password',
      ],
    };
    this.state = {
      token: getCookie('token') || null,
      isVerified: null,
      isCheckDone: false,
    };
    props.userVerifyToken(props.history);
  }
  
  static getDerivedStateFromProps(props, state) {
    const { isVerified } = props.user;
    if (isVerified === state.isVerified) return null;
    return {
      isVerified,
      isCheckDone: true,
    };
  }
  
  render() {
    const { pathname } = this.props.location;

    const isPublicRoute = this.routes.public.includes(pathname);
    const isPrivateRoute = this.routes.private.includes(pathname);
    
    const hasUserToken = !!this.state.token;
    const isTokenValid = !!this.state.isVerified;
    
    let component = <Route {...this.props} />;

    if (isPublicRoute) {
      if (hasUserToken && isTokenValid)
        component = <Redirect to="/dashboard" />;
    }
    else if (isPrivateRoute) {
      if (!hasUserToken || !isTokenValid)
        component = <Redirect to="/login" />;
    }

    if (this.state.isVerified === null) {
      return null;
    }

    return component;
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  userVerifyToken,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RouteCheck));
