import React, {Component} from 'react'
import Search from './Search';
import TripList from './TripList'
import api from '../api'
import TripListItem from './TripListItem'


class Home extends Component{
    constructor() {
        super()

        this.state = {
            location:'',
            trips: []

        }
    }
    searchTrips = () =>{
        api.listTrips(this.state.location)
            .then((trips) => {
                this.setState({trips})

            })
    }

    keepLocation = location => this.setState({location})

    render(){
        return (
            <div>

                <div className="search">
                    <div className="hero uk-background-cover uk-background-no-repeat uk-light">
                        <div className="uk-container uk-padding-large">
                            <div className="hero-content uk-align-center">
                                <h2 className="hero-text uk-text-center">Explore the region</h2>
                            </div>
                            <form data-uk-grid
                                  onSubmit={e => {
                                      e.preventDefault()
                                      this.searchTrips()
                                  }
                                  }>
                                <div className="uk-width-1-4">
                                    <input type="text"
                                           className="uk-input"
                                           placeholder="Leaving from..."
                                           onChange={e => this.keepLocation(e.target.value)}
                                           value={this.state.location}
                                    />
                                </div>
                                <div className="uk-width-1-4">
                                    <input type="date"
                                           className="uk-input"
                                           placeholder="from date"/>
                                </div>
                                <div className="uk-width-1-4">
                                    <input type="date"
                                           className="uk-input"
                                           placeholder="to date"/>
                                </div>
                                <div className="uk-width-1-6">
                                    <input type="submit"
                                           className="uk-button uk-button-primary"
                                           value="Submit"/>
                                </div>


                            </form>

                        </div>
                    </div>
                </div>


                <div className="uk-container uk-padding">
                    <h2 className="uk-text-center">This week in your area</h2>

                    <div className="trip-list" >
                        <TripListItem/>
                        <TripListItem/>
                        <TripListItem/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;