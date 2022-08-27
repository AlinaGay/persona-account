import React, { Component } from 'react';
import '../styles/AutorizationForm.css';

type AuthorizationState = {
  login: string;
  password: string|number;
}

class AuthorizationForm extends Component<{}, AuthorizationState>  {
    state = {
      login: "email",
      password: "password"
    };

  render() {
    const { login } = this.state;
    const { password } = this.state;
    return (
      <form>
        <div className="autorization-form">
          <label htmlFor="title" className="title">Log in with your email account</label>
          <input
            type="text"
            id="login"
            value={login}
          />
          <input
            type="text"
            id="password"
            value={password}
          />
        </div>
        <button type="submit">Log in</button>
      </form>
    );
  }
}

export default AuthorizationForm;