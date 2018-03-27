import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import api from '../api'
import moment from 'moment'

class TripListItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            creator: ''
        }

    }

    componentDidMount(){
        api.getUserFromId(this.props.trip.creator)
            .then((res) => this.setState({creator: res.data}))

    }


    render(){
        const trip = this.props.trip
        const passengers = this.props.trip.passengers.length
        return (
            <div className="trip-list-item uk-card uk-card-default uk-card-body uk-margin-bottom" >
                <div className="uk-flex uk-flex-between">
                    <div className="icon-name uk-width-1-6@m">
                        <NavLink to={`/user-profile/${this.state.creator._id}`}>
                        <span data-uk-icon="icon: user; ratio: 2"></span>
                        {this.state.creator.name} {this.state.creator.surname}
                        </NavLink>
                    </div>
                    <div className="date-place ">
                       <p>{moment(trip.departureDate).format('MMMM DD,  YYYY')}</p>
                        <p>From {trip.from} - {trip.to}</p>
                    </div>
                    <div className="date-place ">
                        <p>Price:{trip.price}E</p>
                        <p>Available seats: {trip.seats - passengers}  </p>
                    </div>
                    <div className="">
                    <NavLink className="uk-button uk-button-primary " to={`/trip-info/${trip._id}`}>
                        View details and book
                    </NavLink>
                    </div>


                </div>

            </div>

        )
    }
}

export default TripListItem;