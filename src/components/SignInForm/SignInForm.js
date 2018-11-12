import React, { Component } from 'react';
import './SignInForm.css';

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleInput = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="SignInForm">
        <div className="SignInForm__title">Sign In</div>
        <form className="SignInForm__form" onSubmit={this.handleSubmit}>
          <input
            type="email"
            className="SignInForm__input"
            name="email"
            placeholder="Email Address"
            value={this.state.email}
            onChange={this.handleInput}
          />
          <input
            type="password"
            className="SignInForm__input"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleInput}
          />
          <div className="SignInForm__action">
            <input
              type="submit"
              className="SignInForm__action__button"
              value="Log In"
            />
          </div>
        </form>
      </div>
    );
  }

}

export default SignInForm;
