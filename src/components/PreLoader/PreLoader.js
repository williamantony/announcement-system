import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PreLoader.css';

class PreLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: props.preloader.isVisible || false,
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      isVisible: props.preloader.isVisible,
    };
  }

  render() {
    return (
      <div className="PreLoader" data-visible={this.state.isVisible} >
        <div className="PreLoader__bg" />
        <div className="PreLoader__block">
          <div className="PreLoader__circle"></div>
          <div className="PreLoader__text">... Processing ...</div>
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    preloader: state.preloader,
  };
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(PreLoader);
