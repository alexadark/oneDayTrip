import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      password:''
    };
  }

  render() {
    return <div className="uk-container">
        <h2 className="uk-text-center">LOGIN</h2>
        <form data-uk-grid>
          <div className="uk-width-1-2@m">
            <input type="text" className="uk-input " placeholder="username" />
          </div>
          <div className="uk-width-1-2@m">
            <input type="text" className="uk-input " placeholder="password" />
          </div>
          <div className="uk-width-1-6 ">
            <input type="submit" className="uk-button uk-button-primary" value="login" />
          </div>
        </form>
      </div>;
  }
}

export default Login;