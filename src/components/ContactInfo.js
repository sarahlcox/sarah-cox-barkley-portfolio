// this is the component for the cards in the carousel items 
import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function ContactInfo(props){
    return(
<Card style={{ width: '18rem' }}>
  <ListGroup variant="flush">
    <ListGroup.Item><a href="mailto:sarahl.cox.22@gmail.com" target="_blank">sarahl.cox.22@gmail.com</a></ListGroup.Item>
    <ListGroup.Item><a href="https://linkedin.com/in/sarahlcox22" target="_blank">LinkedIn</a></ListGroup.Item>
    <ListGroup.Item><a href="https://github.com/sarahlcox" target="_blank">GitHub</a></ListGroup.Item>
    <ListGroup.Item><a href="https://www.facebook.com/FeatherPrintPhoto" target="_blank">Facebook</a></ListGroup.Item>
    <ListGroup.Item><a href="https://featherprintphotography.com/" target="_blank">My Website</a></ListGroup.Item>
  </ListGroup>
</Card>
        );
}

export default ContactInfo;