import React from 'react';
import Hero from '../components/Hero.js';
import ProjectsCarousel from '../components/ProjectsCarousel.js';
import Content from '../components/Content';

function ProjectsPage(props){
        return(
            <div>
                <Hero title={props.title} />
                <Content>
                    <p>Take a look around at the web development projects that I've created below.</p>
                </Content>
                <ProjectsCarousel />
            </div>
        );
    
}
export default ProjectsPage;