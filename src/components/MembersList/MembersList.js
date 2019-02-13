import React, { Component } from 'react';
import uuid from 'uuid/v4';
import './MembersList.css';
import Table from '../Table/Table';

class MembersList extends Component {

  render() {
    const columns = [
      {
        name: 'Name',
        style: {},
        headStyle: {},
      },
      {
        name: 'City',
        style: {},
        headStyle: {},
      },
    ];

    const rows = [
      {
        'Name': 'John Doe',
        'City': 'Chicago',
      },
      {
        'Name': 'Jane Doe',
        'City': 'Washington',
      },
    ];

    return (
      <div className="MembersList">
        <Table columns={columns} rows={rows} />
      </div>
    );
  }

}

export default MembersList;
