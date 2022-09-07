import React, { Component } from 'react';
import '../styles/AutorizationForm.css';
import IUser from '../actions/action.types'

interface IProps {
}

class AuthorizationForm extends Component<IProps, IUser>  {
  constructor(props:IProps) {
    super(props);

    this.state = {
      email: "email",
      password: "password"
    };

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event: { target: { id: string; value: string; }; }) {
    this.setState({[event.target.id]: event.target.value});
  }

  // handleSubmit (event) {
  //   event.preventDefault();
  //   const {title} = this.state;
  //   this.props.add
  // }
    

  render() {
    const { email } = this.state;
    const { password } = this.state;
    return (
      <form>
        <div className="autorization-form">
          <label htmlFor="title" className="title">Log in with your email account</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={this.handleChange}
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