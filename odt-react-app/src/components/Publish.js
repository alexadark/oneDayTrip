import React, { Component } from 'react';
import api from '../api'

class Publish extends Component {
    constructor(props){
        super(props)
        this.state = {
            creatorId: '',
            from: '',
            to: '',
            date: '',
            meetingPoint: '',
            departureTime: '',
            returnTime: '',
            tripTime: '',
            price: '',
            distance: '',
            seats:'',
            description:''
        }
    }

    componentDidMount(){
        api.getUsernameId(this.props.match.params.username)
            .then((creatorId) => this.setState({creatorId}))

    }

    render(){
        return (
            <div className="uk-container">
                <h2 className="uk-text-center">Publish your Trip for user {this.props.match.params.username}</h2>
                <form  data-uk-grid>
                    <div className="uk-width-1-3@m">
                        <input type="text"
                               className="uk-input" placeholder="From"/>
                    </div>
                    <div className="uk-width-1-3@m">
                        <input type="text"
                               className="uk-input" placeholder="To"/>
                    </div>
                    <div className="uk-width-1-3@m">
                        <input type="text"
                               className="uk-input" placeholder="Date"/>
                    </div>
                    <div className="uk-width-1-3@m">
                        <input type="text"
                               className="uk-input" placeholder="Departure time"/>
                    </div>
                    <div className="uk-width-1-3@m">
                        <input type="text"
                               className="uk-input" placeholder="Return Time"/>
                    </div>
                    <div className="uk-width-1-3@m">
                        <input type="text"
                               className="uk-input" placeholder="Distance"/>
                    </div>
                    <div className="uk-width-1-3@m">
                        <input type="text"
                               className="uk-input" placeholder="Trip time"/>
                    </div>
                    <div className="uk-width-1-3@m">
                        <input type="text"
                               className="uk-input" placeholder="Price"/>
                    </div>
                    <div className="uk-width-1-3@m">
                        <input type="text"
                               className="uk-input" placeholder="Available seats"/>
                    </div>
                    <div className="uk-width-1-1">
                        <textarea rows="5"
                               className="uk-textarea" placeholder="Description"/>
                    </div>
                    <div>
                        <input type="submit"
                               className="uk-button uk-button-primary" value="Publish Trip"/>
                    </div>

                </form>
            </div>

        )
    }
}


export default Publish;