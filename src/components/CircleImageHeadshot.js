// this is the component for the cards in the carousel items 
import React from 'react';
import Headshot from '../assets/images/Headshot.jpg';
import Image from 'react-bootstrap/Image'

function CircleImageHeadshot(props){
    return(
        <Image src={Headshot} roundedCircle />
        );
}

export default CircleImageHeadshot;