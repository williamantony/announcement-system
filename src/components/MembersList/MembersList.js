import React, { Component } from 'react';
import './MembersList.css';

class MembersList extends Component {

  render() {
    return (
      <div className="MembersList">
        <div className="wrapper">

          <div className="MembersList__table">
            <div className="MembersList__table__thead">
              <div className="MembersList__table__thead__tr">

                <div className="MembersList__table__thead__tr__selector" />
                <div className="MembersList__table__tbody__tr__content">
                  <div className="MembersList__table__thead__tr__td">Name</div>
                  <div className="MembersList__table__thead__tr__td">City</div>
                </div>

              </div>
            </div>
            <div className="MembersList__table__tbody">
              <div className="MembersList__table__tbody__tr" data-selected="false">

                <div className="MembersList__table__tbody__tr__selector">
                  <div className="selector__icon" />
                </div>
                <div className="MembersList__table__tbody__tr__content">
                  <div className="MembersList__table__tbody__tr__td">John Doe</div>
                  <div className="MembersList__table__tbody__tr__td">Chicago</div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }

}

export default MembersList;
