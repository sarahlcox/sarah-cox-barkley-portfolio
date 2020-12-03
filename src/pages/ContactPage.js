import React from 'react';
// import Form from 'react-bootstrap/Form';
import Hero from '../components/Hero';
import Content from '../components/Content.js';
import CircleImageHeadshot from '../components/CircleImageHeadshot';
import ContactInfo from '../components/ContactInfo';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';



function ContactPage(props){
    return(
        <Container fluid={true}>
            <Hero title={props.title} />
            <Content>
                <Row>
                <Col><Container className="pic-container"><CircleImageHeadshot/></Container></Col>
                <Col><Container><ContactInfo /></Container></Col>
                </Row>
            </Content>
        </Container >
    );

}
export default ContactPage;