import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import api from "../api";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      user:"",
    };
  }

  login = ()=> {
    const {username, password}= this.state
    api.login(username, password)
   .then(user => {
     this.setState({ user, username: "", password: "" });
     this.props.history.push(`user-panel/${this.state.user.username}`);
   })
  }

  keepUsername = username => this.setState({ username });
  keepPassword = password => this.setState({ password });

  render() {
    return <div className="uk-display-inline">
       
        <button className="uk-button uk-button-small uk-button-primary uk-margin-small-right" data-uk-toggle="target: #login">
          Login
        </button>
        <div id="login" data-uk-modal>
          <div className="uk-modal-dialog uk-modal-body">
            <button class="uk-modal-close-default" type="button" uk-close />
            <h2 class="uk-modal-title">Login</h2>
            <form data-uk-grid onSubmit={e => {
                e.preventDefault();
                this.login();
              }}>
              <div className="uk-width-1-2@m">
                <input type="text" className="uk-input " placeholder="username" onChange={e => this.keepUsername(e.target.value)} value={this.state.username} />
              </div>
              <div className="uk-width-1-2@m">
                <input type="text" className="uk-input " placeholder="password" onChange={e => this.keepPassword(e.target.value)} value={this.state.password} />
              </div>
              <div className="uk-width-1-1 ">
                <input type="submit" className="uk-button uk-button-primary" value="login" />
              </div>
            </form>
          </div>
        </div>
      </div>;
  }
}

export default withRouter(Login);