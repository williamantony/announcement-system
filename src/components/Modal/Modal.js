import React from 'react';
import { connect } from 'react-redux';
import ModalInstance from './ModalInstance/ModalInstance';
import './Modal.css';

const Modal = (props) => {
  const modals = Object.keys(props.instances);
  return (
    <div className="Modal" data-visible={ modals.length > 0 }>
      {
        modals.map((modalId) => (
          <ModalInstance
            key={modalId}
            instance={props.instances[modalId]}
          />
        ))
      }
    </div>
  );
};

const mapStateToProps = state => {
  return state.modal;
};

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
