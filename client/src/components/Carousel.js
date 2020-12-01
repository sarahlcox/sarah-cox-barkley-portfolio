import React from 'react';
import Card from '../components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import WebDev from '../assets/images/WebDev.jpg';
import About from '../assets/images/About.jpg';
import Photography from '../assets/images/Photography.jpg';


class Carousel extends React.Component{
    constructor(props) {
        super(props);
        this.state={            
            items: [
            {
                id: 0,
                title: 'Web Development',
                subTitle: 'View My Web Development Projects',
                imgSrc: WebDev,
                link: '#',
                selected: false
            },
            {
                id: 1,
                title: 'Sarah Cox-Barkley',
                subTitle: 'View My Resume & About Me Details',
                imgSrc: About,
                link: '#',
                selected: false
            },
            {
                id: 2,
                title: 'Photography',
                subTitle: 'View My Photography Website',
                imgSrc: Photography,
                link: 'https://featherprintphotography.com',
                selected: false
            },
        ]}
    }
    render() {
        return(
            <p>Carousel Works!</p>
        );
    }
}


export default Carousel;