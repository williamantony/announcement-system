import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import './HeaderNavigation.css';

class HeaderNavigation extends Component {
  constructor(props) {
    super(props);
    this.links = [
      {
        route: '/members',
        innerText: 'Members',
        icon: 'people',
      },
      {
        route: '/Events',
        innerText: 'Events',
        icon: 'calendar',
      },
      {
        route: '/addresses',
        innerText: 'Addresses',
        icon: 'location',
      },
    ];
  }

  render() {
    return (
      <nav className="HeaderNavigation">
        <ul className="HeaderNavigation__list">
          {
            this.links.map(link => {
              return (
                <li className="HeaderNavigation__list__item">
                  <NavLink to={ link.route } className="HeaderNavigation__link">
                    <div className="holder">
                      <div className="HeaderNavigation__icon" data-icon={ link.icon || '' } />
                      <div className="HeaderNavigation__text">{ link.innerText }</div>
                    </div>
                  </NavLink>
                </li>
              );
            })
          }
        </ul>
      </nav>
    );
  }

}

export default withRouter(HeaderNavigation);
