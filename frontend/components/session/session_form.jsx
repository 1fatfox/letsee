import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', first_name:''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    let header_direct = <h2 className="modal-header">Sign in to continue</h2>;
    let first_name_input;

    let already_a_user = (
      <button
        className="already-a-user"
        onClick={() => this.props.closeModal()}
        >No account?  Register
      </button>
    );

    let submit_button = (
      <input
        className="session-submit-button"
        type="submit"
        value="Sign in"
      />
    );

    if (this.props.formType == 'signup') {
      header_direct = <h2 className="modal-header">Create your account</h2>;
      first_name_input = (
        <label>First name
          <input type="text"
            value={this.state.first_name}
            onChange={this.update('first_name')}
            className="login-input-name"
          />
        </label>
      );
      submit_button = (
        <input
          className="session-submit-button"
          type="submit"
          value="Register"
        />
      );
      already_a_user  = (
        <button className="already-a-user" onClick={() => this.props.closeModal()} >Have an account?  Sign in</button>
      );
    }
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {header_direct}
          {this.renderErrors()}
          <div className="login-form">
            <label>Email address
            &nbsp;&nbsp;
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input-email"
              />
            </label>
            {first_name_input}
            <label>Password
            &nbsp;&nbsp;
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input-password"
              />
            </label>
            <div className="user-submit-button">
              {submit_button}
            </div>
            <h2 className="modal-mid-border" ><span>OR</span></h2>
            <button className="modal-demo-login-button" onClick={() => demoSignUp()}>Demo</button>
            {already_a_user}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
