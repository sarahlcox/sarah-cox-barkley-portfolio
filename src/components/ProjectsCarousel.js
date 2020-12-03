import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';
import WanderlustAmerica from '../assets/images/WanderlustAmerica.png';
import Vote2020 from '../assets/images/Vote2020.png';
import WeatherDashboard from '../assets/images/WeatherDashboard.png';
import BudgetTracker from '../assets/images/BudgetTracker.png';
import CodeQuiz from '../assets/images/CodeQuiz.png';
import UserDirectory from '../assets/images/UserDirectory.png';
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
                <h3>Wanderlust America</h3>
                <p>
                <a href="https://campground-mapper.herokuapp.com/" target="_blank">Visit the Site</a>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block img-width"
                src= {Vote2020}
                alt="Second slide"
              />
      
              <Carousel.Caption>
                <h3>Vote 2020</h3>
                <p>
                  <a href="https://b-dionysus.github.io/project1-Election/index.html" target="_blank">Visit the Site</a>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block img-width"
                src= {WeatherDashboard}
                alt="Third slide"
              />
      
              <Carousel.Caption>
              <h3>Weather Dashboard</h3>
                <p>
                  <a href="https://sarahlcox.github.io/weather-dashboard/" target="_blank">Visit the Site</a>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block img-width"
                src= {BudgetTracker}
                alt="Fourth slide"
              />
      
              <Carousel.Caption>
                <h3>Budget Tracker</h3>
                <p>
                  <a href="https://stark-chamber-80263.herokuapp.com/" target="_blank">Visit the Site</a>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block img-width"
                src= {CodeQuiz}
                alt="Fifth slide"
              />
      
              <Carousel.Caption>
                <h3>Code Quiz</h3>
                <p>
                  <a href="https://sarahlcox.github.io/Homework_4-webapis-sbarkley/newindex.html" target="_blank">Visit the Site</a>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block img-width"
                src= {UserDirectory}
                alt="Sixth slide"
              />
      
              <Carousel.Caption>
                <h3>User Directory</h3>
                <p>
                  <a href="https://pacific-brushlands-70133.herokuapp.com/" target="_blank">Visit the Site</a>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          </Row>
        </Container>
        );
      }
    
export default ProjectsCarousel;
