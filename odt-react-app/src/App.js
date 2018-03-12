import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import PublishTrip from './components/PublishTrip';
import SignUp from './components/SignUp';
import Home from './components/Home';

import './App.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Switch>
                    <Route path="/" component={Home} exact={true}/>
                    <Route path="/publish"  component={PublishTrip}/>
                    <Route path="/sign-up"  component={SignUp}/>
                    {/*<Route   component={NotFoundPage}/>*/}
                </Switch>
            </div>

        </BrowserRouter>
    );
  }
}

export default App;
