import React from 'react';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Hero(props) {
    return(
        <Jumbotron>
        <Container fluid={true}>
            <Row className="justify-content-center py-5">
                <Col>
                    {props.title && <h1>{props.title}</h1> }
                    {props.subTitle && <h3>{props.subTitle}</h3> }
                    {props.text && <h3>{props.text}</h3> }
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;