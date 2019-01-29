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
      token: getCookie('token'),
      isVerified: null,
    };
    props.userVerifyToken(props.history);
  }
  
  static getDerivedStateFromProps(props, state) {
    return {
      isVerified: props.user.isVerified,
    };
  }
  
  render() {
    const { pathname } = this.props.location;

    const isPublicRoute = this.routes.public.includes(pathname);
    const isPrivateRoute = this.routes.private.includes(pathname);
    
    const hasUserToken = !!this.state.token;
    const isTokenInvalid = this.state.isVerified === false;
    
    let component = <Route {...this.props} />;

    if (isPublicRoute) {
      if (hasUserToken)
        component = <Redirect to="/dashboard" />;
    }
    else if (isPrivateRoute) {
      if (!hasUserToken || isTokenInvalid)
        component = <Redirect to="/login" />;
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
