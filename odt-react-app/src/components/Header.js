import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>One Day Trips</h1>
        <NavLink className="uk-button uk-button-primary" to="/" activeClassName="is-active" exact={true}>Home </NavLink>
        <NavLink to="/publish" activeClassName="is-active">Publish</NavLink>
        <NavLink to="/sign-up" activeClassName="is-active">Sign Up</NavLink>
    </header>
);

export default Header;