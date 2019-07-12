import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MyParcel from '../components/myparcel';

class Map extends Component {

    render() {

        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyDmDq3G0vf66qwSJ_lt0X9LtHeODiopzbU" }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                >
                <MyParcel 
                    lat={this.props.center.lat} 
                    lng={this.props.center.lng}
                    text="Incident is Here"
                    />
                </GoogleMapReact>
            </div> 
        );
    }
}

export default Map;