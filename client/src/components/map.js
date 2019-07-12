import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Marker } from 'google-maps-react';
import MyParcel from '../components/myparcel';

class Map extends Component {

    onComponentDidMount(){

        fetch("/incidentData")
        .then(function(response) {
          return response.text();
        })
        .then(function(myJson) {
          console.log(JSON.stringify(myJson));
        });
    }

    render() {

        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyDmDq3G0vf66qwSJ_lt0X9LtHeODiopzbU" }}
                center={this.props.center}
                defaultZoom={this.props.zoom}
                >
                <MyParcel 
                    lat={this.props.center.lat} 
                    lng={this.props.center.lng}
                    text="Incident is Here"
                    />
                <Marker
                    position={{ lat: 37, lng: -74}} 
                    />
                </GoogleMapReact>
            </div> 
        );
    }
}

export default Map;