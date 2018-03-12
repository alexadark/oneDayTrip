import React, { Component } from 'react';

class SignUp extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="uk-container">
                <h2 className="uk-text-center">Sign Up</h2>
                <form  data-uk-grid>
                    <div className="uk-width-1-2@m">
                        <input type="text"
                               className="uk-input" placeholder="Name"/>
                    </div>
                    <div className="uk-width-1-2@m">
                        <input type="text"
                               className="uk-input" placeholder="Surname"/>
                    </div>
                    <div className="uk-width-1-2@m">
                        <input type="text"
                               className="uk-input" placeholder="Email"/>
                    </div>
                    <div className="uk-width-1-2@m">
                        <input type="text"
                               className="uk-input" placeholder="Picture"/>
                    </div>
                    <div className="uk-width-1-2@m">
                        <input type="text"
                               className="uk-input" placeholder="Username"/>
                    </div>
                    <div className="uk-width-1-2@m">
                        <input type="text"
                               className="uk-input" placeholder="Password"/>
                    </div>

                    <div>
                        <input type="text"
                               className="uk-button uk-button-primary" value="Submit"/>
                    </div>

                </form>
            </div>

        )
    }
}


export default SignUp;