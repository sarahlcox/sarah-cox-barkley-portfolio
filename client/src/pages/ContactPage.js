import React from 'react';
import Axios from 'axios';
import Form from 'react-bootstrap/Form';
import Hero from '../components/Hero';
import Content from '../components/Content.js';

class ContactPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null,
        }
    }

    render() {
        return(
            <div>
                <Hero title={this.props.title} />
                <Content>
                <ul>
                <li><a href="mailto:sarahl.cox.22@gmail.com" target="_blank">sarahl.cox.22@gmail.com</a></li>
                <li><a href="https://linkedin.com/in/sarahlcox22" target="_blank">LinkedIn</a></li>
                <li><a href="https://github.com/sarahlcox" target="_blank">GitHub</a></li>
                <li><a href="https://www.facebook.com/FeatherPrintPhoto" target="_blank">Facebook</a></li>
                <li><a href="https://www.instagram.com/sarahl.cox/" target="_blank">Instagram</a></li>
                <li><a href="https://featherprintphotography.com/" target="_blank">My Website</a></li>
              </ul>
                </Content>
            </div>
        );
    }
}

export default ContactPage;
