import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hideModal } from '../../../redux/actions';
import uuid from 'uuid/v4';
import './ModalInstance.css';

class ModalInstance extends Component {
  constructor(props) {
    super(props);
    const { instance } = props;
    this.state = {
      id: instance.id || uuid(),
      isVisible: instance.isVisible || false,
      title: instance.title || null,
      content: instance.content || null,
      align: instance.align || 'center',
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      isVisible: props.instance.isVisible,
    };
  }

  hideModal = (event) => {
    event.preventDefault();
    this.props.hideModal(this.state.id);
  }

  render() {
    return (
      <div
        className="ModalInstance"
        data-visible={this.state.isVisible}
        data-align={this.state.align}
      >
        <div className="ModalInstance__bg" onClick={this.hideModal} />
        <div className="ModalInstance__header">
          <div className="ModalInstance__header__title">
            { this.state.title }
          </div>
          <div className="ModalInstance__header__close" onClick={this.hideModal} >
            <div className="line" />
            <div className="line" />
          </div>
        </div>
        <div className="ModalInstance__content">
          { this.state.content }
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  hideModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalInstance);
