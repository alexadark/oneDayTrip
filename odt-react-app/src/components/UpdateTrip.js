import React, {Component} from 'react';
import api from '../api'
import { withRouter } from "react-router-dom"

class UpdateTrip extends Component {
    constructor(props) {
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
            seats: '',
            description: '',
            password: ''
        }
    }

    componentDidMount() {
        api.getUsernameId(this.props.match.params.username)
            .then((creatorId) => this.setState({creatorId}))

    }

    publish() {
        const {creatorId, from, to, date, meetingPoint, departureTime, returnTime, tripTime, price, distance, seats, description, password} = this.state

        api.updateTrip(creatorId, this.props.trip._id, from, to, date, meetingPoint, departureTime, returnTime, tripTime, price, distance, seats, description, password)

            .then(() => this.setState({
                from: '',
                to: '',
                date: '',
                departureTime: '',
                returnTime: '',
                tripTime: '',
                price: '',
                distance: '',
                seats: '',
                meetingPoint: '',
                description: ''
            }))


    }

    keepFrom = from => this.setState({from})
    keepTo = to => this.setState({to})
    keepDate = date => this.setState({date})
    keepMeeting = meetingPoint => this.setState({meetingPoint})
    keepDeparture = departureTime => this.setState({departureTime})
    keepReturn = returnTime => this.setState({returnTime})
    keepTripTime = tripTime => this.setState({tripTime})
    keepPrice = price => this.setState({price})
    keepDistance = distance => this.setState({distance})
    keepSeats = seats => this.setState({seats})
    keepDescription = description => this.setState({description})
    keepPassword = password => this.setState({password})


    render() {
        return (
            <div className="uk-display-inline">
                <button className="uk-button uk-button-small uk-button-primary uk-margin-small-bottom"
                        data-uk-toggle="target: #updateTrip">
                    Update Trip
                </button>


                <div id="updateTrip"
                     data-uk-modal>
                    <div className="uk-modal-dialog uk-modal-body uk-width-xxlarge">
                        <button className="uk-modal-close-default"
                                type="button"
                                uk-close/>
                        <h2 className="uk-text-center">Update Trip</h2>
                        <form data-uk-grid
                              onSubmit={e => {
                                  e.preventDefault();
                                  this.publish();
                              }}>
                            <div className="uk-width-1-3@m">
                                <input type="text"
                                       className="uk-input"
                                       placeholder="From"
                                       required="true"
                                       onChange={e => this.keepFrom(e.target.value.toLowerCase())}
                                       value={this.state.from}/>
                            </div>
                            <div className="uk-width-1-3@m">
                                <input type="text"
                                       className="uk-input"
                                       placeholder="To"
                                       required="true"
                                       onChange={e => this.keepTo(e.target.value)}
                                       value={this.state.to}/>
                            </div>
                            <div className="uk-width-1-3@m">
                                <input type="date"
                                       className="uk-input"
                                       placeholder="Date"
                                       required="true"
                                       onChange={e => this.keepDate(e.target.value)}
                                       value={this.state.date}/>
                            </div>
                            <div className="uk-width-1-3@m">
                                <input type="text"
                                       className="uk-input"
                                       placeholder="Departure time"
                                       required="true"
                                       onChange={e => this.keepDeparture(e.target.value)}
                                       value={this.state.departureTime}/>
                            </div>
                            <div className="uk-width-1-3@m">
                                <input type="text"
                                       className="uk-input"
                                       placeholder="Return Time"
                                       required="true"
                                       onChange={e => this.keepReturn(e.target.value)}
                                       value={this.state.returnTime}/>
                            </div>
                            <div className="uk-width-1-3@m">
                                <input type="text"
                                       className="uk-input"
                                       placeholder="Distance"
                                       required="true"
                                       onChange={e => this.keepDistance(e.target.value)}
                                       value={this.state.distance}/>
                            </div>
                            <div className="uk-width-1-3@m">
                                <input type="text"
                                       className="uk-input"
                                       placeholder="Trip time"
                                       required="true"
                                       onChange={e => this.keepTripTime(e.target.value)}
                                       value={this.state.tripTime}/>
                            </div>
                            <div className="uk-width-1-3@m">
                                <input type="text"
                                       className="uk-input"
                                       placeholder="Price"
                                       required="true"
                                       onChange={e => this.keepPrice(e.target.value)}
                                       value={this.state.price}/>
                            </div>
                            <div className="uk-width-1-3@m">
                                <input type="text"
                                       className="uk-input"
                                       placeholder="Available seats"
                                       required="true"
                                       onChange={e => this.keepSeats(e.target.value)}
                                       value={this.state.seats}/>
                            </div>
                            <div className="uk-width-1-1@m">
                                <input type="text"
                                       className="uk-input"
                                       placeholder="Meeting Point"
                                       required="true"
                                       onChange={e => this.keepMeeting(e.target.value)}
                                       value={this.state.meetingPoint}/>
                            </div>
                            <div className="uk-width-1-1">
                        <textarea rows="5"
                                  className="uk-textarea"
                                  placeholder="Description"
                                  required="true"
                                  onChange={e => this.keepDescription(e.target.value)}
                                  value={this.state.description}/>
                            </div>
                            <div className="uk-width-1-1">
                        <input type="text"
                                  className="uk-input"
                                  placeholder="Password"
                                  required="true"
                                  onChange={e => this.keepPassword(e.target.value)}
                                  value={this.state.password}/>
                            </div>
                            <div>
                                <input type="submit"
                                       className="uk-button uk-button-primary"
                                       value="Update Trip"/>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        )
    }
}


export default withRouter(UpdateTrip);