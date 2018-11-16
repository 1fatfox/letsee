import React from 'react';
import { withRouter } from 'react-router-dom';

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
    let header_direct = <h2 className="modal-header">Sign In To Continue</h2>;
    let first_name_input;
    let submit_button = (
      <input
        className="session-submit"
        type="submit"
        value="Sign in"
      />
    );
    if (this.props.formType == 'signup') {
      header_direct = <h2 className="modal-header">Create Your Account</h2>;
      first_name_input = (
        <label>First name
          &nbsp;&nbsp;
          <input type="text"
            value={this.state.first_name}
            onChange={this.update('first_name')}
            className="login-input-name"
          />
        </label>
      );
      submit_button = (
        <input
          className="session-submit"
          type="submit"
          value="Register"
        />
      );
    }
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {header_direct}
          <br/>
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label>Email address
            &nbsp;&nbsp;
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input-email"
              />
            </label>
            <br/>
            &nbsp;&nbsp;
            {first_name_input}
            &nbsp;&nbsp;
            <br/>
            <br/>
            &nbsp;&nbsp;
            <label>Password
            &nbsp;&nbsp;
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input-password"
              />
            </label>
            <br/>
            <div className="user-submitibutton">
              {submit_button}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
