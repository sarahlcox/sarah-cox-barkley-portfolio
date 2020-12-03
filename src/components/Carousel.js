import React from 'react';
import Card from '../components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import WebDev from '../assets/images/WebDev.jpg';
import About from '../assets/images/About.jpg';
import Photography from '../assets/images/Photography.jpg';

// create the carousel component and items that contain images 
class Carousel extends React.Component{
    constructor(props) {
        super(props);
        this.state={            
            items: [
            {
                id: 0,
                title: 'Web Development',
                subTitle: 'Full Stack Web Developer',
                imgSrc: WebDev,
                link: 'https://sarahlcox.github.io/projects',
                selected: false
            },
            {
                id: 1,
                title: 'Sarah Cox-Barkley',
                subTitle: 'Creative Professional',
                imgSrc: About,
                link: 'https://sarahlcox.github.io/about',
                selected: false
            },
            {
                id: 2,
                title: 'Photography',
                subTitle: 'Branding Photography Services',
                imgSrc: Photography,
                link: 'https://featherprintphotography.com',
                selected: false
            },
        ]}
    }

    handleCardClick = (id, card) => {
        // spread operator for the array items to display
        let items = [...this.state.items];
        // when the item is selected set it to false/toggle, if not selected set it to true 
        items[id].selected = items[id].selected ? false : true;
        // loop through each one and change the ones not selected is true
        items.forEach(item => {
            if(item.id !== id) {
                item.selected= false;
            }
        });
        // set the state for the array
        this.setState({
            items
        });
    }
    // instead of using render create a method that maps through the items and makes a hard component 
    makeItems= (items) =>{
        return items.map(item => {
        return <Card item={item} click={(e =>this.handleCardClick(item.id, e))} key={item.id} />
        })
    }
    // using bootstrap elements to wrap the items nicely
    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}
export default Carousel;