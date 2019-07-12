import React from 'react';

function MyParcel(props){

    return (
        <div class="tile is-ancestor">
            <div class="tile is-vertical is-parent">
                <div class="tile is-child box">
                    {props.text}
                </div>          
            </div>
        </div>
    );
}

export default MyParcel;
