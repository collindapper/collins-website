// signupWidget.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { safeCredentials, handleErrors } from '@utils/fetchHelper';

class SignupWidget extends React.Component {
  state = {
    email: '',
    password: '',
    username: '',
    error: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  signup = (e) => {
    if (e) { e.preventDefault(); }
    this.setState({
      error: '',
    });

    fetch('/api/users', safeCredentials({
      method: 'POST',
      body: JSON.stringify({
        user: {
          email: this.state.email,
          password: this.state.password,
          username: this.state.username,
        }
      })
    }))
      .then(handleErrors)
      .then(data => {
        console.log('data')
        this.login();
      })
      .catch(error => {
        this.setState({
          error: 'Could not sign up.',
        })
        console.log('catch error');
      })
  }

  login = (e) => {
    if (e) { e.preventDefault(); }
    this.setState({
      error: '',
    });

    fetch('/api/sessions', safeCredentials({
      method: 'POST',
      body: JSON.stringify({
        user: {
          email: this.state.email,
          password: this.state.password,
        }
      })
    }))
      .then(handleErrors)
      .then(data => {
        if (data.success) {
          const params = new URLSearchParams(window.location.search);
          const redirect_url = params.get('redirect_url') || '/';
          window.location = redirect_url;
        }
      })
      .catch(error => {
        this.setState({
          error: 'Could not log in.',
        })
      })
  }


  render () {
    const { email, password, username, error } = this.state;
    return (
      <React.Fragment>
        <form onSubmit={this.signup}>
          <input name="username" type="text" className="form-control form-control-lg mb-3 placeholderFont" placeholder="Username" value={username} onChange={this.handleChange} required />
          <input name="email" type="text" className="form-control form-control-lg mb-3 placeholderFont" placeholder="Email" value={email} onChange={this.handleChange} required />
          <input name="password" type="password" className="form-control form-control-lg mb-3 placeholderFont" placeholder="Password" value={password} onChange={this.handleChange} required />
          <button type="submit" className="btn btn-primary btn-block w-100 placeholderFont">Sign up</button>
        </form>
        <hr/>
        <p className="mb-0 text-white">Already have an account? <a className="text-primary" onClick={this.props.toggle}>Log in</a></p>
      </React.Fragment>
    )
  }
}

export default SignupWidget