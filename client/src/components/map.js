import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MyParcel from '../components/myparcel';

class Map extends Component {

    onParcelClick(){
        //when parcel is clicked, it will open up map side window with incident attributes
        //Still need to call weather API & Virginia Parcel API
        console.log('you clicked on incident')

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
                    onClick={this.onParcelClick()}
                    />
                </GoogleMapReact>
            </div> 
        );
    }
}

export default Map;