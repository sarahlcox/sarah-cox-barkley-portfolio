import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';
import WanderlustAmerica from '../assets/images/WanderlustAmerica.png';
import Vote2020 from '../assets/images/Vote2020.png';
import WeatherDashboard from '../assets/images/WeatherDashboard.png';
import CodeQuiz from '../assets/images/CodeQuiz.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

    function ProjectsCarousel() {
        const [index, setIndex] = useState(0);
      
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        };
      
        return (
        <Container fluid={true}>
          <Row className="justify-content-around">
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img
                className="d-block img-width"
                src= {WanderlustAmerica}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block img-width"
                src= {Vote2020}
                alt="Second slide"
              />
      
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block img-width"
                src= {WeatherDashboard}
                alt="Third slide"
              />
      
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block img-width"
                src= {CodeQuiz}
                alt="Fourth slide"
              />
      
              <Carousel.Caption>
                <h3>Fourth slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          </Row>
        </Container>
        );
      }
    
export default ProjectsCarousel;
