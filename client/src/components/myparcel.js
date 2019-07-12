import React from 'react';
import marker from '../map-localization.svg';

class MyParcel extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        }
    }

    //when parcel is clicked, it will open up a window in map with incident attributes
    //Still need to call weather API & Virginia Parcel API to display info in window 
    onParcelClick() {
        console.log('u clicked the lil parcel')
    }

    componentDidMount() {
        // fetch("/myparcel")
        // .then(function(response) {
        //   return response.text();
        // })
        // .then(function(myJson) {
        //   console.log(JSON.stringify(myJson));
        // });
    }

    onParcelClick(){
        console.log('u clicked the parcel')
    }


    render() {

        return(
            <div class="mark">
                <img src={marker} class="App-logo" alt="logo" onClick={this.onParcelClick}/><br/><br/>
            </div>
    )};
}

export default MyParcel;
