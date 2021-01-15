import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      login: '',
      password: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { login, password } = this.state;
    return (
      <section className="login-form">
        <h1>Login</h1>
        <form>
          <label>
            Login
            <input
              type="text"
              value={login}
              onChange={this.handleChange}
              name="login"
              id="login"
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={this.handleChange}
              name="password"
              id="password"
            />
          </label>
        </form>
      </section>
    );
  }
}

export default LoginForm;