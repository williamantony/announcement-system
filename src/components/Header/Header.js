import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './Header.css';
import HeaderNavigation from './components/HeaderNavigation/HeaderNavigation';

class Header extends Component {

  render() {
    return (
      <div className="Header">
        <div className="Header__section Header__section--primary">
          <div className="wrapper">
            <div className="Header__logo" />
          </div>
        </div>
        <div className="Header__section Header__section--navigation">
          <div className="wrapper">
            <HeaderNavigation />
          </div>
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {

};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
