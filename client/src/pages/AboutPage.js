import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
                <p>I am a full stack web developer with a passion for small business branding and development. I love to learn new skills, and have a background in small business management, English studies, real estate, and I'm a certified yoga teacher. I live a fast-paced life, but you can sometimes find me lost in a good book.</p>
            </Content>
        </div>
    );

}

export default AboutPage;