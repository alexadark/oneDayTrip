import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import UserPublishedTrips from './UserPublishedTrips'
import UpdateUser from './UpdateUser'
import UserBookedTrips from './UserBookedTrips'
import api from "../api";


class UserPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user:""
      };
  }

  componentDidMount() {
    api
      .getUsernameId(this.props.match.params.username)
      .then(userId => api.getUserFromId(userId))
        .then(user => this.setState({user}));
  }

  render() {
    return (
      <div className="uk-container">
        <h2 className="uk-text-center">Hello {this.props.match.params.username}</h2>
        <div className="user-buttons uk-flex">
         <UpdateUser user = {this.state.user}  />
          <button className="uk-button uk-button-primary uk-button-small  uk-margin-right">
            Delete Profile
          </button>
          <NavLink to="/user-profile">
            <button className="uk-button uk-button-primary uk-button-small uk-margin-right">
              see my reviews
            </button>
          </NavLink>
        </div>

        <div
          className="user-panels uk-margin-large-top uk-child-width-1-2@m"
          data-uk-grid
        >
          <UserPublishedTrips />
          <UserBookedTrips />
        </div>
      </div>
    );
  }
}


export default UserPanel;