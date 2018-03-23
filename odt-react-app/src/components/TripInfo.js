import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
import api from '../api'
import Confirmation from './Confirmation'
import CommentForm from './CommentForm'


//TODO pass name of creator

//TODO replace icons by passengers image and link to public profile

//TODO add conditional component message : trip booked

//TODO make button rate and comment conditional



class TripInfo extends Component {
    constructor(props){
        super(props)

        this.state = {
            trip: '',
            creator: ''

        }
    }

    componentDidMount(){
        api.getTripFromId(this.props.match.params.tripId)
            .then((res) => this.setState({trip: res.data}))
            .then(trip=>  api.getUserFromId(this.state.trip.creator)
                .then((res) => this.setState({creator: res.data}))
            )


    }

    book = ()=> {
        api.joinTrip(this.state.trip._id, this.props.user.id)

    }

    render(){
        const trip = this.state.trip
        // const passengers = trop.passengers


        const date = trip !==''? trip.departureDate.slice(0,10) : ''
        const passengers = trip !== ''? trip.passengers: ''
        const passengersLength = trip !==''? trip.passengers.length : ''
        const seats = trip !==''? trip.seats - passengersLength : ''
        return (

            <div className="uk-container">
               <div className="basic-info-data uk-h4 uk-margin-large-bottom">
                   From {trip.from}  to {trip.to} <br/>
                   Distance: {trip.distance}Km, Trip time: {trip.tripTime} hours <br/>
                   {date}
               </div>
                <div className="trip-panels" data-uk-grid>
                    <div className="uk-width-2-3@m">
                        <div className="uk-card uk-card-default uk-card-body">
                            <span data-uk-icon="icon: user; ratio: 2"></span>
                            {this.state.creator.name} {this.state.creator.surname}<br/>
                            meeting point: {trip.meetingPoint} <br/>

                            <p>{trip.description}</p>
                            {/*{passengers.some(passenger => passenger === this.props.user.id) ? '<button' +*/}
                                {/*' className="uk-button' +*/}
                                {/*' uk-button-primary uk-button-small">Rate and comment</button>' : ''}*/}
                                <CommentForm user={this.props.user} trip={this.state.trip}/>



                        </div>
                    </div>
                    <div className="uk-width-1-3@m">
                        <div className="uk-card uk-card-default uk-card-body">Price: {trip.price} <br/>
                            {passengersLength} Passengers on this trip
                            <div className="passengers uk-flex"
                                 >
                                <span data-uk-icon="icon: user; ratio: 2"></span>
                                <span data-uk-icon="icon: user; ratio: 2"></span>
                                <span data-uk-icon="icon: user; ratio: 2"></span>
                                <span data-uk-icon="icon: user; ratio: 2"></span>
                            </div>
                            {seats} seats available
                            <div className="book-button uk-flex uk-flex-center">
                                <button className="uk-button uk-button-primary"
                                onClick={this.book()}>
                                    Book!
                                </button>

                            </div>
                            {/*<Confirmation message={`Your trip to ${this.state.trip.to} is booked`} />*/}
                        </div>

                    </div>

                </div>

            </div>

        )
    }
}


export default withRouter(TripInfo);