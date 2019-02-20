import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  showModal,
  hideModal,
  showPreloader,
  hidePreloder,
  createNotification,
  addPerson,
} from '../../../redux/actions';
import uuid from 'uuid/v4';
import history from '../../../history';
import Notifications from '../../Notifications/Notifications';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import { fromName } from '../../../helper';
import '../PeopleForm.css';

class PeopleSetName extends Component {
  constructor(props) {
    super(props);
    this.person_id = uuid();
    this.values = {
      fullname: (props.people.entries[this.person_id] || {}).fullname || '',
    };
    this.modalId = props.modalId;
    this.noticeId = 'people_set_name';
  }

  hideModal = () => {
    this.props.hideModal(this.modalId);
  }

  handleInput = (name, value) => {
    this.values[name] = value;
  }

  validateInput = () => {
    if (!new RegExp(/^[a-z\s'.,-]{4,}$/gi).test(this.values.fullname)) {
      this.props.createNotification('warning', 'Invalid input', this.noticeId, 3000);
      return false;
    }
    return true;
  }

  handleSubmit = () => {
    if (!this.validateInput()) {
      return false;
    }

    this.props.showPreloader();

    const name = fromName(this.values.fullname);
    this.props.addPerson(this.person_id, name, this.postSubmission);
  }

  postSubmission = ({ data = null, error = null }) => {
    this.props.hideModal(this.modalId);
    setTimeout(this.props.hidePreloder, 1000);

    if (!!data.person_id) {
      history.push(`/people/${ data.person_id }`);
    } else {
      this.props.createNotification('error', 'Error processing your request.', 'people_set_name');
    }
  }

  render() {
    return (
      <div className="PeopleForm">
        <div className="PeopleForm__notifications">
          <Notifications group={this.noticeId} />
        </div>
        <div className="PeopleForm__inputs">
          <Input
            type="text"
            label="Full Name"
            name="fullname"
            value={this.values.fullname}
            onChange={this.handleInput}
          />
        </div>
        <div className="PeopleForm__actions">
          <Button
            text="Cancel"
            onClick={this.hideModal}
          />
          <Button
            text="Continue"
            color="#fff"
            backgroundColor="#2196f3"
            onClick={this.handleSubmit}
          />
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    people: state.people,
  };
};

const mapDispatchToProps = {
  showModal,
  hideModal,
  showPreloader,
  hidePreloder,
  createNotification,
  addPerson,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PeopleSetName));
