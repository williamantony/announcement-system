import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { userVerifyToken } from '../../redux/actions';
import { getCookie } from '../../helper';
import routes from './routes';

const withRouteCheck = (Component) => {
  class RouteCheck extends React.Component {
    constructor(props) {
      super(props);
      this.routes = routes;
      this.state = {
        token: getCookie('token') || null,
        isVerified: null,
      };
      props.userVerifyToken();
    }

    static getDerivedStateFromProps(props, state) {
      const { isVerified } = props.user;
      if (isVerified === state.isVerified) return null;
      return { isVerified };
    }

    render() {
      const { token, isVerified } = this.state;
      const pathname = this.props.match.path;

      if (isVerified === null) return null;  

      const isPublicRoute = this.routes.public.includes(pathname);
      const isPrivateRoute = this.routes.private.includes(pathname);
      
      const hasUserToken = !!token;
      const isTokenValid = !!isVerified;
      
      let component = <Component />;

      if (isPublicRoute) {
        if (hasUserToken && isTokenValid)
          component = <Redirect to="/dashboard" />;
      }
      else if (isPrivateRoute) {
        if (!hasUserToken || !isTokenValid)
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

  return withRouter(connect(mapStateToProps, mapDispatchToProps)(RouteCheck));
};

export default withRouteCheck;
