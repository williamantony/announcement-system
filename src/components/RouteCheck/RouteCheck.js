import React, { Component } from 'react';
import { withRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { userVerifyToken } from '../../../redux/actions';
import { getCookie } from '../../../helper';

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
    };
  }

  render() {
    const { pathname } = this.props.location;
    const isAuthenticated = !!this.state.token;
    const isPublicRoute = this.routes.public.includes(pathname);
    const isPrivateRoute = this.routes.private.includes(pathname);

    if (isPublicRoute) {
      if (isAuthenticated)
        return <Redirect to="/dashboard" />;
    }
    else if (isPrivateRoute) {
      if (!isAuthenticated)
        return <Redirect to="/login" />;
    }

    return <Route {...this.props} />;
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
