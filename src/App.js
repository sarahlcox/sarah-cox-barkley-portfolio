import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Footer from './components/Footer.js';
import './App.css';
import HomePage from './pages/HomePage.js';
import AboutPage from './pages/AboutPage.js';
import ProjectsPage from './pages/ProjectsPage.js';
import ContactPage from './pages/ContactPage.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      title: 'Sarah Cox-Barkley',
      headerLinks: [
        {title:'Home',path: '/'},
        {title:'About',path: '/about'},
        {title:'Projects',path: '/projects'},
        {title:'Contact',path: '/contact'},
      ],
      home: {
        title: 'Hi! I\'m Sarah!',
        subTitle: '',
        text: ''
      },
      about: {
        title: 'About Me',
        
      },
      projects: {
        title: 'Projects',
      },
      contact: {
        title: 'Let\'s Connect!',

      },
      
    }
  }
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Sarah Cox-Barkley</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/projects">Projects</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/>} />
          <Route path="/sarah-cox-barkley-portfolio" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/>} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/projects" render={() => <ProjectsPage title={this.state.projects.title} />}/>
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
