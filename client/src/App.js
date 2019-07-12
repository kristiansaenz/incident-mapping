import React from 'react';
import map from './map.svg';
import './App.scss';
import Map from './components/map';
import jsonData from './data/F01705150050.json';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      center: {
        lat: 59.95,
        lng: 30.33
      },
        address: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      address: event.target.value
    });
  }

  // submits, send it to google api and display on map
  handleSubmit(event) {
    console.log('An address was submitted: ' + this.state.address );
    event.preventDefault();

    //parse JSON file data into js object
    //if later, I create a JSON file upload button,
    //this will be modified
    let incident = {} = JSON.parse(JSON.stringify(jsonData));

    //get the data that can help us map parcel
    let address = incident.address.address_line1;
    var lat_data = incident.address.latitude;
    var lng_data = incident.address.longitude;

    console.log(address, incident);

    //geocode address to get new long and lat coordinates
    // this.geocode(address);

    // update center of map to lat,lng on json incident file
    // this.setState({
    //   center: {
    //     lat: 789,
    //     lng: 8979
    //   }
    // })
  }

  render() {
    return (
      <section class="hero is-medium is-dark is-bold">
      <div class="hero-body">
        <div class="container">
          <img src={map} class="App-logo" alt="logo" /><br/><br/>
          <h1 class="title">Welcome to Incident Mapper</h1>
          <h2 class="subtitle">Enrich 911 emergency incident data to provide better analytics for the fire department.</h2><br/>

          <form onSubmit={this.handleSubmit}>            
                <div class="field">
                    <label class="label">Input the address to find incident on map</label>
                    <div class="control">
                      <div class="columns">
                          <div class="column">
                                <input
                                class="input" 
                                type="text"
                                value={this.state.address} 
                                onChange={this.handleChange}
                                placeholder="incident address">
                                </input>
                          </div>
                          <div class="column">
                                <button class="button is-link" type="submit">Submit</button> 
                          </div>                       
                      </div>
                    </div>
                </div>
            </form><br/>
  
          <Map center={this.state.center} zoom={11} />
        </div>
      </div>
      </section>
    )};
  }
  

export default App;
