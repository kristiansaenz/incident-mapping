import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
  
  class Map2 extends React.Component {
    state = {
      showIncidentWindow: false,
      incidentLocation: ''
  }


    render() {
      return (
        <div style={{ height: '100%', width: '100%' }}>     
            <Map
              google={this.props.google}
              zoom={11}
              initialCenter={{ lat: 47.444, lng: -122.176}}              
            >
            <Marker position={{ lat: 48.00, lng: -122.00}} />
            </Map>
          </div>
      );
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyDmDq3G0vf66qwSJ_lt0X9LtHeODiopzbU'
  })(Map2);