import React from 'react';
import Headshot from '../assets/images/Headshot.png';
import Image from 'react-bootstrap/Image'

function CircleImageHeadshot(props){
    return(
        <Image src={Headshot} roundedCircle />
        );
}

export default CircleImageHeadshot;