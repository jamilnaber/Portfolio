import React from 'react';
import Content from '../Components/Content';
import Hero from '../Components/Hero';

function AboutPage(props) {
    
    return(
        <div>
            <Hero title={props.title} />

            <Content>
                <p> Work on it soon with HTML and CSS</p>
            </Content>
        </div>
    );
}

export default AboutPage;